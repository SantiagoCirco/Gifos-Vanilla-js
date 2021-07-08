

window.onscroll = () => {
    const pageHasBeenScrolled = window.scrollY > 20;
    if (pageHasBeenScrolled) {
        header.className = setClassName.header.whenScrolled;
        navbarSearcher.className = setClassName.navbar.search.whenScrolled;
        navbarCircularButton.className = setClassName.navbar.circularButton.whenScrolled;
    } else {
        header.className = setClassName.header.default;
        navbarSearcher.className = setClassName.navbar.search.default;
        navbarCircularButton.className = setClassName.navbar.circularButton.default;
    }
}

window.onload = () => {
    pageState.setDefault();
    const favStorage = db.get('favs');
    const gifoStorage = db.get('gifos');
    (favStorage) ? FAVORITES = favStorage : db.setFavs([]);
    (gifoStorage)? GIFOS = gifoStorage : db.setMyGifos([]);
}


window.addEventListener('DOMContentLoaded', e => {
    getTrendings();
    getTrendingSearchs();
});



