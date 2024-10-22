const quotes = [
    '"We cannot solve problems with the kind of thinking we employed when we came up with them." – Albert Einstein',
    '"Mental health is not a destination, but a process. It\'s about how you drive, not where you\'re going." – Noam Shpancer',
    '"Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity." – Unknown'
];
const quoteElement = document.getElementById('quote');
const changeQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.innerText = randomQuote;
};
setInterval(changeQuote, 10000); 
document.addEventListener('DOMContentLoaded', () => {
    
    const takeQuizBtn = document.querySelector('.link-box:nth-child(1) .btn');
    takeQuizBtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'quiz.html'; 
    });
    const learnMoreBtn = document.querySelector('.link-box:nth-child(2) .btn');
    learnMoreBtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'resources.html'; 
    });
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    searchButton.addEventListener('click', () => {
        const therapistName = searchInput.value.trim().toLowerCase(); 
        if (therapistName === 'john doe') { 
            window.location.href = 'john.html'; 
        } else {
            alert("Therapist not found!"); 
        }
    });
});
