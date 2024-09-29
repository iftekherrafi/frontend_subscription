document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            // If the form is valid, submit it
            console.log('Form is valid. Submitting...');
            form.submit(); // This line actually submits the form
        }
    });

    function validateForm() {
        let isValid = true;

        // Username validation
        const username = document.getElementById('username');
        if (username.value.length < 3) {
            showError(username, 'Username must be at least 3 characters long');
            isValid = false;
        } else {
            clearError(username);
        }

        // Email validation
        const email = document.getElementById('email');
        if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(email);
        }

        // Password validation
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        if (password.value.length < 8) {
            showError(password, 'Password must be at least 8 characters long');
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'Passwords do not match');
            isValid = false;
        } else {
            clearError(password);
            clearError(confirmPassword);
        }

        // Full name validation
        const fullName = document.getElementById('full-name');
        if (fullName.value.trim() === '') {
            showError(fullName, 'Full name is required');
            isValid = false;
        } else {
            clearError(fullName);
        }

        // Phone number validation
        const phone = document.getElementById('phone');
        if (!isValidPhone(phone.value)) {
            showError(phone, 'Please enter a valid 11-digit phone number');
            isValid = false;
        } else {
            clearError(phone);
        }

        // Subscription validation
        const subscription = document.getElementById('subscription');
        if (subscription.value === '') {
            showError(subscription, 'Please select a subscription level');
            isValid = false;
        } else {
            clearError(subscription);
        }

        // Payment method validation
        const payment = document.getElementById('payment');
        if (payment.value === '') {
            showError(payment, 'Please select a payment method');
            isValid = false;
        } else {
            clearError(payment);
        }

        return isValid;
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorElement = formGroup.querySelector('.error');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        input.classList.add('input-error');
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error');
        
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        
        input.classList.remove('input-error');
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function isValidPhone(phone) {
        const re = /^[0-9]{11}$/;
        return re.test(phone);
    }
});