
// ============================================================================
//      SEARCH INPUT FUNCTIONS 
// ============================================================================

// Change search input icons ( lopa a cruz)
function switchButtonsIcons() {
    const navbarSearchingIsActive = navbarSearchInput.value.trim() !== '';

    if (navbarSearchingIsActive) {
        navbarSearchButton.className =
            setClassName.navbar.searchButton.whenSearching;
        navbarCloseSearchButton.className =
            setClassName.navbar.closeSearchButton.whenSearching;
    } else {
        navbarSearchButton.className =
            setClassName.navbar.searchButton.default;
        navbarCloseSearchButton.className =
            setClassName.navbar.closeSearchButton.default;
    }

    const heroSearchingIsActive = heroSearchInput.value.trim() !== '';

    if (heroSearchingIsActive) {
        heroSearchButton.className =
            setClassName.hero.searchButton.whenSearching;

        heroCloseSearchButton.className =
            setClassName.hero.closeSearchButton.whenSearching;
    } else {
        heroSearchButton.className =
            setClassName.hero.searchButton.default;

        heroCloseSearchButton.className =
            setClassName.hero.closeSearchButton.default;
    }
}

// Checks if the input has text and shows or hide search's suggestions 
function showSuggestions() {
    const heroSearchingsActive = heroSearchInput.value.trim() !== '';
    if (heroSearchingsActive) {
        heroSuggestions.className = setClassName.hero.suggestions.whenSearching;
        heroSearchIcon.className = setClassName.hero.searchIcon.whenSearching;
    } else {
        heroSuggestions.className = setClassName.hero.suggestions.default;
        heroSearchIcon.className = setClassName.hero.searchIcon.default;
        switchButtonsIcons();
    }
}

// Fetch the suggestions from giphy and place them in the suggestions box
async function showSuggestionsInSearchBox() {
    const response = await fetchToJson(suggestions_url + heroSearchInput.value.trim() + API_KEY);
    const suggestions = heroSuggestionsItems.forEach((item, i) => {
        item.textContent = response.data[i].name;
        item.id = item.textContent;
    });
}

// set the sessionStorage to search
function initSearch(inputValue) {
    resultsGrid.innerHTML = '';
    sessionStorage.setItem('search', inputValue);
}

// Fetch from GIPHY the search
async function getSearchResultsFromApi(offsetValue, input) {
    const url = search_url + API_KEY + limit + '&' + 'offset=' + offsetValue + '&q=' + input;
    const response = await fetchToJson(url);
    const gifsArray = (!response) ? [] : response.data;
    return gifsArray;
}

// Render the gifs into the page or the "not found" msg
function validateAndRenderSearchResults(gifs, input, stopScroll) {
    const arrayIsEmpty = gifs.length === 0;
    searchResults.className = setClassName.search.whileSearchIsActive;
    searchResultTitle.textContent = input;
    if (arrayIsEmpty) {
        showMessageWhenNoResults();
    } else {
        searchResultTitle.textContent = input;
        searchNotFoundBox.className = setClassName.search.notFound.default;
        gifs.forEach(gif => createGifCard(gif, resultsGrid));
        // addEventListenerToCardButtons();
        searchPaginationButton.className = setClassName.search.paginationButton.whenSearchIsActive;
        if (!stopScroll) pageScroll(200);
    }
}

// ============================================================================
//      CREATING ELEMENTS
// ============================================================================


function showMessageWhenNoResults() {
    searchResults.appendChild(searchNotFoundBox);
    searchNotFoundBox.className = setClassName.search.notFound.whenThereAreNotResults;
    searchPaginationButton.className = setClassName.search.paginationButton.default;
    pageScroll(120);
}

// Create the gif cards dynamically. Input: A gif object from the API
function createGifCard(gif, parent) {

    FAVORITES = db.get('favs');
    const itHasAlreadyBeenLiked = FAVORITES.find(fav => fav === gif.id) !== undefined;
    const likeIconClassName = itHasAlreadyBeenLiked ?
        setClassName.card.likeButton.whenLiked :
        setClassName.card.likeButton.default;
    const downloadIconClassName = setClassName.card.downloadButton.default;
    const expandIconClassName = setClassName.card.expandButton.default;

    parent.innerHTML += `
        <div class="card" id="${gif.id}">
            <img class="card__img" src="${gif.images.fixed_height.url}" alt="${gif.title}" >
            <div class="card__info">
                <div class="card__buttons-box">
                    <button class="card__button like-button" id="like-button${gif.id}">
                        <i class="${likeIconClassName}" id="like-icon${gif.id}"></i>
                    </button>
                    <button class="card__button download-button" id="download-button${gif.id}">
                        <i class="${downloadIconClassName}" id="download-icon${gif.id}"></i>
                    </button>
                    <button class="card__button expand-button" id="expand-button${gif.id}">
                        <i class="${expandIconClassName}" id="expand-icon${gif.id}"></i>
                    </button>
                </div>
                <div class="card__title-box">
                    <p class="card__author">${(gif.username === '') ? 'Autor Desconocido' : gif.username}</p>
                    <h5 class="card__title">${gif.title}</h5>
                </div>
            </div>
        </div>
    `;
}


// ============================================================================================
//  EVENTS LISTENERS 
// =================

exitExpandModalButton.addEventListener('click', e => {
    fullscreen.className = setClassName.fullscreen.default;
    if (pageState.currentState() === 'favorite') {
        showFavoriteSectionAndHideOthers();
    }
    if (pageState.currentState() === 'gifos') {
        showMyGifosSectionAndHideOthers();
    }
});

navbarCloseSearchButton.addEventListener('click', e => {
    navbarSearchInput.value = '';
    switchButtonsIcons();
});

heroCloseSearchButton.addEventListener('click', e => {
    heroSearchInput.value = '';
    whenSearchingIsActive(switchButtonsIcons, showSuggestions);
});

let paginationCounter = 0;
searchPaginationButton.addEventListener('click', async () => {
    offset += 12;
    const inputValue = sessionStorage.getItem('search');
    const gifs = await getSearchResultsFromApi(offset, inputValue);
    validateAndRenderSearchResults(gifs, inputValue);
    if (paginationCounter === 2) {
        paginationCounter = 0;
        searchPaginationButton.className = setClassName.search.paginationButton.default;
    } else {
        paginationCounter += 1;
    }
});








