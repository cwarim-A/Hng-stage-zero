const form = document.getElementById('contactForm');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset previous errors
    document.querySelectorAll('.error').forEach(err => err.textContent = '');
    successMessage.style.display = 'none';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    let isValid = true;

    // Validate name
    if (!name) {
        document.getElementById('error-name').textContent = 'Full name is required.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('error-email').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('error-email').textContent = 'Enter a valid email (e.g., name@example.com).';
        isValid = false;
    }

    // Validate subject
    if (!subject) {
        document.getElementById('error-subject').textContent = 'Subject is required.';
        isValid = false;
    }

    // Validate message
    if (!message) {
        document.getElementById('error-message').textContent = 'Message is required.';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('error-message').textContent = 'Message must be at least 10 characters long.';
        isValid = false;
    }

    // If valid, show success
    if (isValid) {
        successMessage.style.display = 'block';
        form.reset();
    }
});
