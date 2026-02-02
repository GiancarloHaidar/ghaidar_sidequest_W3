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
function batmanCatchAntidote() {
  // Red-tinted background to communicate failure
  background(152, 136, 41);

  fill(40, 46, 60);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(28);
  text(
    "BATMAN GOES FOR THE ANTIDOTE! \n THE JOKER'S LAUGHING GAS IS STOPED \n BUT NOW CATWOMEN IS NOW UNDER HIS CONTROL 🦹🏻‍♀️",
    width / 2,
    300,
  );

  // Instruction text
  fill(255, 255, 255);
  textSize(20);
  text("Press R to return to Start.", width / 2, 380);
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
