document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('theme-toggle');
    const logo = document.getElementById('logo');

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            logo.src = 'images/pinproject_dark.jpg';
        }
    }

    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            logo.src = 'images/pinproject_dark.jpg';
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            logo.src = 'images/pinproject.jpg';
        }
    });
});