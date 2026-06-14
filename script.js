const isMobile = window.innerWidth <= 768;

const threshold = isMobile ? 0.35 : 0.72;

const obs = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > threshold) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    },
    {
        threshold: [0, 0.2, 0.35, 0.5, 0.72, 0.9]
    }
);

document.querySelectorAll('.fade').forEach(el => {
    obs.observe(el);
});
