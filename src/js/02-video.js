import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(parseFloat(currentTime));
}

const throttled = throttle((seconds) => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

player.on('timeupdate', function(data) {
  throttled(data.seconds);
});
