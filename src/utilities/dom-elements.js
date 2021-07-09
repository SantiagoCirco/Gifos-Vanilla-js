
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

const initRecordingButton = document.getElementById('init-recording-button');
const startRecordingButton = document.getElementById('start-recording-button');
const repeatRecordingButton = document.getElementById('repeat-recording-button');
const stopRecordingButton = document.getElementById('stop-recording-button');
const uploadRecordingButton = document.getElementById('upload-recording-button');

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
const expandedTitle  =document.querySelector('.fullscreen__title');
const expandedAuthor =document.querySelector('.fullscreen__author'); 
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


