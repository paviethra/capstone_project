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
    new Question("Where was Abraham Lincoln assassinated?", ["In a theater", "On a train","At his house", "In the street"], "In a theater"),
    new Question("What major airline began as a crop-dusting service?", ["American", "Air India", "Delta", "Pan Am"], "Delta"),
    new Question("How many months was the Pony Express, the pioneer mail service in the Wild West, operational?", ["18", "48","12", "24"], "18"),
    new Question("Which structure was destroyed in the September 11 terrorist attacks?", ["The chrysler building", "The world trade center", "Empire state building", "The pentagon"], "The world trade center"),
    new Question("What nickname is given to the period preceding the Great Depression in America?", ["The terrible teens", "The roaring 20's", "The naughties", "The rumbling 30's"], "The roaring 20's")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();


