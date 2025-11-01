const params = new URLSearchParams(window.location.search);
const mood = params.get("mood") || "happy";
let track_list = playlists[mood];
let track_indez = 0;
let isPlaying = false;

let curr_track = document.createElement("audio");
const track_name = document.querySelector(".track-name");
const track_artist = document.querySelector(".track-artist");
const playpause_btn = document.querySelector(".playpause-track i");
const next_btn = document.querySelector(".next-track");
const prev_btn = document.querySelector(".prev-track");
const seek_slider = document.querySelector(".seek_slider");
const volume_slider = document.querySelector(".volume_slider");
const curr_time = document.querySelector(".current-time");
const total_duration = document.querySelector(".total-duration");   

document.getElementById("track-total").textContent = track_list.length;

function loadTrack(index) {
    clearInterval(updateTimer);
    resetValues();

    curr_track.src = track_list[index].path;
    curr_track.load();

    track_artist.src = track_list[index].cover;
    track_name.textContent = track_list[index].name;
    track_artist.textContent = track_list[index].artist;
    document.getElementById("track-num").textContent = index + 1;

    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack); 
}
function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

