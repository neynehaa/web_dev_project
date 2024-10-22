document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-bar input').value;
    alert(`Searching for: ${searchTerm}`);
});
const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
learnMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Navigating to detailed resource page...');
    });
});
