window.addEventListener("load", function () {

    // ================= loader.js =================
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 1200);
    }

    // ================= typing.js =================
    const words = [
        "Computer Science Student",
        "Backend Developer",
        "Full Stack Learner",
        "AI Enthusiast"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex);
            charIndex++;

            if (charIndex > currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }

        } else {

            typingElement.textContent = currentWord.substring(0, charIndex);
            charIndex--;

            if (charIndex < 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                charIndex = 0;
            }
        }

        setTimeout(typeEffect, isDeleting ? 60 : 120);
    }

    typeEffect();

    // ================= scroll.js =================
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    });

    hiddenElements.forEach(el => observer.observe(el));

    // ================= transition.js (Parallax) =================
    window.addEventListener("scroll", function () {

        const scrollY = window.scrollY;

        const homeImage = document.querySelector(".home-image");

        if (homeImage) {
            homeImage.style.transform = `translateY(${scrollY * 0.15}px)`;
        }

    });

    // ================= skills.js =================
    const skillBars = document.querySelectorAll(".progress-bar");

    const skillObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }

        });

    });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // ================= counter.js =================
    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;
                const target = +counter.dataset.target;

                let count = 0;
                const increment = target / 100;

                function updateCounter() {

                    if (count < target) {

                        count += increment;
                        counter.innerText = Math.ceil(count);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target;

                    }

                }

                updateCounter();
                counterObserver.unobserve(counter);

            }

        });

    });

    counters.forEach(counter => counterObserver.observe(counter));

    // ================= cursor.js =================
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");

    if (cursor && cursor2) {

        document.addEventListener("mousemove", (e) => {

            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

            cursor2.style.left = e.clientX + "px";
            cursor2.style.top = e.clientY + "px";

        });

        const hover = document.querySelectorAll(
            "a,button,.project-box,.featured-card,.tech-card,.certificate-card,.resume-card"
        );

        hover.forEach(item => {

            item.addEventListener("mouseenter", () => {

                cursor2.style.transform =
                    "translate(-50%,-50%) scale(2)";

            });

            item.addEventListener("mouseleave", () => {

                cursor2.style.transform =
                    "translate(-50%,-50%) scale(1)";

            });

        });

    }

    // ================= tilt.js =================
    const cards = document.querySelectorAll(
        ".project-box,.featured-card,.tech-card,.certificate-card,.resume-card"
    );

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = -(y - rect.height / 2) / 15;
            const rotateY = (x - rect.width / 2) / 15;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.03)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
            `;

        });

    });

    // ================= splitText.js =================
   const headings = document.querySelectorAll("section h2");

headings.forEach((heading) => {

    // Find the text node (not the icon)
    heading.childNodes.forEach(node => {

        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {

            const text = node.textContent;
            const fragment = document.createDocumentFragment();

            [...text].forEach(letter => {

                const span = document.createElement("span");

                span.className = "split-letter";

                span.textContent = letter === " " ? "\u00A0" : letter;

                fragment.appendChild(span);

            });

            node.replaceWith(fragment);

        }

    });

});

const splitObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.querySelectorAll(".split-letter").forEach((letter, index) => {

                setTimeout(() => {

                    letter.classList.add("show-letter");

                }, index * 50);

            });

            splitObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.3
});

headings.forEach(heading => splitObserver.observe(heading));

 // ================= project.js =================

const container = document.getElementById("particles");

if (container) {

    for (let i = 0; i < 25; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (5 + Math.random() * 8) + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        const size = 4 + Math.random() * 8;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        container.appendChild(particle);

    }

}

});