document.addEventListener("DOMContentLoaded", function () {
    
    // 1. MOBILE MENU LOGIC
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Icon Toggle (Bars <-> Times)
            const icon = hamburger.querySelector('i');
            if(navLinks.classList.contains('active')){
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. PRELOADER
    const preloader = document.getElementById('preloader');
    function removePreloader() {
        if(preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        }
    }
    setTimeout(removePreloader, 2000);
    window.addEventListener('load', removePreloader);

    // 3. SCROLL ANIMATION
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // 4. SCROLL PROGRESS
    const header = document.querySelector('header');
    const progressBar = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        if(header) header.classList.toggle('scrolled', window.scrollY > 50);
        
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if(progressBar) progressBar.style.width = scrolled + "%";
    });
});