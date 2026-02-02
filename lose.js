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
function drawLose() {
  // Green-tinted background to communicate success
  background(29, 161, 31);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(28);
  text(
    "THE BATMAN STANDS IN YOUR WAY AS YOU HOLD CATWOMAN \n AND THE LAUGHING GAS ANTIDOTE THAT IS AFFECTING GOTHAM. \n WHICH DO YOU DROP OFF THE SKYSKRAPER?",
    width / 2,
    300,
  );

  // Instruction text
  fill(255, 255, 255);
  textSize(20);
  text(
    "Press C to drop Catwomen 🦹🏻‍♀️ or A to drop the antidote 🧪",
    width / 2,
    360,
  );
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function winKeyPressed() {
  if (key === "c" || key === "C") {
    currentScreen = "batmanCatchCatwomen";
  }
  if (key === "a" || key === "A") {
    currentScreen = "batmanCatchAntidote";
  }
}
