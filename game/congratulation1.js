class congratulation1 extends Phaser.Scene {
  constructor() {
    super("congratulation1");
  }

  preload() {
    this.load.image("congratulation1", "assets/congratulation1.jpg");
    
  }

  create() {
  
    // Display the instruction image
    const instructionImg = this.add.image(0, 0, "congratulation1");

    // Scale the image to fit the screen
    const scaleX = this.game.config.width / instructionImg.width;
    const scaleY = this.game.config.height / instructionImg.height;
    instructionImg.setScale(scaleX, scaleY);

    // Center the image on the screen
    instructionImg.setOrigin(0.5); // Set the origin to the center of the image
    instructionImg.setPosition(
      this.game.config.width / 2,
      this.game.config.height / 2
    );

    // Listen for the spacebar press to restart the current level
    this.input.keyboard.on('keydown-SPACE', function () {
      console.log("Spacebar pressed, restart level " + data.level);
      this.scene.start('level' + data.level);
  }, this);
  
  console.log("Spacebar event listener added."); // Debugging
}
}
