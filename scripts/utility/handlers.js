
/**
 * Toggles the theme of the webpage between light and dark modes.
 *
 * @param {HTMLElement} htmlElement - The root HTML element whose data-theme attribute is toggled.
 * @param {HTMLElement} toggleButton - The button element that triggers the theme change.
 *
 * Updates the data-theme attribute of the htmlElement to switch between "light" and "dark".
 * Stores the selected theme in localStorage for persistence across reloads.
 * Updates the class of the toggleButton to reflect the current theme.
 */

 const changeThemeHandler = (htmlElement,toggleButton) => {
    let currentTheme = htmlElement.getAttribute("data-theme");
    let newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    toggleButton.classList.replace(newTheme === "dark" ? "bx-sun" : "bx-moon", newTheme === "dark" ? "bx-moon" : "bx-sun");
};
/**
 * Handles toggling of full screen mode for the web application.
 *
 * @param {HTMLElement} fullscreenButton - The button that triggers the full screen mode.
 */

const fullScreenHandler = (fullscreenButton) => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    fullscreenButton.classList.replace("bx-fullscreen", "bx-exit-fullscreen");
    document.querySelector("header").style.cssText = "position: fixed; top: 0; left: 0; right: 0; z-index: 100;";
  } else {
    document.exitFullscreen();
    fullscreenButton.classList.replace("bx-exit-fullscreen", "bx-fullscreen");
  }
};
























export { changeThemeHandler, fullScreenHandler };
