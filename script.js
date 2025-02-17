const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        answer: "Blue Whale"
    },
    {
        question: "What is the Primary function of a router?",
        options: ["Connectivity", "Storage", "Processing", "Output"],
        answer: "Connectivity"
    },
    {
        question: "Which language is commonly used for Web development?",
        options: ["Python", "Java", "C++", "Java Script"],
        answer: "Java Script"
    },
    {
        question: "What does http stands for?",
        options: ["Hyper text transfer protocol ", "Hyper text transfer portal", "High text transfer Protocol", "High transfer text protocol"],
        answer: "Hyper text transfer protocol"
    },
    {
        question: "Which device is used primarily for data storage?",
        options: ["Server","Switch","Router","Hard Drive"],
        answer: "Hard Drive"
    },
    {
        question: "What is cybersecurity focused on protecting?",
        options: ["Hardware","Software","Information","Electricity"],
        answer: "Information"
    },
    {
        question: "Which protocol ensures secure data transmission?",
        options: ["HTTP","FTP","HTTPS","SMTP"],
        answer: "HTTPS"
    },
    {
        question: "What technology is used to create virtual machines?",
        options: ["Docker","Kubernetes","VMware","Hyper-V"],
        answer: "VMware"
    },
    
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    questionEl.textContent = "Quiz Over!";
    optionsContainer.innerHTML = "";
    scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
    nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", nextQuestion);

// Load first question
loadQuestion();
