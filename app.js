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
    new Question("What is colour discrimination?", ["all", "none","Teasing someone for their colour", "Not respecting someones colour"], "Not respecting someones colour"),
    new Question("Which of the following is not a ground for claiming discrimination?", ["Being overweight", "Marital status", "Part time workers", "Being Welsh"], "Being Welsh"),
    new Question("Which of the following is generally unlawful in the UK?", [" Discrimination claims on ground of hair colour.", "Positive action.","Discrimination against someone who is clinically depressed.", "Discrimination on grounds of regional accent."], "Positive action."),
    new Question("Which of these countries are completely against any kind of discrimination?", ["USA", "Britain", "Korea", "India"], "USA"),
    new Question("What is one of the most important type of discrimination", ["Age Discrimination", "Race,", "Color ", "Religious Discrimination"], "Religious Discrimination")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();


