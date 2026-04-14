const buttonTheme = document.getElementById("toggleTheme");
const themeStylesheet = document.getElementById("themeStylesheet");

buttonTheme.addEventListener("click", function () {
    if (themeStylesheet.getAttribute("href") === "green.css") {
        themeStylesheet.setAttribute("href", "red.css");
    } else {
        themeStylesheet.setAttribute("href", "green.css");
    }
});

const buttonProjects = document.getElementById("toggleProjects");
const projectsSection = document.getElementById("projectsSection");

buttonProjects.addEventListener("click", function () {
    if (projectsSection.style.display === "none") {
        projectsSection.style.display = "block";
        buttonProjects.textContent = "Ukryj projekty";
    } else {
        projectsSection.style.display = "none";
        buttonProjects.textContent = "Pokaż projekty";
    }
});