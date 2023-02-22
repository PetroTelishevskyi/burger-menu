// Init variables for burger menu, menu body add menu links
const iconMenu = document.querySelector('.icon-menu');
const bodyMenu = document.querySelector('.menu');
const linksMenu = document.querySelectorAll('.menu__link');

//  functon open and close menu using burger menu
function openAndCloseMenu() {
    if (iconMenu) {
        iconMenu.addEventListener('click', () => {
            iconMenu.classList.toggle('_active');
            bodyMenu.classList.toggle('_active');
            document.body.classList.toggle('_lock');            
        });
    };

    if (linksMenu.length>0) {
        linksMenu.forEach(linkMenu => {
            linkMenu.addEventListener('click', () => {
                if(iconMenu.classList.contains('_active')) {
                    iconMenu.classList.remove('_active');
                    bodyMenu.classList.remove('_active');
                    document.body.classList.remove('_lock');
                };
            });
        });
    };
};

openAndCloseMenu();