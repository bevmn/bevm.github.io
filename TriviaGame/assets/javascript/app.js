// initialize the .js document with this. It contains all of the code for the .js file:
$( document ).ready(function() {

    // Create the variable game to house questions, choice list, question number and correct answer
        var game = {
            questions: [
            {
                question: 'In what year was "When Harry Met Sally Released?',
                possibles: ['1986', '1989', '1990', '1991'],
                id: 'question-one',
                answer: 2
            }, {
                question: 'In what year does Harry meet Sally?',
                possibles: ['1977', '1979', '1983', '1986'],
                id: 'question-two',
                answer: 1
            }, {
                question: 'Who did the musical score for the movie?',
                possibles: ['Luther Vandross', 'Jack Black', 'Harry Connick Jr', 'Bill Joel'],
                id: 'question-three',
                answer: 3
            }, {
                question: 'What was the name of Sallys best friend?',
                possibles: ['Jen', 'Carrie', 'Mary', 'Marie'],
                id: 'question-four',
                answer: 4
            }, {
                question: 'In what city did Harry meet Sally?',
                possibles: ['New York', 'Los Angeles', 'Toronto', 'Chicago'],
                id: 'question-five',
                answer: 4
            }, {
                question: 'What is the name of Harrys best friend?',
                possibles: ['John', 'Jeff', 'Jess', 'Steve'],
                id: 'question-six',
                answer: 3
    
            }, {
                question: 'Who introduced Harry and Sally',
                possibles: ['Amanda', 'Joe', 'Ira', 'Alice'],
                id: 'question-seven',
                answer: 1
            }, {
                question: 'What is Sallys occupation?',
                possibles: ['Gymnast', 'Journalist', 'Fasion Editor', 'Accountant'],
                id: 'question-eight',
                answer: 2
            }, {
                question: 'Who wrote when Harry Met Sally?',
                possibles: ['Nora Ephron', 'Rob Riener', 'Steven Spielberg', 'George Lucus'],
                id: 'question-nine',
                answer: 1
            }, {
                question: 'Who played Sally?',
                possibles: ['Nora Ephron', 'Carrie Fisher', 'Meg Ryan', 'Michelle Pfeiffer'],
                id: 'question-ten',
                answer: 3
            }, {
                question: 'At what deli was the famous line "Ill have what shes having" spoken?',
                possibles: ['Iras', 'Katz', 'Bens', '5th Street'],
                id: 'question-eleven',
                answer: 2
            }, {
                question: 'Who was the executive producer and director?',
                possibles: ['Rob Riener', 'Nora Ephron', 'George Lucas', 'Billy Crystal'],
                id: 'question-twelve',
                answer: 1
            }, {
                question: 'Who played Harry?',
                possibles: ['Ed Harris', 'David Spade', 'Billy Crystal', 'Bruno Kirby'],
                id: 'question-thirteen',
                answer: 3
            }
            ]}
    
        
    // This initializes the button that starts the game 
        $(".startGame").on("click", function (){
    // when the start button clicked, the div with the questions that was hidden is shown
            run();

            $('.wrapper').show();
            // console.log('hello');
    
            $(this).hide();
        });
    
        // Creates a number variable to offer player 60 secs on clock and run the clock down by a second 
        var number = 60;
        $('#timeLeft').on('click', run);
    
        // Function to display the time in decreasing seconds
        function decrement(){
            // Decrease number by one.
            number--;
            // Show the seconds remaining
            $('#timeLeft').html('<h2>' + number + " seconds"+'</h2>');
            // Once second clock hits zero, a the function will stop the timer
            if (number === 0){
            stop();
            // Alerts the player that the time is up
            $('#message').html('time up!');
            checkAnswers();
            }
        }
        
    
        // Build function that runs the clock in one second count down using (1000)
        function run(){
            counter = setInterval(decrement, 1000);
        }
        
        // Build function to stop the clock
        function stop(){
        
            clearInterval(counter);
        }
    
        // Run the function
    
    // this function dynamically creates the inputs needed for the form and relates them to the
    // items held within the game object 
    function formTemplate(data) {
    // the first variable relates the form field for question with the data in the object for
    // each question so that the questions can be inputed into that form field
        var qString = "<form id="+data.id+">"+ data.question +"<br>";
    // this variable to access the question object's possibles array needed to answer each question
        var possibles = data.possibles;
    // a for loop to go through the possibles array for each question to add the values of each possibles
    // array and using qString, add them as radio buttons to the question to which they are
    // associated
        for (var i = 0; i < possibles.length; i++) {
            var possible = possibles[i];
            // console.log(possible);
            qString = qString + "<input type='radio' name='"+data.id+"' value="+ i +">"+possible;
    
        }
        return qString + "</form>";
    }
    window.formTemplate = formTemplate;
    
    // this function takes the template created in the last function and by appending it,
    // allows it to be displayed on the page
    function buildQuestions(){
        var questionHTML = ''
        for (var i = 0; i<game.questions.length; i++) {
            questionHTML = questionHTML + formTemplate(game.questions[i]);
        }
        $('#questions-container').append(questionHTML);
    
    }
    
    // function that 
    function isCorrect(question){
                var answers = $('[name='+question.id+']');
                console.log(answers)

        var correct = answers.eq(question.answer);
        

        return +correct.attr('value') === question.answer
        
        // console.log(+correct.attr('value'), 'is correct variable', question.answer, ', is question.answer')
        // var isChecked = correct.is(':checked');
        // return isChecked;
    }
    
    // call the buildQuestions function
    buildQuestions();
    
    // function to build the display of guesser results
    function resultsTemplate(question){
        var htmlBlock = '<div>'
        htmlBlock = htmlBlock + question.question + ': ' + isChecked;
        return htmlBlock + "</div>";
    }
    
    // function to tabulate the guesser results
    function checkAnswers (){
    
    // variables needed to hold results
        var resultsHTML = '';
        var guessedAnswers = [];
        var correct = 0;
        var incorrect = 0;
        var unAnswered =0
    
    // for loop iterates through each question and passes the questions at each index first into
    // the isCorrect function to see if they match the indices of correct answers, and if they do,
    // increments up the correct score
        for (var i = 0; i<game.questions.length; i++) {
            if (isCorrect(game.questions[i])) {
                // console.log('correct')
                correct++;
            } else {
    // then this statement runs the questions at each index through the checkAnswered function
    // to determine whether the user clicked an answer, or did not click an answer, so that
    // incorrect and unAnswered scores can be delineated from each other
                if (checkAnswered(game.questions[i])) {
                    incorrect++;
                } else {
                    unAnswered++;
                }
            }
    
        }
    // display the results of the function in the results div and use strings of text to relate the
    // results of the for loop with their corresponding values
        $('.results').html('correct: '+correct+ "<br>" +'incorrect: '+incorrect+ "<br>" +'unanswered: '+unAnswered);
    }
    
    // this function checks whether the guesser actually checked an answer for each of the 
    // questions
    function checkAnswered(question){
        var anyAnswered = false;
        var answers = $('[name='+question.id+']');
    // the for loop creates a condition to check if the buttons were checked and and then sets
    // the anyAnswered variable to true if they were
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                anyAnswered = true;
            }
        }
    // then return the anyAnswered variable so it can be tabulated in the last function to distinguish
    // between incorrect answers and those answers that were not attempted
        return anyAnswered;
    
    }
    
    // create a function hitting the "Done Button" that both checks the Answers and stops the clock
   
        $('#doneButton').on('click', function() {
        checkAnswers();
        stop();
        $("#messageDiv").html("Game Over!");
        })
    });

    
    