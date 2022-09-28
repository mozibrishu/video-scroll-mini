videoElem = document.querySelector('#videoContainer')
let firstTime = true;
let videoPlaying;
let mute = 1;
playMute();
ScrollTrigger.create({
    trigger: videoElem,
    onEnter: moveToMain,
    onEnterBack: moveToMain,
    onLeave: moveToMini,
    onLeaveBack: moveToMini,
});

function moveToMain() {
    console.log('moveToMain');
    if (firstTime) {
        document.getElementById('myVideo').play();
        firstTime = false;
    }
    document.getElementById("videoContainer").style.cssText = `
    display: block; 
    position: absolute;
    top: 1500px;
    left: 0;
    right: 0;
    margin:0 auto;
  `;
}

function moveToMini() {
    console.log('moveToMini');
    document.getElementById("videoContainer").style.cssText = `
    display: block; 
    position: fixed;
    top: auto;
    left: auto;
    right: 0;
    bottom:0;
    margin:0;
    height: 150px;
    width: 180px;
  `;
}



// video code
function playMute() {
    var player = document.querySelector('#videoContainer');
    var video = player.querySelector('#myVideo');
    var toggle = player.querySelector('#toggle');
    var sound = player.querySelector('#sound');

    var playIcon = `<i class="material-icons">play_arrow</i>`;
    var pauseIcon = `<i class="material-icons">pause</i>`;
    var volumeUp = `<i class="material-icons">volume_up</i>`;
    var volumeOff = `<i class="material-icons">volume_off</i>`;
    var replayIcon = `<i class="material-icons">replay</i>`;
    if (!mute) {
        video.muted = false;
        sound.innerHTML = volumeUp;
    } else {
        video.muted = true;
        sound.innerHTML = volumeOff;
    }
    // console.log(video.paused);
    toggle.innerHTML = video.paused ? playIcon : pauseIcon;
    function togglePlay(e) {
        e.stopPropagation();
        var playOrPause = video.paused ? 'play' : 'pause';
        video[playOrPause]();
    }

    function updatePlayPause(e) {
        e.stopPropagation();
        var playPauseIcon = this.paused ? playIcon : pauseIcon;
        toggle.innerHTML = playPauseIcon;
    }

    function toggleSound(e) {
        e.stopPropagation();
        if (video.muted) {
            video.muted = false;
            sound.innerHTML = volumeUp;
            mute = 0;
        } else {
            video.muted = true;
            sound.innerHTML = volumeOff;
            mute = 1;
        }
    }

    video.addEventListener('play', updatePlayPause);
    video.addEventListener('pause', updatePlayPause);
    toggle.addEventListener('click', togglePlay);
    sound.addEventListener('click', toggleSound);

}