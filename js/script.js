// Init variables for burger menu, menu body add menu links
const iconMenu = document.querySelector('.icon-menu');
const bodyMenu = document.querySelector('.menu');
const linksMenu = document.querySelectorAll('.menu__links');

//  functon open and close menu using burger menu
function openAndCloseMenu() {
    if (iconMenu) {
        iconMenu.addEventListener('click', () => {
            iconMenu.classList.toggle('__active');
            bodyMenu.classList.toggle('__active');
            document.body.classList.toggle('__lock');            
        });
    };
};

openAndCloseMenu();