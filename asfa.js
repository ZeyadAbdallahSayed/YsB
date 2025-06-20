document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.querySelector('input');
    const link = document.querySelector('a');

    inputField.addEventListener('input', function () {
        if (inputField.value.trim() === 'انا اسفه' || inputField.value.trim() === 'اسفه') {
            alert('ولا يهمك يحبيبي 🥰');
            window.location.href = 'index.html';
        }
    });

    // Prevent default link behavior
    link.addEventListener('click', function (event) {
        event.preventDefault();
    });
});