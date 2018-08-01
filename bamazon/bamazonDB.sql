DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  sku INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(75) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (sku)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Martini Shaker Set", "Bar", 29.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ashlyn Throw", "Bed & Bath", 27.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sharp Objects", "Books & Media", 16.99, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bordeaux Stemware", "Bar", 60.00, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lavendar Fields Body Lotion", "Personal", 12.99, 105);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Devlyn 16 pc Set", "Dinnerware", 30.00, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Organic Laundry Detergent", "Household", 13.99, 163);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mornin' Gorgeous Coffee Mug", "Dinnerware", 9.99, 67);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Harvest of Joy", "Books & Media", 16.00, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Manicure Set", "Personal", 21.33, 16);

SELECT*FROM products;