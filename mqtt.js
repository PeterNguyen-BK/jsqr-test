const mqtt = require("mqtt");
const fs = require("fs");
const png = require("upng-js");
const jsqr = require("./jsQR");

// const client = mqtt.connect("mqtt://test.mosquitto.org", {
//   clientId: "user123"
// });

// client.on("connect", () => console.log("Connected!"))
// client.on("error", () => console.log("Error!"));
// let newdata;
const pathImg = fs.readFileSync('./input.png');
const data = png.decode(pathImg);
const rgb = png.toRGBA8(data);
const newRgb = new Uint8ClampedArray(rgb[0])
console.log(pathImg);
// const databases = JSON.parse(data);
// let x = 0;
// setInterval(() => {
//   client.publish("topic123", x.toString());
//   x += 20;
// }, 5000)
const obj = {
  data: newRgb,
  height: data.height,
  width: data.width,
};
const code = jsqr(newRgb, data.width, data.height);
console.log(code);
// client.publish("topic123", JSON.stringify(obj));
// client.publish("topic123", JSON.stringify({
//   arr: [1,2,3],
//   abc: "aaa"
// }));
