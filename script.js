

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.project-card, .skills-title, .timeline-item, .skills-grid, .skill, .container, .about, .img-wrapper, .content p, .content button, .container1, .right-box, .left-box .info, .left-box p, .footer, .footer-container, .footer-content a, .hero, .content h1, .content h2, .content p, .social-icons a, hero img ').forEach(element => {
        observer.observe(element);
    });
});

const style = document.createElement('style');
style.innerHTML = `
    .project-card, .skills-title, .timeline-item, .skills-grid, .skill, .container, .about,  .img-wrapper, .content p, .content button, .container1, .right-box, .left-box .info, .left-box p, .footer, .footer-conten , .footer-container, .footer-content a, .hero, .content h1, .content h2, .content p, .social-icons a, hero img{
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 1s ease-out, transform 1s ease-out;
    }
    .project-card.visible, .skills-title.visible, .timeline-item.visible, .skills-grid.visible, .skill.visible, .container.visible, .about.visible, .img-wrapper.visible, .content p, .content button.visible, .container1.visible, .right-box.visible, .left-box .info.visible, .left-box p.visible, .footer.visible, .footer-container.visible, .footer-content a.visible, .hero.visible, .content h1.visible, .content h2.visible, .content p.visible, .social-icons a.visible , hero img.visible{
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");

    function setActiveLink() {
        let scrollPosition = window.scrollY;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop - 80 <= scrollPosition &&
                section.offsetTop + section.offsetHeight - 80 > scrollPosition
            ) {
                navLinks.forEach(nav => nav.classList.remove("active"));
                link.classList.add("active");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    window.addEventListener("scroll", setActiveLink);
});






document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".preloader").classList.add("hide");
    }, 6000);
});


