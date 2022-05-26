const { Howl } = require("howler");

import "./style.css";

const buttons = document.querySelectorAll("main button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const sound = button.dataset.sound;
    handleClick(sound);
  });
});

const handleClick = (s) => {
  var sound = new Howl({
    src: [`assets/${s}`],
  });

  sound.play();
};
