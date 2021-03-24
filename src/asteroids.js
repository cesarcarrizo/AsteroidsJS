"use strict";

/** @type {HTMLCanvasElement} */
let canvas = document.getElementById("gameCanvas");

// Context: 2D
let context = canvas.getContext("2d");

// SHIP

const SHIP_SIZE = 30; // pixels

let ship = {
  x: canvas["width"] / 2,
  y: canvas["height"] / 2,
  r: SHIP_SIZE / 2, // radius
  a: (90 / 180) * Math.PI, // angle (converted to RADIANS)
};

// Setting up the game loop
const FPS = 30.0;

const update = () => {
  // draw space
  context["fillStyle"] = "black";
  context.fillRect(0, 0, canvas["width"], canvas["height"]);
  // draw triangular ship
  context["strokeStyle"] = "white";
  context["lineWidth"] = SHIP_SIZE / 20;

  // Starting to draw the ship shape
  context.beginPath();
  context.moveTo(
    // nose of the ship
    ship["x"] + ship["r"] * Math.cos(ship["a"]),
    ship["y"] - ship["r"] * Math.sin(ship["a"])
  );
  context.lineTo(
    // rear left
    ship["x"] - ship["r"] * (Math.cos(ship["a"]) + Math.sin(ship["a"])),
    ship["y"] + ship["r"] * (Math.sin(ship["a"]) - Math.cos(ship["a"]))
  );
  context.lineTo(
    // rear right
    ship["x"] - ship["r"] * (Math.cos(ship["a"]) - Math.sin(ship["a"])),
    ship["y"] + ship["r"] * (Math.sin(ship["a"]) + Math.cos(ship["a"]))
  );
  // this method will draw a line from the current posicition towards the beginning of the draw position
  context.closePath();
  context.stroke();
  // rotate the ship

  // move the ship
};

setInterval(update, 1000 / FPS); // calls the first param func every (second param) milisecs
