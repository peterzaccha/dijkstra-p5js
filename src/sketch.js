import Point from "./lib/point.js";
export default function sketch(s) {
  const point = new Point();
  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
  };
  s.draw = () => {
    s.background(225);
    point.draw(s);
  };
}
