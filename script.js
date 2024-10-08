const keyEl = document.querySelectorAll(".key");
const audioEl = document.querySelectorAll("audio");

document.addEventListener("keydown", (event) => {
  const pressedKey = event.keyCode.toString();

  audioEl.forEach((audio) => {
    if (audio.id === pressedKey) {
      audio.currentTime = 0;
      audio.play();
    }
  });

  keyEl.forEach((key) => {
    if (key.id === pressedKey) {
      key.classList.add("playing");
    }
  });
});

keyEl.forEach((element) => {
  element.addEventListener("click", () => {
    const clickedId = element.id;

    audioEl.forEach((audio) => {
      if (audio.id === clickedId) {
        audio.currentTime = 0;
        audio.play();
      }
    });

    element.classList.add("playing");
  });
});

keyEl.forEach((key) => {
  key.addEventListener("transitionend", () => {
    key.classList.remove("playing");
  });
});
