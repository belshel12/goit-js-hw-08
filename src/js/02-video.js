import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

updatePlayer();

player.on('timeupdate', throttle(callback, 1000));

function callback(e) {
  localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
}

function updatePlayer() {
  const currentTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  player.setCurrentTime(currentTime);
}
