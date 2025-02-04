// toggleTheme Handler
const toggleButton = document.getElementById("toggle-theme");
const htmlElement = document.documentElement;
const savedTheme = localStorage.getItem("theme") || "light";
htmlElement.setAttribute("data-theme", savedTheme);
toggleButton.classList.add(savedTheme === "dark" ? "bx-moon" : "bx-sun");
toggleButton.addEventListener("click", async () => {
  const module = await import("./utility/handlers.js");
  module.changeThemeHandler(htmlElement, toggleButton);
});
// fullscreenButton Handler;
const fullscreenButton = document.getElementById("fullscreen-toggle");
fullscreenButton.addEventListener("click", async () => {
  const module = await import("./utility/handlers.js");
  module.fullScreenHandler(fullscreenButton);
});
// searchIcon Handler
const searchIcon = document.getElementById("search-icon");
searchIcon.addEventListener("click", () => {
  const searchPopUp = document.getElementById("search-pop-up");
  searchPopUp.classList.toggle("active");
  document.getElementById("search").focus();
  document.getElementById("pop-ups").classList.toggle("active-pop-ups");  
});
document.addEventListener("keydown",(event) =>{
  event.key === "Escape" && 
  document.getElementById("search-pop-up").classList.remove("active");
  document.getElementById("pop-ups").classList.remove("active-pop-ups");  
}
);
// Nav Link active Handler
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    link.classList.add("active");
      document.getElementById("pop-ups").classList.toggle("active-pop-ups");  

  });
});
