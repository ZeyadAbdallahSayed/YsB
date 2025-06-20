document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    // Simulated login credentials
    const correctUsername = 'RoRo(Lovely💕)';
    const correctPassword = '1-4-2025';

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    const usernameHint = document.querySelector('.input-group:nth-child(1) .hint');
    const passwordHint = document.querySelector('.input-group:nth-child(2) .hint');

    if (enteredUsername !== correctUsername || enteredPassword !== correctPassword) {
        // Display hints after one incorrect attempt
        usernameHint.style.display = 'block';
        passwordHint.style.display = 'block';
        alert('Incorrect Babe 😔. Please try again.My Lovely,I Trust You 💕');
    } else {
        window.location.href = 'yn.html';
    }
});
window.onload = function () {
    document.querySelectorAll('.hint').forEach(function (hint) {
        hint.style.display = 'none';
    });
};