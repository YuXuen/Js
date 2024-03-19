class intropage extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'intropage' });
    }

    preload() {
        
        this.load.image("intro", "assets/intro.jpg");
    
    }
    
    create () {

        // Display the instruction image
        const instructionImg = this.add.image(0, 0, 'intro');
     // Scale the image to fit the screen
        const scaleX = this.game.config.width / instructionImg.width;
        const scaleY = this.game.config.height / instructionImg.height;
        instructionImg.setScale(scaleX, scaleY);

    // Center the image on the screen
       instructionImg.setOrigin(0.5); // Set the origin to the center of the image 
       instructionImg.setPosition(this.game.config.width / 2, this.game.config.height / 2);
     
       
        console.log("intropage")
        //   let map = this.make.tilemap({ key: "world" });

       var spaceDown = this.input.keyboard.addKey('SPACE');

          
  spaceDown.on('down', function(){
    console.log("Spacebar pressed, go to next menu");
   this.scene.start("story");
    }, this );
    }

}

  
 