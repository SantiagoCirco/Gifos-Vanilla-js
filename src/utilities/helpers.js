
const limit = '&limit=12';
const suggestions_url = 'https://api.giphy.com/v1/tags/related/';
const search_url = 'https://api.giphy.com/v1/gifs/search';
const URL_BY_ID = 'https://api.giphy.com/v1/gifs/';
const API_KEY = '?api_key=3c84pze30TXYi3Pi1odURXCQQmDPiq4o';
const URL_UPLOAD = 'https://upload.giphy.com/v1/gifs';
const URL_TRENDING = 'https:/api.giphy.com/v1/gifs/trending';
let FAVORITES = [];
let GIFOS = [];
const gifsAmount = 12;
let carouselCounter = 0;

function whenSearchingIsActive(doFirst, doSecond) {
    doFirst(); doSecond();
}



const timerFunction = () => {
    timeCounter.increase();
    console.log(timeCounter.sec);
    timer.textContent = `00:00:${timeCounter.sec < 10 ? '0' : ''}${timeCounter.sec}`;
}

const timeCounter = {
    sec : 0,
    timerId : null,
    increase: () => timeCounter.sec++,
    start: () => {
         timeCounter.timerId= setInterval(timerFunction, 1000);
    },
    stop: () => {
        clearInterval(timeCounter.timerId);
        console.log('reset');
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
    trending:true,
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
        alert('Ha ocurrido un error de carga... Por favor, vuelva a intentarlo.\n' + error);
        return false;
    }
}


const db = {
    setFavs: (value) => {
        localStorage.setItem('favs', JSON.stringify(value));
    },
    get: (key) => { return JSON.parse(localStorage.getItem(key)); },
    setMyGifos: (value) =>{
        localStorage.setItem('gifos',JSON.stringify(value));
    }
}


function _showErrorGifs() {
    var errorGif = {
        images: {
            fixed_height: {
                url: './images/gif-error.svg',
            }
        },
        title: 'Error al cargar el Gif',
        username: 'Por favor, intentar de nuevo',
    };
    for (let i = 0; i < gifsAmount; i++) {
        _createTredingGif(errorGif);
    }
}