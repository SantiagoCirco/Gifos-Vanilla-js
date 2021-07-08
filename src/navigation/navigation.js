
// NAVIGATION BAR LINKS HANDLERS AND LISTENERS ----------------------------------------- 

async function showFavoriteSectionAndHideOthers() {
    gifosSection.className = setClassName.gifos.default;
    recordSection.className = setClassName.record.default;
    searchResults.className = setClassName.search.default;
    favoritesSection.className = setClassName.favorite.whileActive;
    hero.className = setClassName.hero.whileOtherSectionIsOpen;
    trending.className = setClassName.trending.default;
    await showLikedGifOrMessage();
}

async function showLikedGifOrMessage() {
    favoritesNotFound.className = setClassName.favorite.notFound.whenThereAreNotResults;
    favoritesGrid.innerHTML = `<div class="not-found__box" id="liked-not-found">
                 <img class="not-found__img" src="./images/favoritos-sin-contenido.svg" alt="Un corazón ilustrado">
                 <h3 class="not-found__text">"¡Guarda tu primer GIFO en Favoritos
                     para que se muestre aquí!"</h3>
             </div>`;
    FAVORITES = db.get('favs');
    const listIsEmpty = FAVORITES !== null ? FAVORITES.length === 0 : true;
    if (listIsEmpty) {
        favoritesNotFound.className = setClassName.favorite.notFound.whenThereAreNotResults;
    } else {
        const gifs = await Promise.all(FAVORITES.map(async (id) => {
            const response = await fetchToJson(URL_BY_ID + id + API_KEY);
            return response.data;
        }));
        favoritesGrid.innerHTML = '';
        gifs.forEach(gif => createGifCard(gif, favoritesGrid));
    }
}

async function showMyGifosSectionAndHideOthers() {
    gifosSection.className = setClassName.gifos.whileActive;
    favoritesSection.className = setClassName.favorite.default;
    recordSection.className = setClassName.record.default;
    searchResults.className = setClassName.search.default;
    hero.className = setClassName.hero.whileOtherSectionIsOpen;
    trending.className = setClassName.trending.default;

    gifosNotFound.className = setClassName.gifos.notFound.whenThereAreNotResults;
    gifosGrid.innerHTML = `<div class="not-found__box" id="gifos-not-found">
                <img class="not-found__img" src="./images/mis-gifos-sin-contenido.svg" alt="Un corazón ilustrado">
                <h3 class="not-found__text">¡Anímate a crear tu primer GIFO!</h3>
            </div>`;
    GIFOS = db.get('gifos');
    const listIsEmpty = GIFOS !== null ? GIFOS.length === 0 : true;
    if (listIsEmpty) {
        console.log('hola');
        gifosNotFound.className = setClassName.gifos.notFound.whenThereAreNotResults;
    } else {

        // favoritesNotFound.className = setClassName.favorite.notFound.default;
        const gifs = await Promise.all(GIFOS.map(async (id) => {
            const response = await fetchToJson(URL_BY_ID + id + API_KEY);
            return response.data;
        }));
        gifosGrid.innerHTML = '';
        gifs.forEach(gif => createGifCard(gif, gifosGrid));
    }
}

function showRecordSectionAndHideOthers() {
    gifosSection.className = setClassName.gifos.default;
    favoritesSection.className = setClassName.favorite.default;
    hero.className = setClassName.hero.whileOtherSectionIsOpen;
    searchResults.className = setClassName.search.default;
    recordSection.className = setClassName.record.whileActive;
    trending.className = setClassName.trending.whenRecording;
}

function reloadAllSectionsToDefault() {
    heroSearchInput.value = '';
    showSuggestions();
    gifosSection.className = setClassName.gifos.default;
    favoritesSection.className = setClassName.favorite.default;
    recordSection.className = setClassName.record.default;
    searchResults.className = setClassName.search.default;
    trending.className = setClassName.trending.default;
    hero.className = setClassName.hero.default;
}


headerLinkLogo.addEventListener('click', () => {
    closeMenuHandler();
    window.location.href = window.location.href;
    pageState.setDefault();
    reloadAllSectionsToDefault();
});

navbarFavoriteButton.addEventListener('click', e => {
    closeMenuHandler();
    if (pageState.currentState() !== 'favorite') {
        pageState.openFavs();
        showFavoriteSectionAndHideOthers();

    }
});

navbarGifosButton.addEventListener('click', e => {
    closeMenuHandler();
    if (pageState.currentState() !== 'gifos') {
        pageState.openGifos();
        showMyGifosSectionAndHideOthers();
    }
});

navbarCircularButton.addEventListener('click', e => {
    if (pageState.currentState() !== 'record') {
        pageState.openRecord();
        showRecordSectionAndHideOthers();
    }
});






