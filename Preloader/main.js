document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');

    preloader.style.display = "flex";  

    setTimeout(() => {
        preloader.classList.add('fly-out');

        setTimeout(() => {
            preloader.remove();
            window.location.href = "home.html"; // Change to your actual home page
        }, 1000);
    }, 3000);
});
