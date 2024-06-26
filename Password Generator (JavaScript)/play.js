const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let firstPasswordEl = document.getElementById("first-password");
let secondPasswordEl = document.getElementById("second-password");
let generatedPassword1 = "";
let generatedPassword2 = "";

function generate() {
  generatedPassword1 = "";
  firstPasswordEl.textContent = "";
  generatedPassword2 = "";
  secondPasswordEl.textContent = "";
  for (let i = 0; i < 12; i++) {
    let password = Math.floor(Math.random() * characters.length);
    generatedPassword1 += characters[password];

    firstPasswordEl.textContent = generatedPassword1;
  }

  for (let i = 0; i < 12; i++) {
    let password = Math.floor(Math.random() * characters.length);
    generatedPassword2 += characters[password];

    secondPasswordEl.textContent = generatedPassword2;
  }
}
