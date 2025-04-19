// Dark/light mode toggle + form interaction

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const horoscope = document.querySelector("#horoscope").value;
    const date = new Date(document.querySelector("#birthday").value);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based in JavaScript
    const year = date.getFullYear();
    alert(`I now know ${name} has email ${email} and horoscope ${horoscope}. Your birthday is ${[month, day, year].join('/')}. Your message to me is ${message}!`);
  });
  
toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.body.classList.add(currentTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.classList.add(prefersDark ? "dark" : "light");
}