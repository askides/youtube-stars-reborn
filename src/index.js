import { Howl } from "howler";
import "./style.css";

const buttons = document.querySelectorAll("main button");

buttons.forEach((button) => {
  const star = button.parentNode.dataset.star;
  button.addEventListener("click", () => {
    const sound = button.dataset.sound;
    handleClick(star, sound);
  });
});

const handleClick = (star, sound) => {
  const track = new Howl({
    src: [`assets/${star}/${sound}`],
  });

  track.play();
};
