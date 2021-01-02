function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What Indian city is the capital of two states?", ["Mumbai", "Kolkata","Delhi", "Chandigarh"], "Chandigarh"),
    new Question("How many countries border India?", ["9", "14", "6", "2"], "6"),
    new Question("What is the capital of Gujarat?", ["Mmbai", "Bhopal","Lucknow", "Gandhinagar"], "Gandhinagar"),
    new Question("Who was the president of India in 2009?", ["Pratibha Patil", "Govind Singh", "Jawaharlal Nehru", "Indira Gandhi"], "Pratibha Patil"),
    new Question("What is India’s smallest state by area?", ["Pondicherry", "Kerela", "Uttar Pradesh", "Goa"], "Goa")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();


