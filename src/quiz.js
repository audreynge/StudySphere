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
        "question": "What time of day do you prefer to study?",
        "options": [
            {"text": "Morning", "points": 2},
            {"text": "Afternoon", "points": 1},
            {"text": "Evening", "points": 3}
        ],
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
    if (userScore >= 13){
        questionContainer.textContent = "Active Recall and Spaced Reptition";
        option1.textContent = "";
    }
    else if (userScore >= 8){
        questionContainer.textContent = "Pomodoro Technique";
        option1.textContent = "";
    }
    else {
        questionContainer.textContent = "Visualization and Mind Mapping";
        option1.textContent = "";
    }

}

