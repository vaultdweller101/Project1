// Dark/light mode toggle + form interaction

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    alert(`Thanks for reaching out, ${name}!`);
  });
  
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Load user's theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  body.classList.add(prefersDark ? "dark" : "light");
}