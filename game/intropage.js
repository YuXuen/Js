class intropage extends Phaser.Scene {
  constructor() {
    super("intropage");
  }

  preload() {
    this.load.image("gameintro1", "assets/gameintro1.jpg");
    this.load.audio("bgmusic", "assets/Sakura-Girl-Daisy-chosic.com_.mp3");
  }

  create() {
    this.music = this.sound.add("bgmusic", { loop: true }).setVolume(0.2);
    this.music.play();

    // Display the instruction image
    const instructionImg = this.add.image(0, 0, "gameintro1");

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

    this.input.keyboard.on(
      "keydown-SPACE",
      function () {
        console.log("Spacebar pressed, go to next menu");
        this.scene.start("story");
      },
      this
    );
  }
}
