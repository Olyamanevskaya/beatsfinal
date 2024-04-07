let video;
let durationControl;
let SoundControl;
let intervalId;

document.addEventListener('DOMContentLoaded', e=>{
  video = document.getElementById('video');

  video.addEventListener('click', playStop);

  let playButtons = document.querySelectorAll('play');
  for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', playStop);
  }

  let micControl = document.getElementById('micLevel');
  micControl.addEventListener('click', sounOf);

  durationControl = document.getElementById('durationLevel');
  durationControl.addEventListener('mousedown' , stopInterval);
  durationControl.addEventListener('click' , setVideoDuration);

  durationControl.min = 0;
  durationControl.value = 0;

  SoundControl = document.getElementById('volumeLevel');
  SoundControl.addEventListener('click' , changeSoundVolume);
  SoundControl.addEventListener('mouseup' , changeSoundVolume);

  SoundControl.min = 0;
  SoundControl.max = 10;

  SoundControl.value = SoundControl.max;

})

function playStop(){
  let playImg = document.querySelector('.video__play');
  playing.classList.toggle('.video__play--active');

  durationControl.max = video.duration;

  if(video.paused){
    video.play();
    intervalid = setInterval(updateDuration , 1000 /66);
  }else{
    video.pause();
    clearInterval(intervalid);
  }
}

function updateDuration() {
  durationControl.value = video.currentTime;
}

function stopInterval() {
  video.pause();
  clearInterval(intervalid);
}

function setVideoDuration() {
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }

  video.currentTime = durationControl.value;
  intervalid = setInterval(updateDuration, 1000 /66);
}

function changeSoundVolume(){
  video.volume = SoundControl.value / 10;
}

function sounOf() {
  if(video.volume == 0){
    video.volume = soundLevel;
    SoundControl.value = soundLevel * 10;
  }else{
    soundLevel = video.volume;
    video.volume = 0;
    SoundControl.value = 0;
  }
}