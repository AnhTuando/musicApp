songList = [
  {
    id: 0,
    songName: "Perfect",
    singer: "Ed Sheeran",
    path: "./songs/Perfect.mp3",
    img: "./img/Ed Sheeran.jpg",
  },
  {
    id: 1,
    songName: "Thats Hilarious",
    singer: "Charlie Puth",
    path: "./songs/Thats Hilarious.mp3",
    img: "./img/Charlie Puth.jpg",
  },
  {
    id: 2,

    songName: "Thats Not How This Works",
    singer: "Charlie Puth",
    path: "./songs/Thats Not How This Works.mp3",
    img: "./img/Charlie Puth.jpg",
  },
  {
    id: 3,
    songName: "When I Was Your Man",
    singer: "Bruno Mars",
    path: "./songs/When I Was Your Man.mp3",
    img: "./img/BrunoMars.jpg",
  },
  {
    id: 4,
    songName: "Until You",
    singer: "Shayne Ward ",
    path: "./songs/Until You.mp3",
    img: "./img/Shayne Ward.jpg",
  },
];
let $img = $("img");
let $songName = $(".songName");
let $singer = $(".singer");
let $audio = $("#audio");
let progress = document.querySelector("#progress");
let body = document.querySelector("body");
let currentIndex = 0;

function renderSong(index) {
  $songName.html(`${songList[index].songName}`);
  $singer.html(`${songList[index].singer}`);
  $img.attr("src", `${songList[index].img}`);
  $audio.attr("src", `${songList[index].path}`);
  $audio.prop("volume", 0.5);
  progress.value = 0;
}
renderSong(currentIndex);
let shuffle = document.querySelector(".shuffle");
shuffle.onclick = function () {
  shuffle.classList.toggle("active");
};

// Play
let playBtn = document.querySelector(".play");
playBtn.addEventListener("click", function () {
  $audio.get(0).play();
  playBtn.classList.add("display_none");
  pauseBtn.classList.remove("display_none");
});
// Pause
let pauseBtn = document.querySelector(".pause");
pauseBtn.addEventListener("click", function () {
  $audio.get(0).pause();
  pauseBtn.classList.add("display_none");
  playBtn.classList.remove("display_none");
});
// Next
let nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("click", function () {
  if (shuffle.classList.contains("active")) {
    let lastRandom = null;
    currentIndex = Math.floor(Math.random() * songList.length);
    while (currentIndex == lastRandom) {
      currentIndex = Math.floor(Math.random() * songList.length);
    }
    renderSong(currentIndex);
    $audio.get(0).play();
  } else {
    currentIndex += 1;
    if (currentIndex > songList.length - 1) {
      currentIndex = 0;
      renderSong(currentIndex);
    }
  }

  renderSong(currentIndex);
  $audio.get(0).play();
  playBtn.classList.add("display_none");
  pauseBtn.classList.remove("display_none");
});

// Previous
let prevBtn = document.querySelector(".prev-btn");

prevBtn.addEventListener("click", function () {
  if (shuffle.classList.contains("active")) {
    let lastRandom = null;
    currentIndex = Math.floor(Math.random() * songList.length);
    while (currentIndex == lastRandom) {
      currentIndex = Math.floor(Math.random() * songList.length);
    }
    renderSong(currentIndex);
    $audio.get(0).play();
  } else {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = songList.length - 1;
      renderSong(currentIndex);
    }
  }

  renderSong(currentIndex);
  $audio.get(0).play();
  playBtn.classList.add("display_none");
  pauseBtn.classList.remove("display_none");
});

// Rewind
progress.onchange = function (e) {
  let songDuration = $audio.get(0).duration;
  let rewindTime = (songDuration * e.target.value) / 100;
  $audio.get(0).currentTime = rewindTime;
};
// Progress audio
$(audio).on("timeupdate", function () {
  let progressPercent = Math.floor(
    ($audio.get(0).currentTime / $audio.get(0).duration) * 100
  );
  progress.value = progressPercent;
});
// volume
$audio.prop("volume", 0.5);
let volume = document.querySelector("#volume");
volume.onchange = function (e) {
  let volumeDuration = e.target.value / 100;

  $audio.prop("volume", volumeDuration);
  console.log(volumeDuration);
};
// let shuffle = document.querySelector(".shuffle");
// shuffle.onclick = function () {
//   let lastRandom = null;
//   shuffle.classList.toggle("active");
//   currentIndex = Math.floor(Math.random() * songList.length);
//   while (currentIndex == lastRandom) {
//     currentIndex = Math.floor(Math.random() * songList.length);
//   }
//   if (shuffle.classList.contains("active")) {
//     prevBtn.addEventListener("click", function () {
//       renderSong(currentIndex);
//       $audio.get(0).play();
//     });
//   }
//   lastRandom = currentIndex;
//   console.log(currentIndex);
// };
// let shuffle = document.querySelector(".shuffle");
// shuffle.onclick = function () {
//   shuffle.classList.toggle("active");
// };
// if (shuffle.classList.contains("active")) {
//   let lastRandom = null;
//   currentIndex = Math.floor(Math.random() * songList.length);
//   while (currentIndex == lastRandom) {
//     currentIndex = Math.floor(Math.random() * songList.length);
//   }
//   renderSong(currentIndex);
//   $audio.get(0).play();
// }
