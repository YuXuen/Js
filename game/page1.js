class page1 extends Phaser.Scene {

  constructor() {
      super({ key: 'page1' });
  }

  preload() {
      // Images
      this.load.image("customer1", "assets/customer1.jpg");
  }

  create() {
      const instructionImg = this.add.image(0, 0, 'customer1');

      // Calculate scale factors
      const scaleX = this.game.config.width / instructionImg.width;
      const scaleY = this.game.config.height / instructionImg.height;

      // Set the scale to fit the image to the game scene
      instructionImg.setScale(scaleX, scaleY);

      instructionImg.setOrigin(0.5);
      instructionImg.setPosition(this.game.config.width / 2, this.game.config.height / 2);
      console.log("This is preloadScene spacebar");

      // Capture spacebar input to proceed to level1
      var spaceDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      this.input.keyboard.on('keydown-SPACE', function(event) {
          console.log("Spacebar pressed, go to level1");
          this.scene.start("level1");
      }, this);
  }
}