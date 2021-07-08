// MENU TOGGLER HANDLER -------------------------------------------------------------

let menuIsOpen = false;
function closeMenuHandler() {
    navbar.className = setClassName.navbar.default;
    menuButton.className = setClassName.navbar.menuButton.default;
    navbarCircularButton.className = setClassName.navbar.circularButton.default;
    closeMenuButton.className = setClassName.navbar.closeMenuButton.default;
}
function openMenuHadler(){
    navbar.className = setClassName.navbar.whenMenuIsOpen;
    menuButton.className = setClassName.navbar.menuButton.whenMenuIsOpen;
    navbarCircularButton.className = setClassName.navbar.circularButton.whenMobile;
    closeMenuButton.className = setClassName.navbar.closeMenuButton.whenMenuIsOpen;
}
menuButton.addEventListener('click', openMenuHadler);

closeMenuButton.addEventListener('click', closeMenuHandler);


