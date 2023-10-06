let darkMode = localStorage.getItem("darkMode");
const darkChanges = document.querySelectorAll(".dark-mode");
const lightChanges = document.querySelectorAll(".light-mode");
const logoLight = document.querySelector('img[alt="Logo Light"]');
const logoDark = document.querySelector('img[alt="Logo Dark"]');
const modeSwitcher = document.getElementById("mode");
const enableDarkMode = () => {
  document.body.classList.add("dark");
  lightChanges.forEach((item) => (item.style.display = "none"));
  darkChanges.forEach((item) => (item.style.display = "block"));
  localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
  document.body.classList.remove("dark");
  lightChanges.forEach((item) => (item.style.display = "block"));
  darkChanges.forEach((item) => (item.style.display = "none"));
  localStorage.setItem("darkMode", null);
};
if (darkMode === "enabled") {
  enableDarkMode();
}
modeSwitcher.addEventListener("change", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  console.log("test");
});
