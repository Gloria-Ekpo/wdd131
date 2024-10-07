// theme dropdown from the HTML
const themeSelector = document.querySelector('#theme-selector');

// Function to change the theme
function changeTheme() {
    const body = document.body;
    const logo = document.querySelector('#logo');
    
    // current value of the select element
    if (themeSelector.value === 'dark') {
        // Add 'dark' class to body
        body.classList.add('dark');
        // Change the logo image to the white logo
        logo.src = 'byui-logo_white.webp'; // Make sure you have this image in your project
    } else {
        // Remove 'dark' class from body
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}

// Add an event listener to the theme selector that calls changeTheme when changed
themeSelector.addEventListener('change', changeTheme);
