
let img;

function setup() { 
  createCanvas(400, 400);
  img = loadImage('Thing.jpg');
 frameRate(1)
}
function preload() {
    img = loadImage('Thing.jpg');
  }
function draw() {
    background(220) 
image(img, 0, 0);

// Get a random element from an array using the random(Array) syntax
let words = ['I AM FEAR', 'I FOLLOWED YOU', 'DONT YOU LIKE MY SONG','SHADOWS','WANNA PLAY'];
let word = random(words); // select random word
text(word, 100, 50); // draw the word
noLoop();
}