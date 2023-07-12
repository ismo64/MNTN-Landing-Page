const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;
navBtn.addEventListener('click', function () {
    event.stopPropagation()
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
})

window.addEventListener('click', function () {
    if (body.classList.contains('no-scroll')) {
        mobileNav.classList.toggle('mobile-nav-active');
        navBtn.classList.toggle('nav-button-close');
        body.classList.toggle('no-scroll');
    }
})

mobileNav.addEventListener('click', function () {
    event.stopPropagation();
})