// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"
function jokerDropAntidote() {
  // Red-tinted background to communicate failure
  background(152, 136, 41);

  fill(40, 46, 60);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  text(
    "Batman goes for the Antidote! The Joker's laughing gas is stoped but now Catwomen is now under his control 🦹🏻‍♀️",
    width / 2,
    300,
  );

  // Instruction text
  textSize(20);
  text("Press R to return to Start.", width / 2, 360);
}

// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function loseMousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for lose screen
// ------------------------------
// R is commonly used for “restart” in games
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
