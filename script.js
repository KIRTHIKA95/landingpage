const text = "Découvrez l'offre de formation Bachelor Universitaire de Technologie à Sénart Fontainebleau.";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++; setTimeout(typeWriter, 35);
    }
}


document.addEventListener('mousemove', (e) => {
    const cube = document.querySelector('.cube');
    let x = (window.innerWidth / 2 - e.pageX) / 15;
    let y = (window.innerHeight / 2 - e.pageY) / 15;
    cube.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});


const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = `all 0.8s cubic-bezier(0.19, 1, 0.22, 1) ${index * 0.05}s`;
    observer.observe(card);
});

window.onload = typeWriter;
