const useDark = window.matchMedia("(prefers-color-scheme: dark)");
document.getElementById("mode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
