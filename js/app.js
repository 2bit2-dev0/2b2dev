// THEME
const themeBtn = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.dataset.theme = currentTheme;

themeBtn.onclick = () => {
  const newTheme =
    document.documentElement.dataset.theme === "light"
      ? "dark"
      : "light";
  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
};

// LANGUAGE
let lang = localStorage.getItem("lang") || "en";

document.getElementById("langToggle").onclick = () => {
  lang = lang === "en" ? "pt-BR" : "en";
  localStorage.setItem("lang", lang);
  loadLang();
};

async function loadLang() {
  const res = await fetch(`i18n/${lang}.json`);
  const data = await res.json();
  document.getElementById("title").textContent = data.title;
}

loadLang();
