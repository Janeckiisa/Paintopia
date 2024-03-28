document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        body.classList.add('darkmode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('darkmode');
        const isDarkModeNow = body.classList.contains('darkmode');
        localStorage.setItem('darkMode', isDarkModeNow);
    });
});