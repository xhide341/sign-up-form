document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');
    const feedback = document.getElementById("feedback_message");

    function checkPasswordMatch() {
        if (password.value === '' && confirmPassword.value === '') {
            feedback.textContent = "";
            password.setCustomValidity('');
            confirmPassword.setCustomValidity('');
        } else if (password.value !== confirmPassword.value) {
            const message = "Passwords do not match.";
            feedback.textContent = message;
            feedback.style.color = "#b92326";
            password.setCustomValidity(message);
            confirmPassword.setCustomValidity(message);
        } else {
            feedback.textContent = "Passwords match.";
            feedback.style.color = "#8BC34A";
            password.setCustomValidity('');
            confirmPassword.setCustomValidity('');
        }
    }

    password.addEventListener("input", checkPasswordMatch);
    confirmPassword.addEventListener("input", checkPasswordMatch);

    form.addEventListener('submit', function(e) {
        checkPasswordMatch();
        if (!form.checkValidity()) {
            e.preventDefault();
            form.reportValidity();
        } else {
            e.preventDefault();
            alert("Form is valid and ready to be submitted!");
        }
    });
});