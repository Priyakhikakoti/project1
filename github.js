// ========================================
// GITHUB CONFIG
// ========================================

const username = "Priyakhikakoti";

// ========================================
// LOAD GITHUB DATA
// ========================================

async function loadGithubProjects() {

    try {

        // -----------------------------
        // USER INFORMATION
        // -----------------------------

        const userResponse = await fetch(
            `https://api.github.com/users/${username}`
        );

        const user = await userResponse.json();

        // -----------------------------
        // LATEST REPOSITORIES
        // -----------------------------

        const repoResponse = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`
        );

        const repos = await repoResponse.json();

        // -----------------------------
        // GITHUB OVERVIEW
        // -----------------------------

        document.getElementById("repoCount").textContent =
            user.public_repos;

        document.getElementById("projectCount").textContent =
            repos.length;

        if (repos.length > 0) {

            const latest = new Date(repos[0].updated_at);

            document.getElementById("lastUpdated").textContent =
                latest.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                });

        }

        // -----------------------------
        // PROJECTS
        // -----------------------------

        const container =
            document.getElementById("githubProjects");

        container.innerHTML = "";

        repos.forEach(repo => {

            const card = document.createElement("div");

            card.className = "project-card";

            card.innerHTML = `

                <h3>${repo.name}</h3>

                <p>

                    ${
                        repo.description ||

                        "Click below to explore the source code on GitHub."

                    }

                </p>

                <div class="repo-info">

                    <span>💻 ${repo.language || "Unknown"}</span>

                    <span>📅 ${new Date(repo.updated_at).toLocaleDateString("en-GB")}</span>

                </div>

                <a
                    href="${repo.html_url}"
                    target="_blank"
                    class="project-btn">

                    View Repository →

                </a>

            `;

            container.appendChild(card);

        });

    }

    catch (error) {

        console.error("GitHub API Error:", error);

    }

}

// ========================================
// INITIALIZE
// ========================================

loadGithubProjects();