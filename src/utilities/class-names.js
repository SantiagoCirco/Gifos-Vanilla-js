

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
        notFound :{
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
        finish:{
            default: 'record__finish-box hidden',
            whenUploading: 'record__finish-box',
            check:{
                default: 'record__check hidden',
                whenFinished: 'record__check'
            },
            loader:{
                default:'record__loader hidden',
                whenLoading: 'record__loader'   
            },
            buttons:{
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
    trending:{
        default :'trending',
        whenRecording : 'trending hidden',
    }

}


