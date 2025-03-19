window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');

    preloader.style.display = "flex";
    preloader.classList.remove("fly-out");

    setTimeout(() => {
        preloader.classList.add('fly-out');

        setTimeout(() => {
            preloader.style.display = "none";
            window.location.href = "../home.html";
        }, 2000);
    }, 4000);
});
