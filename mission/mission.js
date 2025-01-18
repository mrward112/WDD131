

const themeSelect = document.getElementById('theme');
const footerLogo = document.getElementById('footerLogo');

console.log("theme selected", themeSelect.value);

themeSelect.addEventListener('change', function() {
    console.log("theme changed to:", themeSelect.value); 
    changeTheme();       
    });


function changeTheme() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        footerLogo.src = 'byui-logo_white.png';
    } 
    else {
        footerLogo.src = 'byui-logo_blue.webp';
    }
}