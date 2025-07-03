const toggleThemeButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.documentElement.classList.add("light-mode");
    themeIcon.src = "assets/icons/sun.svg";
  } else {
    themeIcon.src = "assets/icons/moon.svg";
  }
});

toggleThemeButton.addEventListener("click", () => {
  themeIcon.classList.add("spin");

  setTimeout(() => {
    if (document.documentElement.classList.toggle("light-mode")) {
      themeIcon.src = "assets/icons/sun.svg";
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.src = "assets/icons/moon.svg";
      localStorage.setItem("theme", "dark");
    }

    themeIcon.classList.remove("spin");
  }, 500);
});
