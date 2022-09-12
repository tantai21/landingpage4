

var header = document.querySelector('.nav-bar');
window.addEventListener('scroll', function() {
    header.classList.toggle('fixed', window.scrollY > 0)
})
