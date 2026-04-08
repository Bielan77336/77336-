const button = document.getElementById("toggleTheme");
const themeStylesheet = document.getElementById("themeStylesheet");

button.addEventListener("click", function () {
    if (themeStylesheet.getAttribute("href") === "green.css") {
        themeStylesheet.setAttribute("href", "red.css");
    } else {
        themeStylesheet.setAttribute("href", "green.css");
    }
});