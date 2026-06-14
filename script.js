const faders = document.querySelectorAll('.fade');

function checkFade() {
    const triggerPoint = window.innerHeight * 0.65;

    faders.forEach(fader => {
        const rect = fader.getBoundingClientRect();

        if (
            rect.top < triggerPoint &&
            rect.bottom > triggerPoint
        ) {
            fader.classList.add('visible');
        } else {
            fader.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('resize', checkFade);
window.addEventListener('load', checkFade);

checkFade();
