document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('main-navbar');
    const themeBtn = document.getElementById('theme-toggle');

    // 1. Scroll Effect
    window.onscroll = () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    };

    // 2. Dark Mode
    themeBtn.onclick = () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeBtn.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeBtn.textContent = '☀️';
        }
    };

    // 3. Validation
    const form = document.getElementById('portfolio-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name === "") document.getElementById('name-error').textContent = "Naam likhiye!";
        else document.getElementById('name-error').textContent = "";

        if (!email.includes("@")) document.getElementById('email-error').textContent = "Sahi email daliye!";
        else document.getElementById('email-error').textContent = "";
        
        if(name !== "" && email.includes("@")) {
            alert("Success!");
            form.reset();
        }
    };
});