const information = require("./information.js");

const cowsay = require("cowsay");

console.log(cowsay.say({
  text: `Je m'appelle ${information.name} et je suis à ${information.campus} !` ,
  e: "oO",
  T: "U "
}));