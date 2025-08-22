                    
// Form validation and submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Hide all error messages initially
    resetErrors();
    successMessage.style.display = 'none';

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        resetErrors();
        if (validateForm()) {
            form.reset();
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }
    });
});
            function validateForm() {
                let isValid = true;
                
                // Validate name
                const name = document.getElementById('fullName').value.trim();
                if (name === '') {
                    showError('nameError', 'Full name is required');
                    isValid = false;
                }
                
                // Validate email
                const email = document.getElementById('email').value.trim();
                if (email === '') {
                    showError('emailError', 'Email is required');
                    isValid = false;
                } else if (!isValidEmail(email)) {
                    showError('emailError', 'Please enter a valid email address');
                    isValid = false;
                }
                
                // Validate subject
                const subject = document.getElementById('subject').value.trim();
                if (subject === '') {
                    showError('subjectError', 'Subject is required');
                    isValid = false;
                }
                
                // Validate message
                const message = document.getElementById('message').value.trim();
                if (message === '') {
                    showError('messageError', 'Message is required');
                    isValid = false;
                }
                
                return isValid;
            }
            
            function showError(elementId, message) {
                const errorElement = document.getElementById(elementId);
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            const inputElement = errorElement.parentElement.querySelector('.form-control');
                if (inputElement) {
                    inputElement.focus();
                    inputElement.style.borderColor = 'var(--error-color)';
                }
            }

             function resetErrors() {
                const errorMessages = document.querySelectorAll('.error-message');
                const inputs = document.querySelectorAll('.form-control');
                
                errorMessages.forEach(error => {
                    error.style.display = 'none';
                });
                
                inputs.forEach(input => {
                    input.style.borderColor = 'var(--border-color)';
                });
                
                successMessage.style.display = 'none';
            }
            
            function isValidEmail(email) {
                // Simple email validation regex
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }
        