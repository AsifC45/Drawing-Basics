// Drawing Basics

// Setup the canvas and the graphic conext
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Store imgs in variables
let logoImg = document.getElementById("logo-img");

// Lets Draw stuff using graphic ctx

// DRAW RECTANGLES
ctx.fillStyle = "rgb(0, 255, 0"
ctx.fillRect(225, 50, 50, 50); // Draw a filled Square (Filled Shape)

ctx.strokeStyle = "purple";
ctx.strokeRect(50, 20, 150, 50); // Draw the OUTLINE (Outline Shape)

// DRAW TEXT
ctx.font = "42px Comic Sans MS";
ctx.fillStyle = "red";
ctx.fillText("Hello Canvas!", 350, 50); // (Filled Text)

ctx.font = "30px Arial";
ctx.strokeStyle = "blue";
ctx.strokeText("Hello Canvas!", 350, 100); // (Outlint Text)

// DRAW LINES
ctx.lineWidth = 4;
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(500, 200); // Set drawing location
ctx.lineTo(700, 150); // Draw a line from current location to (700, 150)
ctx.lineTo(600, 100);
ctx.stroke(); // Draw the specified path

// DRAW POLYGON
ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.moveTo(500, 400);
ctx.lineTo(700, 350);
ctx.lineTo(600, 300);
ctx.closePath(); // GO BACK TO START OF PATH
ctx.fill(); // Draw the specified path

// DRAW CIRCLES + ARCS
ctx.lineWidth = 5;
ctx.strokeStyle = "#0000FF"
ctx.beginPath();
ctx.arc(100, 500, 50, 0, 2 * Math.PI); // Circle (0 to 2*PI) with center (100, 500) and radius 50
ctx.stroke();

ctx.fillStyle = "green"
ctx.beginPath();
ctx.arc(250, 500, 30, 0, 2 * Math.PI); // Circle (0 to 2*PI) with center (250, 500) and radius 30
ctx.fill();

ctx.fillStyle = "#FFFF00"
ctx.beginPath();
ctx.arc(250, 500, 20, 0, Math.PI); // Half Circle (0 to PI) with center (250, 500) and radius 20
ctx.fill();

// DRAW IMAGES
ctx.drawImage(logoImg, 200, 150, 100, 130); // Draw image with top left corner of (200, 150)