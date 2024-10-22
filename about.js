document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        formMessage.textContent = '';

        const name = document.getElementById('name').value.trim();
        const number = document.getElementById('number').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !number || !email || !message) {
            formMessage.textContent = 'All fields are required!';
            return;
        }

        if (!validateEmail(email)) {
            formMessage.textContent = 'Please enter a valid email address!';
            return;
        }

        if (!validatePhoneNumber(number)) {
            formMessage.textContent = 'Please enter a valid phone number!';
            return;
        }

        formMessage.style.color = 'green';
        formMessage.textContent = 'Form submitted successfully!';
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhoneNumber(number) {
        const phoneRe = /^\+?[0-9]{10,14}$/;
        return phoneRe.test(number);
    }
});
