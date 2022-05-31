import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const LOCALSTORAGE_TIME = "videoplayer-current-time";

    const onPlay = function(data) {
        console.log(data.seconds)
        localStorage.setItem(LOCALSTORAGE_TIME, JSON.stringify(data.seconds))
    };
    
    player.on('timeupdate', throttle(onPlay, 1000));


    player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_TIME)).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
    
            default:
                break;
        }
    });

