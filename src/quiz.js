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
    // Add more questions as needed
};


const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("optionsContainer");
function startQuiz() {
    let questionIndex = 0;
    questionContainer.style.visibility = "visible";
    optionsContainer.style.visibility = "visible";




}

function displayQuestion(index){
    
}



