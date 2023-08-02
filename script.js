const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  const body = document.querySelector("body");
  const lorem2 = document.querySelector(".lorem2");
  const navbar = document.querySelector(".navbar");
  const h2 = document.querySelector("h2");

  body.classList.toggle("slightDark");
  lorem2.classList.toggle("heavyDark");
  navbar.classList.toggle("heavyDark");

  button.textContent === "Use Dark Mode"
    ? (button.textContent = "Use Light Mode")
    : (button.textContent = "Use Dark Mode");
  h2.textContent === "Light Mode"
    ? (h2.textContent = "Dark Mode")
    : (h2.textContent = "Light Mode");
});
