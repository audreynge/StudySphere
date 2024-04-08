const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startQuiz);

const quizData = {
    "question1": {
        "question": "How do you prefer to learn new information?",
        "options": [
            {"text": "Reading", "points": 2},
            {"text": "Listening", "points": 3},
            {"text": "Doing practical exercises", "points": 1}
        ],
    },
    "question2": {
        "question": "What environment do you find most conducive to studying?",
        "options": [
            {"text": "Quiet and isolated", "points": 2},
            {"text": "In a group with others", "points": 1},
            {"text": "Somewhere with background noise", "points": 3}
        ],
    },
    "question3": {
        "question": "How do you typically organize your study materials?",
        "options": [
            {"text": "Using written notes and outlines", "points": 3},
            {"text": "Using digital tools like apps or online platforms", "points": 2},
            {"text": "Using visual aids like diagrams or mind maps", "points": 1}
        ],
    },
    "question4": {
        "question": "How do you prefer to take breaks during study sessions?",
        "options": [
            {"text": "Taking short breaks often", "points": 1},
            {"text": "Taking longer breaks after every hour", "points": 2},
            {"text": "Studying continuously without breaks until the task is complete", "points": 3}
        ]
    },
    "question5": {
        "question": "Which type of learner do you consider yourself to be?",
        "options": [
            {"text": "Visual", "points": 2},
            {"text": "Auditory", "points": 3},
            {"text": "Kinesthetic", "points": 1}
        ],
    },
};

const questionContainer = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
let questionIndex = 0;
let userScore = 0;

function startQuiz() {
    startButton.style.display = "none";
    displayQuestion(0);
    questionContainer.style.visibility = "visible";
    option1.style.visibility = "visible";
    option2.style.visibility = "visible";
    option3.style.visibility = "visible";
}

function displayQuestion(index) {
    const questionData = quizData[`question${index + 1}`];
    questionContainer.textContent = questionData.question;
    // Update text content of existing options buttons
    option1.textContent = questionData.options[0].text;
    option2.textContent = questionData.options[1].text;
    option3.textContent = questionData.options[2].text;
}

// Add event listeners to option buttons
option1.addEventListener("click", function() {
    const questionData = quizData[`question${questionIndex + 1}`];
    const points = questionData.options[0].points;
    userScore += points;
    questionIndex++;
    if (questionIndex < Object.keys(quizData).length) {
        displayQuestion(questionIndex);
    }
    else{
        displayResults();
    }
});

option2.addEventListener("click", function() {
    const questionData = quizData[`question${questionIndex + 1}`];
    const points = questionData.options[1].points;
    userScore += points;
    questionIndex++;
    if (questionIndex < Object.keys(quizData).length) {
        displayQuestion(questionIndex);
    }
    else{
        displayResults();
    }
});

option3.addEventListener("click", function() {
    const questionData = quizData[`question${questionIndex + 1}`];
    const points = questionData.options[2].points;
    userScore += points;
    questionIndex++;
    if (questionIndex < Object.keys(quizData).length) {
        displayQuestion(questionIndex);
    }
    else{
        displayResults();
    }
});

function displayResults() {
    option2.style.display = "none";
    option3.style.display = "none";
    if (userScore >= 11){
        questionContainer.textContent = "You got: Active Recall and Spaced Repetition";
        option1.textContent = "Strengthen memory by actively retrieving information and reviewing it at spaced intervals. This technique encourages deeper engagement with the material and efficient use of time.";
        option1.style.width = "35rem";
    }
    else if (userScore >= 7){
        questionContainer.textContent = "You got: Pomodoro Technique";
        option1.textContent = "Increase focus and productivity by breaking study sessions into manageable intervals, typically 25 minutes, separated by short breaks. This method helps prevent burnout and maintains mental freshness throughout the study session.";
        option1.style.width = "35rem";
    }
    else {
        questionContainer.textContent = "You got: Visualization and Mind Mapping";
        option1.textContent = "Enhance comprehension and recall by creating mental images or diagrams to represent and organize information. This technique promotes a deeper understanding of complex concepts and aids in connecting related ideas for improved learning outcomes.";
        option1.style.width = "35rem";
    }

}

