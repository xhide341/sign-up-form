document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');
    const submitBtn = document.getElementById('submit-btn');
    const feedback = document.getElementById("confirm_password_feedback");

    confirmPassword.addEventListener("input", () => {
        if (password.value != confirmPassword.value) {
          feedback.innerHTML = "Password did not match.";
          isPasswordMatch = false;
        } else {
          feedback.innerHTML = "Password matched";
          isPasswordMatch = true;
        }
      });

      form.onsubmit = function () {
        if (isPasswordMatch) {
          alert("Form submitted. Great!");
          return true;
        }
        alert("Wait! Password did not match.");
        return false;
      };
    
});