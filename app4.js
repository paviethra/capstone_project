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
    new Question("In the US, memorials to the Confederacy have been among those targeted. A number of statues of Jefferson Davis have been removed or vandalised. Who was he?", [ "The US president during the Civil War", "The president of the Confederacy","The head of the Confederate army", "I don't know"], "The president of the Confederacy"),
    new Question("In June, protesters chopped the head off a statue which stands on a plinth in the heart of Boston, Massachusetts. Who lost their head?", ["Christopher Columbus", "George Washington", "Abraham Lincoln", "I don't know"], "Christopher Columbus"),
    new Question("A bronze statue of Edward Colston in Bristol was pulled down and thrown into the Floating Harbour during a Black Lives Matter rally in the UK in June. Who was he?", ["I don't know", "A British governor","A slave trader", "A military officer"], "A slave trader"),
    new Question("A statue of the founder of which UK movement was temporarily boarded up amid claims they supported Hitler?", ["The Scout Association", "I don't know", "The Women’s Institute", "The Ramblers' Association"], "The Scout Association"),
    new Question("A statue of Sir Winston Churchill in Parliament Square in London was sprayed with graffiti during a similar anti-racism protest. What was written on it?", ["Not a war hero", "I don't know", "Was a racist", "Absurd and shameful"], "Was a racist")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();


