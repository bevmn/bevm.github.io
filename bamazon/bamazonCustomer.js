var mysql = require('mysql');

var inq = require('inquirer');
//Create Connection
var sql = {
    con: mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "bamazonDB"
    })
}

var bamazon = {
    init: function() {
           
        //start db connection, display prod info and inquire customer
        this.startDb(); 
         
       
    },
    //start db connection
    startDb: function() {
        sql.con.connect(function(err) {
            if (err) { throw err; }
            console.log("Connected to Database!"); 
            bamazon.displayProducts();

        });
    
    },
    //display products and pull client export
    displayProducts: function() {
        
        sql.con.query("SELECT * FROM products", function(err, result, fields) {
            if (err) throw err;
            var output = []
            for (i = 0; i < result.length; i++) {
                var data = result[i];
                output.push([data.sku, data.product_name, data.department_name, data.price, data.stock_quantity]);
            }
            console.log(output.toString() + "\n\n\n\n");
            bamazon.initInq(inq); 
        });
    },

    //ask for desired product and quantity
    initInq: function(inq) {
        inq.prompt([{
            type: "Products",
            message: "Please enter an item # \n\n",
            name: "item"
        }]).then(function(data) {
            data.item = parseInt(data.item);
            //check if entry is a number
            if (isNaN(data.item) === false) {
                var item = data.item;
                //inquire for item quantity
                bamazon.initQuant(inq, item); 
            }
            //if entry is not a number have customer attempt entry again
            else {
                console.log("PLEASE ENTER A NUMBER");
                bamazon.initInq(inq);
            }
        });
    },
    //prompt for a quantity again
    initQuant: function(inq, item) {
        inq.prompt([{
            type: "input",
            message: "Quantity \n\n",
            name: "count"
        }]).then(function(data) {
            //take entry -> make number
            data.count = parseInt(data.count);
            //check if entry is a number
            if (isNaN(data.count) === false) {
                var quant = parseInt(data.count);
                bamazon.confirmOrder(inq, item, quant);
            }
            //same entry issue again.....
            else {
                console.log("PLEASE ENTER A NUMBER");
                bamazon.initQuant(inq, item);
            }
        });
    },
    //verify order details
    confirmOrder: function(inq, item, quant) {
        var query = "SELECT product_name, price, stock_quantity FROM products WHERE ?";
        sql.con.query(query, { sku: item }, function(err, res) {
            var custCost = quant * res[0].price;
            var response = "";
            inq.prompt({
                    name: "confirmOrder",
                    type: "confirm",
                    message: "Please confirm you want to purchase " + quant + " " + res[0].product_name + " for $" + custCost
                })
                .then(function(answer) {
                    if (answer.confirmOrder === true) {
                        if (quant <= res[0].stock_quantity) {
                            response = "\n\nThank you! We are processing your order!\n.....\n.....\n.....\n.....\n.....\n";
                            var quantNew = res[0].stock_quantity - quant;
                            var prodName = res[0].product_name;
                            bamazon.updateDB(item, quantNew);
                        } else {
                            response = "\n\nYikes! You've requested more " + res[0].product_name + " than available.\n\n";
                            bamazon.stopDb();
                        }
                        console.log(response);
                    } else {
                        console.log("\n\nPlease shop with us again soon!");
                        bamazon.stopDb();
                    }
                });
        })
    },
    createOrder: function(item, prodName, quant, custCost, quantNew) {
        sql.con.query(
            "INSERT INTO orders SET ?", {
                item_id: item,
                product_name: prodName,
                quantity: quant,
                total_price: custCost,
                remaining_stock: quantNew
            },
            function(err) {
                if (err) throw err;
                console.log("your order has been processed");
                var tables = require("./tables.js");
                sql.con.query("SELECT * FROM orders", function(err, result, fields) {
                    if (err) throw err;
                    for (i = 0; i < result.length; i++) {
                        var data = result[i];
                        tables.makeTable.orders.push([data.order_id, data.item_id, data.product_name, data.quantity, data.total_price, data.remaining_stock]);
                    }
                    console.log(tables.makeTable.orders.toString() + "\n\n\n\n");
                });
            }
        );
    },
    //update the database to reflect confirmed order
    updateDB: function(item, quantNew) {
        sql.con.query(
            "UPDATE products SET ? WHERE ?", [
                { stock_quantity: quantNew },
                { sku: item }
            ],
            function(err) {
                if (err) throw err;
                console.log("The database has been updated!");
                bamazon.stopDb();
            }
        )
    },
    //end db connection
    stopDb: function() {
        sql.con.end(function(err) {
            if (err) { throw err; }
            console.log("Disconnected from database!\n\n\n\n");
        });
    }
}
//initalize program
bamazon.init();