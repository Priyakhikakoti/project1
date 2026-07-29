// ================= theme.js =================

const toggle = document.getElementById("theme-toggle");

if (toggle) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");
        toggle.innerHTML = '<i class="bi bi-sun-fill"></i>';

    }

    toggle.onclick = function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            toggle.innerHTML = '<i class="bi bi-sun-fill"></i>';

        } else {

            localStorage.setItem("theme", "light");
            toggle.innerHTML = '<i class="bi bi-moon-fill"></i>';

        }

    };

}


// ================= toast.js =================

const toast = document.getElementById("toast");

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}

// Show success toast after PHP redirects back
const params = new URLSearchParams(window.location.search);

if (params.get("success") === "1") {

    showToast("📩 Message Sent Successfully!");

    // Remove ?success=1 from the URL
    window.history.replaceState({}, document.title, window.location.pathname);

}


// ================= contact.js =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        let valid = true;

        [name, email, message].forEach(input => {

            input.classList.remove("error", "success");

            if (input.value.trim() === "") {
                input.classList.add("error");
                valid = false;
            } else {
                input.classList.add("success");
            }

        });

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {
            email.classList.remove("success");
            email.classList.add("error");
            valid = false;
        }

        // Stop submission ONLY if validation fails
        if (!valid) {
            e.preventDefault();
        }

    });

}

// ================= filter.js =================

const filterButtons = document.querySelectorAll(".filter-btn");

const projects = document.querySelectorAll(".project-box");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document.querySelector(".filter-btn.active")
            ?.classList.remove("active");

        button.classList.add("active");

        const filter = button.dataset.filter;

        projects.forEach(project => {

            if (
                filter === "all" ||
                project.dataset.category === filter
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


// ================= search.js =================

const searchInput = document.getElementById("searchProject");

const projectBoxes = document.querySelectorAll(".project-box");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        projectBoxes.forEach(box => {

            const projectName =
                (box.dataset.name || "").toLowerCase();

            if (projectName.includes(value)) {

                box.style.display = "";

            } else {

                box.style.display = "none";

            }

        });

    });

}


// ================= top.js =================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (document.documentElement.scrollTop > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}