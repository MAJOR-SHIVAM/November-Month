// main.js
const toggleLightDark = () => {
    const body = document.querySelector('body');
    body.classList.toggle('light');

    // Toggling icons based on current mode
    const iconLight = document.querySelector('.icon-light');
    const iconDark = document.querySelector('.icon-dark');
    if (body.classList.contains('light')) {
        iconLight.style.display = 'none';
        iconDark.style.display = 'inline';
    } else {
        iconLight.style.display = 'inline';
        iconDark.style.display = 'none';
    }
};
