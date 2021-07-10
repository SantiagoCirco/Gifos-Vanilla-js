
const setClassName = {
    header: {
        default: 'header',
        whenScrolled: 'header scrolled-navbar'
    },
    // Navigation bar - Search elements
    navbar: {
        default: 'nav',
        whenMenuIsOpen: 'mobile-nav',
        menuButton: {
            default: 'menu-button',
            whenMenuIsOpen: 'menu-button hidden',
        },
        closeMenuButton: {
            default: 'close-menu-button hidden',
            whenMenuIsOpen: 'close-menu-button',
        },
        search: {
            default: 'search hidden',
            whenScrolled: 'search'
        },
        searchButton: {
            default: 'search__button search__button--open',
            whenSearching: 'search__button search__button--open hidden'
        },
        closeSearchButton: {
            default: 'search__button search__button--close hidden',
            whenSearching: 'search__button search__button--close'
        },
        circularButton: {
            default: 'nav__circular-button',
            whenScrolled: 'nav__circular-button not-visible',
            whenMobile: 'nav__circular-button not-visible',
        },
    },
    // Hero - Search elements
    hero: {
        default: 'hero container',
        whileOtherSectionIsOpen: 'hero hidden',
        searchButton: {
            default: 'hero-search__button hero-search__button--open',
            whenSearching: 'hero-search__button hero-search__button--open hidden'
        },
        closeSearchButton: {
            default: 'hero-search__button hero-search__button--close hidden',
            whenSearching: 'hero-search__button hero-search__button--close'
        },
        suggestions: {
            default: 'hero__searchSuggestions hidden',
            whenSearching: 'hero__searchSuggestions'
        },
        searchIcon: {
            default: 'hero__searchIcon hero__searchIcon--active hidden',
            whenSearching: 'hero__searchIcon hero__searchIcon--active '
        },
    },
    favorite: {
        default: 'favorites hidden',
        whileActive: 'favorites',
        notFound: {
            default: 'not-found__box hidden',
            whenThereAreNotResults: 'not-found__box'
        },
    },
    gifos: {
        default: 'mis-gifs hidden',
        whileActive: 'mis-gifs',
        notFound: {
            default: 'not-found__box hidden',
            whenThereAreNotResults: 'not-found__box'
        }
    },
    record: {
        default: 'record hidden',
        whileActive: 'record',
        video: {
            default: 'record__video',
            afterRecording: 'record__video hidden',
        },
        finish: {
            default: 'record__finish-box hidden',
            whenUploading: 'record__finish-box',
            check: {
                default: 'record__check hidden',
                whenFinished: 'record__check'
            },
            loader: {
                default: 'record__loader hidden',
                whenLoading: 'record__loader'
            },
            buttons: {
                default: 'record__buttons-box not-visible',
                whenLoaded: 'record__buttons-box'
            }
        },
        initButton: {
            default: 'record__btn',
            whenInactive: 'record__btn hidden'
        },
        startButton: {
            default: 'record__btn',
            whenInactive: 'record__btn hidden'
        },
        stopButton: {
            default: 'record__btn',
            whenInactive: 'record__btn hidden'
        },
        repeatButton: {
            default: 'record__link',
            whenInactive: 'record__link hidden'
        },
        uploadButton: {
            default: 'record__btn',
            whenInactive: 'record__btn hidden'
        },
        steps: {
            default: 'record__stepBox',
            whenActive: 'record__stepBox stepActive',
        },
        title: {
            default: 'frame__title',
            whenInactive: 'frame__title hidden',
        },
        subtitle: {
            default: 'frame__desc',
            whenInactive: 'frame__desc hidden',
        },
        timer: {
            default: 'record__subtext hidden',
            whenRecording: 'record__subtext'
        },
        gif: {
            default: 'frame__finishedGif',
            whenRepeating: 'frame__finishedGif hidden'
        },
    },
    grid: {
        default: 'grid container hidden',
        whileActive: 'grid container',
    },
    search: {
        default: 'searchResults hidden',
        whileSearchIsActive: 'searchResults',
        notFound: {
            default: 'not-found__box hidden',
            whenThereAreNotResults: 'not-found__box'
        },
        paginationButton: {
            default: 'searchResults__masBtn hidden',
            whenSearchIsActive: 'searchResults__masBtn'
        }
    },
    fullscreen: {
        default: 'fullscreen',
        expanded: 'fullscreen expanded',
        likeButton: {
            default: 'far fa-heart expanded-like-icon',
            whenLiked: 'fas fa-heart expanded-like-icon'
        },
        downloadButton: {
            default: 'fas fa-download expanded-download-icon',
            whenLiked: 'fas fa-heart expanded-donwload-icon'
        },
    },
    card: {
        likeButton: {
            default: 'far fa-heart like-icon',
            whenLiked: 'fas fa-heart like-icon'
        },
        downloadButton: {
            default: 'fas fa-download download-icon',
            whenLiked: 'fas fa-heart donwload-icon'
        },
        expandButton: {
            default: 'fas fa-expand-alt expand-icon',
            whenLiked: 'fas fa-heart expand-icon'
        }
    },
    trending: {
        default: 'trending',
        whenRecording: 'trending hidden',
    }

}

// ============================================================================
//      DOM ELEMENTS
// ============================================================================
const body = document.getElementsByTagName('body')[0];
// 1. Header and navigation elements 
const header = document.querySelector('header');
const headerLinkLogo = document.querySelector('.header__link');
const navbar = document.querySelector('nav')
const logoDesktop = document.querySelector('.header__logo--desktop');
const logoMobile = document.querySelector('.header__logo--mobile');
const menuButton = document.querySelector('.menu-button');
const closeMenuButton = document.querySelector('.close-menu-button');
const navbarSearcher = document.querySelectorAll('.search')[0];
const navbarSearchInput = document.querySelector('.search__input');
const navbarSearchButtons = document.querySelectorAll('.search__button');
const navbarCircularButton = document.querySelector('.nav__circular-button');
const navbarDarkModeToggler = document.querySelector('.nav__link--toggler');
const navbarFavoriteButton = document.querySelector('.nav__fav');
const navbarGifosButton = document.querySelector('.nav__gifos');
// ----
const navbarSearchButton = navbarSearchButtons[0];
const navbarCloseSearchButton = navbarSearchButtons[1];

// 2. Hero elements
const hero = document.querySelector('.hero');
const heroSearchButtons = document.querySelectorAll('.hero-search__button');
const heroSearchInput = document.querySelector('.hero__input');
const heroSuggestions = document.querySelector('.hero__searchSuggestions');
const heroSearchIcon = document.querySelector('.hero__searchIcon');
const heroSearchTrendingSuggestions = document.querySelector('.hero__description');
const heroSuggestionsItems = document.querySelectorAll('.suggestionTitle');
// ----
const heroSearchButton = heroSearchButtons[0];
const heroCloseSearchButton = heroSearchButtons[1];

// 3. Search results 
const searchResults = document.querySelector('.searchResults');
const resultsGrid = document.querySelector('.searchResults__grid');
const searchResultTitle = document.querySelector('.searchResults__title');
const searchNotFoundBox = document.getElementById('search-not-found');
const searchPaginationButton = document.querySelector('.searchResults__masBtn');

//4. favorite element
const favoritesSection = document.querySelector('.favorites');
const favoritesNotFound = document.getElementById('liked-not-found');
const favoritesGrid = document.querySelector('.favorites__grid');

//5. mis gifos
const gifosSection = document.querySelector('.my-gifs');
const gifosNotFound = document.getElementById('gifos-not-found');
const gifosGrid = document.querySelector('.gifos__grid');

//6. recording section
const recordSection = document.querySelector('.record');
const recordCameraIcon = document.querySelector('.record__camaraWrapper');
const recordCintaIcon = document.querySelector('.record__cinta');
const recordFinishLoadingBox = document.querySelector('.record__finish-box');
const recordFinishButtonBox = document.querySelector('.record__buttons-box');
const recordFinishLoadingText = document.querySelector('.record__text');
const recordLoadingIcon = document.querySelector('.record__loader');
const recordCheckIcon = document.querySelector('.record__check');
const recordDownloadButton = document.querySelector('.record-download-button');
const recordDownloadIcon = document.querySelector('.record-download-icon');
const recordLinkButton = document.querySelector('.record-link-button');
const recordLinkIcon = document.querySelector('.record-link-icon');
// ----
const initRecordingButton = document.getElementById('init-recording-button');
const startRecordingButton = document.getElementById('start-recording-button');
const repeatRecordingButton = document.getElementById('repeat-recording-button');
const stopRecordingButton = document.getElementById('stop-recording-button');
const uploadRecordingButton = document.getElementById('upload-recording-button');
// ----
const stepTitle = document.querySelector('.frame__title');
const stepSubtitle = document.querySelector('.frame__desc');
const timer = document.querySelector('.record__subtext');
const stepsNumber = document.getElementsByClassName('record__stepBox');
const video = document.getElementById('video');
const recordedGif = document.getElementById('jsGif');

//7. fullscreen 
const fullscreen = document.querySelector('.fullscreen');
const fullscreenContainer = document.querySelector('.fullscreen__container');
const exitExpandModalButton = document.querySelector('.fullscreen__cancelBtn');
const expandedImage = document.querySelector('.fullscreen__img');
const expandedTitle = document.querySelector('.fullscreen__title');
const expandedAuthor = document.querySelector('.fullscreen__author');
const expandedLikeIcon = document.querySelector('.expanded-like-icon');
const expandedLikeButton = document.querySelector('.expanded-like-button');
const expandedDownloadIcon = document.querySelector('.expanded-download-icon');
const expandedDownloadButton = document.querySelector('.expanded-download-button');

//8. Trending
const trending = document.querySelector('.trending');
const carouselWrapper = document.querySelector('.carousel__wrapper');
const imgWrapper = document.getElementsByClassName('carousel__imgWrapper');
const nextTrendingButton = document.getElementById('carouselNextBtn');
const prevTrendingButton = document.getElementById('carouselPrevBtn');

// ============================================================================
//      UTILITIES : VARIABLES, CONSTANTS AND HELPER FUNCTIONS
// ============================================================================

const limit = '&limit=12';
const suggestions_url = 'https://api.giphy.com/v1/tags/related/';
const search_url = 'https://api.giphy.com/v1/gifs/search';
const URL_BY_ID = 'https://api.giphy.com/v1/gifs/';
const API_KEY = '?api_key=3c84pze30TXYi3Pi1odURXCQQmDPiq4o';
const URL_UPLOAD = 'https://upload.giphy.com/v1/gifs';
const URL_TRENDING = 'https://api.giphy.com/v1/gifs/trending';
let FAVORITES = [];
let GIFOS = [];
const gifsAmount = 12;
let carouselCounter = 0;
let recorder;
let currentStep = 0;
let stream;

function whenSearchingIsActive(doFirst, doSecond) {
    doFirst(); doSecond();
}

const timerFunction = () => {
    timeCounter.increase();
    timer.textContent = `00:00:${timeCounter.sec < 10 ? '0' : ''}${timeCounter.sec}`;
}

const timeCounter = {
    sec: 0,
    timerId: null,
    increase: () => timeCounter.sec++,
    start: () => {
        timeCounter.timerId = setInterval(timerFunction, 1000);
    },
    stop: () => {
        clearInterval(timeCounter.timerId);
        timeCounter.sec = 0;
    }
}


function dont(callback) { callback(); }

const pageState = {
    openFavs: () => {
        this.favorite = true;
        this.gifos = false;
        this.record = false;
        this.default = false;
        this.trending = true;
    },
    openGifos: () => {
        this.gifos = true;
        this.favorite = false;
        this.record = false;
        this.default = false;
        this.trending = true;
    },
    openRecord: () => {
        this.record = true;
        this.gifos = false;
        this.favorite = false;
        this.default = false;
        this.trending = false;
    },
    setDefault: () => {
        this.default = true;
        this.favorite = false;
        this.record = false;
        this.gifos = false;
        this.trending = true;
    },
    currentState: () => {
        if (this.default) return 'default';
        if (this.favorite) return 'favorite';
        if (this.gifos) return 'gifos';
        if (this.record) return 'record';
    },
    default: true,
    favorite: false,
    gifos: false,
    record: false,
    trending: true,
}

function pageScroll(scrollAmount) {
    if (scrollAmount === 0) return;;
    window.scrollBy(0, 3);
    scrolldelay = setTimeout(() => pageScroll(scrollAmount - 1), 1);
}


async function fetchToJson(url) {
    try {
        const response = await fetch(url);
        const info = await response.json();
        return info;
    } catch (error) {
        return false;
    }
}


const db = {
    setFavs: (value) => {
        localStorage.setItem('favs', JSON.stringify(value));
    },
    get: (key) => {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            return [];
        }
    },
    setMyGifos: (value) => {
        localStorage.setItem('gifos', JSON.stringify(value));
    }
}



const errorGif = {
    images: {
        fixed_height: {
            url: './images/gif-error.svg',
        }
    },
    title: 'Error al cargar el Gif',
    username: 'Por favor, intentar de nuevo',
};




window.addEventListener('load', async (e) => {

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
    async function inputSearchHandler(inputValue, stopScroll) {
        closeMenuHandler();
        // window.location.href = window.location.href;
        pageState.setDefault();
        reloadAllSectionsToDefault();
        const searchValue = inputValue.trim();
        initSearch(searchValue);
        const gifResults = await getSearchResultsFromApi(offset, searchValue);
        validateAndRenderSearchResults(gifResults, searchValue, stopScroll);
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
        const itHasAlreadyBeenLiked = FAVORITES.find(fav => fav === id) !== undefined;
        expandedLikeIcon.className = itHasAlreadyBeenLiked ?
            setClassName.fullscreen.likeButton.whenLiked :
            setClassName.fullscreen.likeButton.default;
        expandedLikeIcon.id = 'expanded-like-icon' + id;
        expandedLikeButton.id = 'expanded-like-button' + id;
        expandedDownloadIcon.id = 'expanded-download-icon' + id;
        expandedDownloadButton.id = 'expanded-download-button' + id;
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

    function dislikeWhenExpanded(id, icon) {
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

    function handleDownloadButtonEventsWhenExpanded(e) {
        const isDownloadIconEvent = e.target.className === setClassName.fullscreen.downloadButton.default;
        const isDownloadIconWhenLikedEvent = e.target.className === setClassName.fullscreen.downloadButton.whenLiked;
        const isDownloadButtonEvent = e.target.classList[1] === 'expanded-download-button';
        if (e.target && isDownloadIconEvent || isDownloadIconWhenLikedEvent || isDownloadButtonEvent) {
            const id = e.target.id.replace(isDownloadButtonEvent ? 'expanded-download-button' : 'expanded-download-icon', '');
            downloadGifById(id);
        }
    }


    // ============================================================================
    //      NAVIGATION
    // ============================================================================

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
        location.reload();
        pageState.setDefault();
        reloadAllSectionsToDefault();
    });

    navbarFavoriteButton.addEventListener('click', e => {
        closeMenuHandler();
        pageState.openFavs();
        showFavoriteSectionAndHideOthers();
    });

    navbarGifosButton.addEventListener('click', e => {
        closeMenuHandler();
        pageState.openGifos();
        showMyGifosSectionAndHideOthers();
    });

    navbarCircularButton.addEventListener('click', e => {
        pageState.openRecord();
        showRecordSectionAndHideOthers();
    });

    // ============================================================================
    //      BURGER MENU
    // ============================================================================

    // MENU TOGGLER HANDLER -------------------------------------------------------------

    let menuIsOpen = false;
    function closeMenuHandler() {
        navbar.className = setClassName.navbar.default;
        menuButton.className = setClassName.navbar.menuButton.default;
        navbarCircularButton.className = setClassName.navbar.circularButton.default;
        closeMenuButton.className = setClassName.navbar.closeMenuButton.default;
    }
    function openMenuHadler() {
        navbar.className = setClassName.navbar.whenMenuIsOpen;
        menuButton.className = setClassName.navbar.menuButton.whenMenuIsOpen;
        navbarCircularButton.className = setClassName.navbar.circularButton.whenMobile;
        closeMenuButton.className = setClassName.navbar.closeMenuButton.whenMenuIsOpen;
    }
    menuButton.addEventListener('click', openMenuHadler);

    closeMenuButton.addEventListener('click', closeMenuHandler);

    // ============================================================================
    //      DARK MODE
    // ============================================================================


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



    // ============================================================================
    //     INITILIZE RECORDING THINGIS
    // ============================================================================

    async function initializeRecording() {
        if (currentStep === 0) {
            showFirstStepElements();
            await setupRecordingAndEnableSecondStep();
        }
        if (currentStep === 3) {
            showFinalStepElements();
        } else if (currentStep !== 0) {
            stepsNumber[currentStep - 1].className = setClassName.record.steps.default;
        }
        currentStep++;
    }

    async function setupRecordingAndEnableSecondStep() {
        const stream = await getStreamFromRecordRTC();
        video.srcObject = stream;
        video.play();
        recorder = new RecordRTC(stream, { type: 'gif' });
        stream.active && showSecondStepElements();
    }

    function showFinalStepElements() {
        currentStep = 0;
        stepsNumber[2].className = setClassName.record.steps.default;
    }

    function showFirstStepElements() {
        initRecordingButton.className = setClassName.record.initButton.whenInactive;
        stepsNumber[currentStep].className = setClassName.record.steps.whenActive;
        stepTitle.innerHTML = '¿Nos das acceso <br> a tu cámara ?';
        stepSubtitle.innerHTML = 'El acceso a tu camara será válido sólo <br> por el tiempo en el que estés creando el GIFO.';
    }

    function showSecondStepElements() {
        stepSubtitle.className = setClassName.record.subtitle.whenInactive;
        stepTitle.className = setClassName.record.title.whenInactive;
        video.className = setClassName.record.video.default;
        stepsNumber[currentStep].className = setClassName.record.steps.default;
        currentStep++;
        stepsNumber[currentStep].className = setClassName.record.steps.whenActive;
        startRecordingButton.className = setClassName.record.startButton.default;
    }

    async function getStreamFromRecordRTC() {
        return await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                width: 480,
                height: 320
            },
            canvas: {
                width: 320,
                height: 240
            },
            frameRate: 60,
            videoBitsPerSecond: 51200000,
        });


    }

    function startRecordingHandler() {
        recorder.startRecording();
        startRecordingButton.className = setClassName.record.startButton.whenInactive;
        stopRecordingButton.className = setClassName.record.stopButton.default;
        timer.className = setClassName.record.timer.whenRecording;
        timeCounter.start();
    }

    async function stopRecordingHandler() {
        timeCounter.stop();
        await recorder.stopRecording();
        let blob = recorder.getBlob();
        let url = window.URL.createObjectURL(blob);
        recordedGif.src = url;
        video.className = setClassName.record.video.afterRecording;
        timer.className = setClassName.record.timer.default;
        recordedGif.className = setClassName.record.gif.default;
        repeatRecordingButton.className = setClassName.record.repeatButton.default;
        stopRecordingButton.className = setClassName.record.stopButton.whenInactive;
        uploadRecordingButton.className = setClassName.record.uploadButton.default;
        uploadRecordingButton.addEventListener('click', async (e) => {
            recordFinishLoadingBox.className = setClassName.record.finish.whenUploading;
            recordFinishButtonBox.className = setClassName.record.finish.buttons.default;
            const form = new FormData();
            form.append('file', blob, 'myGif.gif');
            const resp = await fetch(URL_UPLOAD + API_KEY, {
                method: 'POST',
                body: form
            });
            const result = await resp.json();
            setTimeout(() => {
                recordFinishLoadingText.textContent = '¡el GIFO fue cargado con éxito!';
                recordLoadingIcon.className = setClassName.record.finish.loader.default;
                recordFinishButtonBox.className = setClassName.record.finish.buttons.whenLoaded;
                recordCheckIcon.className = setClassName.record.finish.check.whenFinished;
            }, 500);
            const gifoID = result.data.id;
            recordLinkButton.id = 'record-link-button' + gifoID;
            recordLinkIcon.id = 'record-link-icon' + gifoID;
            recordDownloadButton.id = 'record-download-button' + gifoID;
            recordDownloadIcon.id = 'record-download-icon' + gifoID;
            GIFOS.push(gifoID);
            db.setMyGifos(GIFOS);
            const response = await fetchToJson(URL_BY_ID + gifoID + API_KEY);
        });
    }

    async function repeatRecordingHandler() {
        await getStreamFromRecordRTC();
        timeCounter.stop();
        timer.textContent = '00:00:00';
        video.className = setClassName.record.video.default;
        recordedGif.className = setClassName.record.gif.whenRepeating;
        stopRecordingButton.className = setClassName.record.stopButton.whenInactive;
        startRecordingButton.className = setClassName.record.startButton.default;
        repeatRecordingButton.className = setClassName.record.repeatButton.whenInactive;
        uploadRecordingButton.className = setClassName.record.repeatButton.whenInactive;
        const stream = await getStreamFromRecordRTC();
        video.srcObject = stream;
        video.play();
        recorder = new RecordRTC(stream, { type: 'gif' });
    }


    recordDownloadButton.addEventListener('click', downloadNewGif);
    recordDownloadIcon.addEventListener('click', downloadNewGif);
    recordLinkButton.addEventListener('click', goToGifWindow);
    recordLinkIcon.addEventListener('click', goToGifWindow);

    initRecordingButton.addEventListener('click', initializeRecording);
    startRecordingButton.addEventListener('click', startRecordingHandler);
    stopRecordingButton.addEventListener('click', stopRecordingHandler);
    repeatRecordingButton.addEventListener('click', repeatRecordingHandler);

    function downloadNewGif(e) {
        e.stopPropagation();
        const id = e.target.id.replace(e.target.classList[2], '');
        downloadGifById(id);
    }

    async function goToGifWindow(e) {
        e.stopPropagation();
        const id = e.target.id.replace(e.target.classList[2], '');
        const result = await fetchToJson(URL_BY_ID + id + API_KEY);
        const url = result.data.url;
        window.open(url, '_blank');
    }





    // ============================================================================
    //      TRENDING
    // ============================================================================


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

        try {
            const apiResponse = await fetch(URL_TRENDING + API_KEY + limit, {
                credentials: "omit",
            });
            const response = await apiResponse.json();
            const gifs = response.data;
            gifs.forEach(gif => createGifTrendingCard(gif, carouselWrapper));
        } catch (error) {
            for (let i = 0; i < gifsAmount; i++) {
                createGifTrendingCard(errorGif, carouselWrapper);
            }
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
    //     CAROUSEL THINGIES
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
        let gifArray = [];
        if (!response) {
            for (let i = 0; i < limit; i++) {
                gifsArray.push(errorGif);
            }
        } else {
            gifsArray = response.data;
        }
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


    await getTrendings();
    await getTrendingSearchs();





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



});


window.onload = () => {
    pageState.setDefault();
    const favStorage = db.get('favs');
    const gifoStorage = db.get('gifos');
    (favStorage) ? FAVORITES = favStorage : db.setFavs([]);
    (gifoStorage) ? GIFOS = gifoStorage : db.setMyGifos([]);
}



















