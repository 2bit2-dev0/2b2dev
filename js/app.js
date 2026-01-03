const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");

let darkMode = false;
let language = "EN";

updateTheme();
updateLanguage();

themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  updateTheme();
});

function updateTheme() {
  if (darkMode) {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    themeToggle.textContent = "🌙";
  }
}

langToggle.addEventListener("click", () => {
  language = language === "EN" ? "PT" : "EN";
  updateLanguage();
});

function updateLanguage() {
  if (language === "EN") {
    langToggle.textContent = "PT";
    document.getElementById("title").textContent = "Dev Studio";
  } else {
    langToggle.textContent = "EN";
    document.getElementById("title").textContent = "Estúdio Dev";
  }
}
