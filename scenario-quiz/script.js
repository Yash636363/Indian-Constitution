const scenarios = [
    {
        question: "You witness someone being discriminated against in a public place. What fundamental right is being violated?",
        options: [
            { text: "Right to Equality", correct: true },
            { text: "Right to Freedom", correct: false },
            { text: "Right to Education", correct: false },
            { text: "Right to Privacy", correct: false }
        ]
    },
    {
        question: "A child is being forced to work instead of attending school. Which fundamental duty is being neglected?",
        options: [
            { text: "To promote harmony", correct: false },
            { text: "To provide education", correct: true },
            { text: "To uphold the law", correct: false },
            { text: "To protect the environment", correct: false }
        ]
    },
    
        // Existing scenarios...
        {
            question: "You witness someone being discriminated against in a public place. What fundamental right is being violated?",
            options: [
                { text: "Right to Equality", correct: true },
                { text: "Right to Freedom", correct: false },
                { text: "Right to Education", correct: false },
                { text: "Right to Privacy", correct: false }
            ]
        },
        {
            question: "A child is being forced to work instead of attending school. Which fundamental duty is being neglected?",
            options: [
                { text: "To promote harmony", correct: false },
                { text: "To provide education", correct: true },
                { text: "To uphold the law", correct: false },
                { text: "To protect the environment", correct: false }
            ]
        },
        // 20 more scenarios
        {
            question: "A journalist is not allowed to publish an article critical of the government. Which right is being violated?",
            options: [
                { text: "Right to Equality", correct: false },
                { text: "Right to Freedom of Speech", correct: true },
                { text: "Right to Life", correct: false },
                { text: "Right to Education", correct: false }
            ]
        },
        {
            question: "An individual is detained without a trial. Which right is being violated?",
            options: [
                { text: "Right to Freedom", correct: true },
                { text: "Right to Privacy", correct: false },
                { text: "Right to Education", correct: false },
                { text: "Right to Religion", correct: false }
            ]
        },
        {
            question: "You are denied access to a public service based on your caste. Which right is violated?",
            options: [
                { text: "Right to Equality", correct: true },
                { text: "Right to Freedom", correct: false },
                { text: "Right to Education", correct: false },
                { text: "Right to Privacy", correct: false }
            ]
        },
        {
            question: "A citizen is arrested for protesting peacefully. What right does this violate?",
            options: [
                { text: "Right to Freedom of Assembly", correct: true },
                { text: "Right to Equality", correct: false },
                { text: "Right to Privacy", correct: false },
                { text: "Right to Life", correct: false }
            ]
        },
        {
            question: "A teacher is not allowed to express their personal beliefs in class. Which right is being violated?",
            options: [
                { text: "Right to Freedom of Speech", correct: true },
                { text: "Right to Education", correct: false },
                { text: "Right to Life", correct: false },
                { text: "Right to Equality", correct: false }
            ]
        },
        {
            question: "A woman is denied a job because of her gender. What right is violated?",
            options: [
                { text: "Right to Equality", correct: true },
                { text: "Right to Freedom", correct: false },
                { text: "Right to Education", correct: false },
                { text: "Right to Privacy", correct: false }
            ]
        },
        {
            question: "A person's home is searched without a warrant. Which right is being violated?",
            options: [
                { text: "Right to Privacy", correct: true },
                { text: "Right to Freedom", correct: false },
                { text: "Right to Education", correct: false },
                { text: "Right to Life", correct: false }
            ]
        },
        {
            question: "A company fires an employee for taking maternity leave. What right is being violated?",
            options: [
                { text: "Right to Equality", correct: true },
                { text: "Right to Freedom", correct: false },
                { text: "Right to Privacy", correct: false },
                { text: "Right to Life", correct: false }
            ]
        },
        {
            question: "A person is not allowed to practice their religion. Which right is being violated?",
            options: [
                { text: "Right to Freedom of Religion", correct: true },
                { text: "Right to Equality", correct: false },
                { text: "Right to Freedom", correct: false },
                { text: "Right to Education", correct: false }
            ]
        },
        {
            question: "You overhear someone discussing their political views at a café. A manager asks them to leave. Which right is being violated?",
            options: [
                { text: "Right to Freedom of Speech", correct: true },
                { text: "Right to Equality", correct: false },
                { text: "Right to Privacy", correct: false },
                { text: "Right to Life", correct: false }
            ]
        },
        {
            question: "A student is bullied at school and the administration takes no action. What duty is being neglected?",
            options: [
                { text: "To ensure a safe environment", correct: true },
                { text: "To provide education", correct: false },
                { text: "To promote harmony", correct: false },
                { text: "To uphold the law", correct: false }
            ]
        },
        {
            question: "A man is denied a bank loan because of his race. Which right is violated?",
            options: [
                { text: "Right to Equality", correct: true },
                { text: "Right to Freedom", correct: false },
                { text: "Right to Privacy", correct: false },
                { text: "Right to Education", correct: false }
            ]
        },
        {
            question: "A political activist is imprisoned for speaking against the government. Which right is being violated?",
            options: [
                { text: "Right to Freedom of Speech", correct: true },
                { text: "Right to Freedom of Assembly", correct: false },
                { text: "Right to Equality", correct: false },
                { text: "Right to Life", correct: false }
            ]
        },
       
    
];

let currentScenarioIndex = 0;
let score = 0;
let attempts = 0;

function loadScenario() {
    const currentScenario = scenarios[currentScenarioIndex];
    document.getElementById('scenario').innerText = currentScenario.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    currentScenario.options.forEach((option) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerText = option.text;
        optionElement.onclick = () => selectOption(option);
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById('next').classList.add('hidden');
    document.getElementById('feedback').innerText = '';
    updateScoreDisplay();
    attempts = 0; // Reset attempts for the new question
}

function selectOption(option) {
    const feedback = document.getElementById('feedback');
    attempts++;

    if (option.correct) {
        feedback.innerText = 'Correct! This is a fundamental right.';
        feedback.style.color = '#28a745'; // Green
        if (attempts === 1) {
            score++;
            updateScoreDisplay();
        }
        document.getElementById('next').classList.remove('hidden');
    } else {
        if (attempts === 1) {
            feedback.innerText = 'Incorrect! You have one more chance.';
            feedback.style.color = '#d9534f'; // Red
        } else {
            feedback.innerText = 'Incorrect! Moving to the next question.';
            feedback.style.color = '#d9534f'; // Red
            document.getElementById('next').classList.remove('hidden');
        }
    }
}

function updateScoreDisplay() {
    document.getElementById('score').innerText = `Score: ${score}`;
}

document.getElementById('next').onclick = () => {
    currentScenarioIndex++;
    if (currentScenarioIndex < scenarios.length) {
        loadScenario();
    } else {
        showGameOver();
    }
};

function showGameOver() {
    document.getElementById('scenario').innerText = 'Game Over! Thank you for playing.';
    document.getElementById('options').innerHTML = '';
    document.getElementById('next').classList.add('hidden');
    document.getElementById('try-again').classList.remove('hidden');
    displayUserFeedback();
}

function displayUserFeedback() {
    const userFeedback = document.getElementById('user-feedback');
    let feedbackMessage;

    if (score === scenarios.length) {
        feedbackMessage = "Excellent! You got a perfect score!";
    } else if (score >= scenarios.length * 0.7) {
        feedbackMessage = "Great job! You have a solid understanding.";
    } else if (score >= scenarios.length * 0.4) {
        feedbackMessage = "Good effort! Keep learning about your rights.";
    } else {
        feedbackMessage = "Don't worry! Review the fundamental rights and duties.";
    }

    userFeedback.innerText = feedbackMessage;
    userFeedback.classList.remove('hidden');
}

document.getElementById('try-again').onclick = () => {
    currentScenarioIndex = 0;
    score = 0;
    document.getElementById('try-again').classList.add('hidden');
    document.getElementById('user-feedback').classList.add('hidden');
    loadScenario();
};

loadScenario();