export function darkModeHandler(isDark) {
    const body = document.querySelector('body');
    body.classList.toggle('body-light', !isDark);
}