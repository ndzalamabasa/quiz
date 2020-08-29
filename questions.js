class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}



class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}


function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        const element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        const choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++){
            const elem = document.getElementById("choice" + i);
            elem.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

function guess(id,guess) {
    var button = document.getElementById(id);
    button.onclick = () => {
        if (quiz.getQuestionIndex().text === null) {
            showScores();
        }
        else {
            quiz.guess(guess);
            populate();
        }
    };
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHTML = "<h1>Results</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score+"</h2>";
    gameOverHTML += "<h3 id='next'> Next Quiz </h3>";

    var element = document.querySelector(".result");
    const page = document.getElementById("quiz");
    page.style.opacity = 0;
    element.classList.toggle("show-results");
    element.innerHTML = gameOverHTML;

    const nextQuiz = document.getElementById("next");
    nextQuiz.onclick = () => {
        if (page.className=="") {
            element.classList.toggle("show-results");
            const topic = document.getElementById("topic");
            topic.innerHTML = "South African Politics";
            page.style.opacity = 1;
            page.classList.toggle('politics');
            quiz = new Quiz(politics);
            populate();
        }
        else {
            topic.innerHTML = "Web Development Quiz";
            element.classList.toggle("show-results");
            page.style.opacity = 1;
            quiz = new Quiz(questions);
            populate();
        }
    };
}

const questions = [
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("What language is used in relational databases?", ["JavaScript", "Nodejs", "SQL", "All"], "SQL")
];

const politics = [
    new Question("South African first Black President", ["Thabo Mbeki", "Nelson Mandela","De Clerk", "Jacob Zuma"], "Nelson Mandela"),
    new Question("South African Freedom Day is celebrated on the", ["27th April", "16th June", "21st March", "9th August"], "27th April"),
    new Question("Who was not a Revonia Trialist?", ["Nelson Mandela", "Andrew Mlangeni","Mahhumed Cathrada", "Desmond Tutu"], "Desmond Tutu"),
    new Question("Current Minister of Sports", ["Nathi Mthethwa", "Fikile Mbalula", "Mbuyiseni Ndlozi", "Patricia Deliel"], "Nathi Mthethwa"),
    new Question("ACDP Leader", ["Mbazima Shilowa", "Kenneth Meshoe", "Herman Mashaba", "Trevor Mannuel"], "Kenneth Meshoe")
];

let quiz = new Quiz(questions);
populate();