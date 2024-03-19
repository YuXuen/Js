
class level1 extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'level1' });
    }

    preload() {

        // Step 1, load JSON
        this.load.tilemapTiledJSON("world1", "map/level1.tmj");


        // Step 2 : Preload any images here
        this.load.image("element3", "assets/element3.png");
        this.load.image("element2", "assets/element2.png");
        this.load.image("cloth", "assets/cloth.png");
        this.load.image("house", "assets/house.png");
        this.load.image("room", "assets/room.png");
        this.load.image("wall", "assets/wall.jpg");
        this.load.image("basement", "assets/basement.png");
        


    } // end of preload //

    create (){

    console.log("animationScene")

    //Step 3 - Create the map from main

    
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let Tileselement3 = map.addTilesetImage("element3", "element3");
    let Tileselement2 = map.addTilesetImage("element2", "element2");
    let Tilescloth = map.addTilesetImage("cloth", "cloth");
    let Tileshouse = map.addTilesetImage("house", "house");
    let Tilesroom = map.addTilesetImage("room", "room");
    let Tileswall = map.addTilesetImage("wall", "wall");
    let Tilesbasement = map.addTilesetImage("basement", "basement");
    

    //Step 5  create an array of tiles
 let tilesArray = [
    Tileselement3,
    Tileselement2,
    Tilescloth,
    Tileshouse,
    Tilesroom,
    Tileswall,
    Tilesbasement
 ]

    // Step 6  Load in layers by layers
    this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    this.elementLayer = map.createLayer("elementLayer",tilesArray,0,0);
    this.windowLayer = map.createLayer("windowLayer",tilesArray,0,0);
    this.clothLayer = map.createLayer("clothLayer",tilesArray,0,0);

    this.cursors = this.input.keyboard.createCursorKeys();

     // make the camera follow the player
     // this.cameras.main.startFollow(this.player);

    } // end of create //

    update () {

        // if (this.cursors.left.isDown)
        // {
        //     this.player.setVelocityX(-160);
        //     this.player.anims.play('gen-left', true);
        // }
        // else if (this.cursors.right.isDown)
        // {
        //     this.player.setVelocityX(160);
        //     this.player.anims.play('gen-right', true);
        // } else if (this.cursors.up.isDown)
        // {
        //     this.player.setVelocityY(-160);
        //     this.player.anims.play('gen-up', true);
        // } else if (this.cursors.down.isDown)
        // {
        //     this.player.setVelocityY(160);
        //     this.player.anims.play('gen-down', true);
        // } else {
        //     this.player.setVelocity(0);
        //     this.player.anims.stop();
        // }

    } // end of update // 
}