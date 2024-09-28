document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const cardContainer = document.querySelector('.card-container');
    const cardContent = document.getElementById('cardContent');
    const drawCardButton = document.getElementById('drawCard');

    // Handle navbar background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle FAQ toggle functionality
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.style.display === 'block';

            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.style.display = 'none';
            });

            // Toggle the clicked answer
            answer.style.display = isOpen ? 'none' : 'block';
        });
    });

    // Constitution Cards
    const cards = [
        { 
            title: "Fundamental Rights", 
            question: "What are the Fundamental Rights?",
            options: [
                "Rights guaranteed by the Constitution",
                "Rights provided by the government",
                "Rights to vote in elections",
                "Rights for foreigners"
            ],
            answer: "Rights guaranteed by the Constitution"
        },
        { 
            title: "Directive Principles", 
            question: "What are Directive Principles?",
            options: [
                "Guidelines for creating laws",
                "Rules for the police",
                "Directives from the President",
                "International guidelines"
            ],
            answer: "Guidelines for creating laws"
        },
        { 
            title: "Fundamental Duties", 
            question: "What are Fundamental Duties?",
            options: [
                "Duties expected of every citizen",
                "Duties of the government officials",
                "Legal obligations for businesses",
                "Volunteer activities"
            ],
            answer: "Duties expected of every citizen"
        },
        { 
            title: "Preamble", 
            question: "What is the Preamble?",
            options: [
                "Introduction to the Constitution",
                "A legal document",
                "A chapter in the Constitution",
                "A set of laws"
            ],
            answer: "Introduction to the Constitution"
        }
    ];

    // Draw a random card
    drawCardButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const selectedCard = cards[randomIndex];
        cardContent.innerHTML = `
            <h3>${selectedCard.question}</h3>
            <div class="options-container">
                ${selectedCard.options.map((option) => 
                    `<div class="option" data-answer="${option}">${option}</div>`
                ).join('')}
            </div>
        `;

        // Add event listeners to options
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', (event) => {
                const selectedAnswer = event.target.dataset.answer;
                if (selectedAnswer === selectedCard.answer) {
                    event.target.classList.add('correct');
                    cardContent.innerHTML += "<p>Correct!</p>";
                } else {
                    event.target.classList.add('wrong');
                    cardContent.innerHTML += `<p>Incorrect. The correct answer is: ${selectedCard.answer}</p>`;
                }

                // Disable further clicks on options
                options.forEach(opt => opt.classList.add('disabled'));
            });
        });
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('nav') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Google Translate initialization
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,te,ta,ml,kn,bn,gu,mr,pa,or', // Add more language codes as needed
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}