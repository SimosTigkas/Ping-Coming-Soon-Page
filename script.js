const form = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    if (!emailInput.value) {
        emailError.classList.add('show-error');
        emailInput.style.border = '1px solid hsl(0, 100%, 46%)';
        isValid = false;
    }
    else if (!emailIsValid(emailInput.value)) {
        emailError.textContent = 'Provide a valid email address';
        emailError.classList.add('show-error');
        emailInput.style.border = '1px solid hsl(0, 100%, 46%)';
        isValid = false;
    }
    else {
        emailError.classList.remove('show-error');
    }
    if (isValid)
        form.submit();
});

function emailIsValid(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}