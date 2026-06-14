const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.05,
    rootMargin: '0px'
});

faders.forEach(fader => {
    observer.observe(fader);
});
