function _createTrendingSearchSuggestionElements(response) {
    const trendingSearchs = response.data.slice(0, 5);
    trendingSearchs.forEach((e, i) => {
        const capitalizedText = e.charAt(0).toUpperCase() + e.slice(1);
        const idName = `js${capitalizedText}`;
        heroSearchTrendingSuggestions.innerHTML += `
                <span class='hero__trendingSearchLinks' id='${idName}'>${capitalizedText}</span>
                <span>  ${i === 4 ? '.' : ','} </span>`;
    });
}

async function getTrendingSearchs() {
    const response = await fetchToJson('https://api.giphy.com/v1/trending/searches' + API_KEY);
    _createTrendingSearchSuggestionElements(response);
}



async function getTrendings() {
    const gifsList = await fetchToJson(URL_TRENDING + API_KEY + limit);
    if (!gifsList) {
        _showErrorGifs();
    } else {
        gifsList.data.forEach(gif => createGifTrendingCard(gif, carouselWrapper));
    }
}

function createGifTrendingCard(gif, parent) {

    FAVORITES = db.get('favs');
    const itHasAlreadyBeenLiked = FAVORITES.find(fav => fav === gif.id) !== undefined;
    const likeIconClassName = itHasAlreadyBeenLiked ?
        setClassName.card.likeButton.whenLiked :
        setClassName.card.likeButton.default;
    const downloadIconClassName = setClassName.card.downloadButton.default;
    const expandIconClassName = setClassName.card.expandButton.default;

    parent.innerHTML += `
        <div class=" carousel__imgWrapper" id="${gif.id}">
            <img class=" carousel__img" src="${gif.images.fixed_height.url}" alt="${gif.title}" >
            <div class="carousel__imgInfo">
                <div class="imgInfo__btnsBox">
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



// ============================================================================
//      CAROUSEL THINGIS
// ============================================================================



function getNextSlides() {
    const amountOfGifSlides = (gifsAmount / 3) - 1.5;
    const maxScrolling = -(carouselWrapper.offsetWidth * amountOfGifSlides) + 121;
    let willResetScrolling = carouselCounter < maxScrolling;
    (willResetScrolling) ? carouselCounter = 0 : carouselCounter -= carouselWrapper.offsetWidth - 25;
    _moveCarousel();
}

function getPrevSlides() {
    const amountOfGifSlides = (gifsAmount / 3) - 1.5;
    const maxScrolling = carouselWrapper.offsetWidth - 200;
    let willResetScrolling = (-carouselCounter) < maxScrolling;
    (willResetScrolling) ? carouselCounter = -(carouselWrapper.offsetWidth * amountOfGifSlides) - 475 : carouselCounter += carouselWrapper.offsetWidth - 25;
    _moveCarousel();
}

function _moveCarousel() {
    for (let i = 0; i < imgWrapper.length; i++) {
        imgWrapper[i].style.transform = `translateX(${carouselCounter}px)`;
        imgWrapper[i].style.transition = 'all 400ms cubic-bezier(.44,-0.01,.98,.63)';
    }
}


nextTrendingButton.addEventListener('click', getNextSlides);
prevTrendingButton.addEventListener('click', getPrevSlides);