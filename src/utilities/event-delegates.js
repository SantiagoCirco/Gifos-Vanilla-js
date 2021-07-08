
// ============================================================================
//      DELEGATED EVENT HANDLERS
// ============================================================================


function inputSearchSuggestionsHandler() {
    whenSearchingIsActive(switchButtonsIcons, showSuggestions);
    const isActive = heroSearchInput.value.trim();
    if (isActive) {
        showSuggestionsInSearchBox();
    }
}

let offset = 0;
async function inputSearchHandler(inputValue,stopScroll) {
    closeMenuHandler();
    window.location.href = window.location.href;
    pageState.setDefault();
    reloadAllSectionsToDefault();
    const searchValue = inputValue.trim();
    initSearch(searchValue);
    const gifResults = await getSearchResultsFromApi(offset, searchValue);
    validateAndRenderSearchResults(gifResults, searchValue,stopScroll);
    heroSearchInput.value = '';
    navbarSearchInput.value = '';
    dont(showSuggestions);
}


async function startSearchOfTrendingOrSuggestionsItems(e) {
    const eventIsOnTrendingSearchsOrSuggestions =
        e.target &&
        (e.target.className === 'suggestionTitle' || e.target.className === 'hero__trendingSearchLinks');
    if (eventIsOnTrendingSearchsOrSuggestions) {
        inputSearchHandler(e.target.textContent);
        heroSearchInput.value = e.target.textContent;
    }
}


// ============================================================================
//      DELEGATED EVENT LISTENERS
// ============================================================================


document.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') await inputSearchHandler(e.target.value);
});

document.addEventListener('input', inputSearchSuggestionsHandler);


document.addEventListener('click', e => {
    expandButtonClickedHandler(e);
    likeButtonClickedHandler(e);
    downloadButtonClickedHandler(e);
    handleLikeButtonEventsWhenExpanded(e); 
    handleDownloadButtonEventsWhenExpanded(e);
    // exitExpandedGifHandler(e);
    startSearchOfTrendingOrSuggestionsItems(e);
});

// ============================================================================
//      EXPAND HANDLERS
// ============================================================================

function expandButtonClickedHandler(e) {
    const isExpandIconEvent = e.target.className === setClassName.card.expandButton.default;
    const isExpandButtonEvent = e.target.classList[1] === 'expand-button';
    if (e.target && isExpandIconEvent || isExpandButtonEvent) {
        const id = e.target.id.replace(isExpandButtonEvent ? 'expand-button' : 'expand-icon', '');
        expandGifById(id);
        
    }
}

async function expandGifById(id) {
    const result = await fetchToJson(URL_BY_ID + id + API_KEY);
    const gif = result.data;
    fullscreen.className = setClassName.fullscreen.expanded;
    expandedImage.src = gif.images.fixed_height.url;
    expandedAuthor.textContent = gif.username ? gif.username : '';
    expandedTitle.textContent = gif.title;
    // CREAR BOTONES DINAMICAMENTE Y COLOCARLOS DENTRO DEL BOX CON SU ID

    const itHasAlreadyBeenLiked = FAVORITES.find(fav => fav === id) !== undefined;
    expandedLikeIcon.className = itHasAlreadyBeenLiked ?
        setClassName.fullscreen.likeButton.whenLiked :
        setClassName.fullscreen.likeButton.default;
    expandedLikeIcon.id = 'expanded-like-icon'+id;
}


// ============================================================================
//      LIKE HANDLERS
// ============================================================================

function likeButtonClickedHandler(e) {
    const isLikeIconEvent = e.target.className === setClassName.card.likeButton.default;
    const isLikeIconWhenLikedEvent = e.target.className === setClassName.card.likeButton.whenLiked;
    const isLikeButtonEvent = e.target.classList[1] === 'like-button';
    if (e.target && isLikeIconEvent || isLikeButtonEvent || isLikeIconWhenLikedEvent) {
        const id = e.target.id.replace(isLikeButtonEvent ? 'like-button' : 'like-icon', '');
        likeOrDislikeGifHandler(id);
    }
}

async function likeOrDislikeGifHandler(id) {
    FAVORITES = db.get('favs');
    const itHasAlreadyBeenLiked = FAVORITES.find(fav => fav === id) !== undefined;
    itHasAlreadyBeenLiked ? dislike(id) : like(id);
    db.setFavs(FAVORITES);
}

function like(id) {
    FAVORITES.push(id);
    const icon = document.getElementById('like-icon' + id);
    icon.className = setClassName.card.likeButton.whenLiked;
    
}

function dislike(id) {
    const currentIndex = FAVORITES.findIndex(fav => fav === id);
    FAVORITES.splice(currentIndex, 1);
    const icon = document.getElementById('like-icon' + id);
    icon.className = setClassName.card.likeButton.default;

}

// ============================================================================
//      LIKE HANDLERS WHEN EXPANDED
// ============================================================================

function handleLikeButtonEventsWhenExpanded(e) {
    const isLikeIconEvent = e.target.className === setClassName.fullscreen.likeButton.default;
    const isLikeIconWhenLikedEvent = e.target.className === setClassName.fullscreen.likeButton.whenLiked;
    const isLikeButtonEvent = e.target.classList[1] === 'expanded-like-button';
    if (e.target && isLikeIconEvent || isLikeButtonEvent || isLikeIconWhenLikedEvent) {
        const id = e.target.id.replace(isLikeButtonEvent ? 'expanded-like-button' : 'expanded-like-icon', '');
        likeOrDislikeGifHandlerWhenExpanded(id)
    }
}

async function likeOrDislikeGifHandlerWhenExpanded(id) {
    FAVORITES = db.get('favs');
    const itHasAlreadyBeenLiked = FAVORITES.find(fav => fav === id) !== undefined;
    itHasAlreadyBeenLiked ? dislikeWhenExpanded(id) : likeWhenExpanded(id);
    db.setFavs(FAVORITES);
}

function likeWhenExpanded(id) {
    FAVORITES.push(id);
    expandedLikeIcon.className = setClassName.fullscreen.likeButton.whenLiked;
}

function dislikeWhenExpanded(id,icon) {
    const currentIndex = FAVORITES.findIndex(fav => fav === id);
    FAVORITES.splice(currentIndex, 1);
    expandedLikeIcon.className = setClassName.fullscreen.likeButton.default;
    // icon.className = setClassName.fullscreen.likeButton.default;
}

// ============================================================================
//      DOWNLOAD HANDLERS
// ============================================================================

function downloadButtonClickedHandler(e) {
    const isDownloadIconEvent = e.target.className === setClassName.card.downloadButton.default;
    const isDownloadButtonEvent = e.target.classList[1] === 'download-button';
    if (e.target && isDownloadIconEvent || isDownloadButtonEvent) {
        const id = e.target.id.replace(isDownloadButtonEvent ? 'download-button' : 'download-icon', '');
        downloadGifById(id);
    }
}

async function downloadGifById(id) {
    const result = await fetchToJson(URL_BY_ID + id + API_KEY);
    const gif = result.data;
    const a = document.createElement('a');
    const url = gif.images.fixed_height.url;
    const resp = await fetch(url);
    const file = await resp.blob();
    a.download = gif.title;
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();
}


// ============================================================================
//      DOWNLOAD HANDLERS WHEN EXPANDED
// ============================================================================

function handleDownloadButtonEventsWhenExpanded(e){
    const isDownloadIconEvent = e.target.className === setClassName.fullscreen.downloadButton.default;
    const isDownloadIconWhenLikedEvent = e.target.className === setClassName.fullscreen.downloadButton.whenLiked;
    const isDownloadButtonEvent = e.target.classList[1] === 'expanded-download-button';
    if (e.target && isDownloadIconEvent || isDownloadIconWhenLikedEvent || isDownloadButtonEvent) {
        const id = e.target.id.replace(isDownloadButtonEvent ? 'expanded-download-button' : 'expanded-download-icon', '');
        console.log(id);
        downloadGifById(id);
    }
}