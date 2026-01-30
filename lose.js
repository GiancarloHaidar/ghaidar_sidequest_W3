// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"
function drawJoker() {
  // Green-tinted background to communicate success
  background(29, 161, 31);

  fill(171, 93, 238);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text(
    "The Batman stands in your way as you hold Catwoman and the laughing gas antidote that is affecting Gotham. Which do you drop off the skyskraper?",
    width / 2,
    300,
  );

  // Instruction text
  textSize(20);
  text(
    "Click or press C to drop Catwomen 🦹🏻‍♀️ or A to drop the antidote 🧪",
    width / 2,
    360,
  );
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function winMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function winKeyPressed() {
  if (key === "c" || key === "C") {
    currentScreen = "jokerDropCatwomen";
  }
  if (key === "a" || key === "A") {
    currentScreen = "jokerDropAntidote";
  }
}
