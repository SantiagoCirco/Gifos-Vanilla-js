

let isDark = false;

function switchTheme() {
    document.documentElement.setAttribute('data-theme', `${isDark ? 'light' : 'dark'}`);
    logoMobile.src = isDark ? './images/logo-mobile.svg' : './images/logo-mobile-nocturno.svg';
    logoDesktop.src = isDark ? './images/logo-desktop.svg' : './images/logo-desktop-nocturno.svg';
    menuButton.src = isDark ? './images/burger.svg' : './images/burger-nocturno.svg';
    closeMenuButton.src = isDark ? './images/close-icon.svg' : './images/close-icon-nocturno.svg';
    const heroSearchButtonImage = heroSearchButton.children[0];
    const heroCloseSearchButtonImage = heroCloseSearchButton.children[0];
    heroSearchButtonImage.src = isDark ? './images/search-icon.svg' : './images/search-icon-nocturno.svg';
    heroCloseSearchButtonImage.src = isDark ? './images/close-icon.svg' : './images/close-icon-nocturno.svg';
    const navbarSearchButtonImage = navbarSearchButton.children[0];
    const navbarCloseSearchButtonImage = navbarCloseSearchButton.children[0];
    navbarSearchButtonImage.src = isDark ? './images/search-icon.svg' : './images/search-icon-nocturno.svg';
    navbarCloseSearchButtonImage.src = isDark ? './images/close-icon.svg' : './images/close-icon-nocturno.svg';
    navbarDarkModeToggler.textContent = isDark ? 'Modo Nocturno' : 'Modo Diurno';
    recordCameraIcon.children[0].src = isDark ? './images/camara.svg' : './images/camara-nocturno.svg';
    recordCameraIcon.children[1].src = isDark ? './images/luz-de-camara.svg' : './images/luz-de-camara-nocturno.svg';
    recordCintaIcon.src = isDark ? './images/pelicula.svg' : './images/pelicula-nocturno.svg';
    isDark = !isDark;
}

navbarDarkModeToggler.addEventListener('click', switchTheme, false);