2
class level3 extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'level3' });
    }

    preload() {

        // Step 1, load JSON
        this.load.tilemapTiledJSON("world3", "map/level3.tmj");


        // Step 2 : Preload any images here
        this.load.image("element3", "assets/element3.png");
        this.load.image("element2", "assets/element2.png");
        this.load.image("cloth", "assets/cloth.png");
        this.load.image("house", "assets/house.png");
        this.load.image("room", "assets/room.png");
        this.load.image("wall", "assets/wall.jpg");
        this.load.image("shoes", "assets/shoes.png");
        this.load.image("dress10", "assets/dress10.png");
        this.load.image("dress11", "assets/dress11.png");
        this.load.image("s", "assets/s.png");
        this.load.image("cloth2", "assets/cloth2.png");
        this.load.image("dress12", "assets/dress12.png");
        this.load.image("dress13", "assets/dress13.png");
        this.load.image("dress14", "assets/dress14.png");
        this.load.image("star", "assets/star.png");



        
         this.load.spritesheet ('maincharacter','assets/maincharacter.png',{ frameWidth:64,frameHeight: 64});


    } // end of preload //

    create (){

    console.log("level3")

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world3" });
    
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let Tileselement3 = map.addTilesetImage("element3", "element3");
    let Tileselement2 = map.addTilesetImage("element2", "element2");
    let Tilescloth = map.addTilesetImage("cloth", "cloth");
    let Tileshouse = map.addTilesetImage("house", "house");
    let Tilesroom = map.addTilesetImage("room", "room");
    let Tileswall = map.addTilesetImage("wall", "wall");
    

    //Step 5  create an array of tiles
 let tilesArray = [
    Tileselement3,
    Tileselement2,
    Tilescloth,
    Tileshouse,
    Tilesroom,
    Tileswall,
 ]

    // Step 6  Load in layers by layers
    this.groundLayer = map.createLayer("ground",tilesArray,0,0);
    this.elementLayer = map.createLayer("element",tilesArray,0,0);
    this.windowLayer = map.createLayer("window",tilesArray,0,0);
    this.element2Layer = map.createLayer("element2",tilesArray,0,0);
    this.element3Layer = map.createLayer("element3",tilesArray,0,0);

    this.physics.world.bounds.width=this.groundLayer.width;
    this.physics.world.bounds.height=this.groundLayer.height;

    var cloth = map.findObject("ObjectLayer",(obj) => obj.name === "itemb");
    var cloth2 = map.findObject("ObjectLayer",(obj) => obj.name === "item2");
    var cloth3 = map.findObject("ObjectLayer",(obj) => obj.name === "item3");
    var cloth4 = map.findObject("ObjectLayer",(obj) => obj.name === "item4");
    var cloth5 = map.findObject("ObjectLayer",(obj) => obj.name === "item5");
    var cloth6 = map.findObject("ObjectLayer",(obj) => obj.name === "item6");
    var cloth7 = map.findObject("ObjectLayer",(obj) => obj.name === "item7");
    var cloth8 = map.findObject("ObjectLayer",(obj) => obj.name === "item8");
    var cloth9 = map.findObject("ObjectLayer",(obj) => obj.name === "item9");
    var cloth10 = map.findObject("ObjectLayer",(obj) => obj.name === "item10");
    var cloth11 = map.findObject("ObjectLayer",(obj) => obj.name === "item11");
   
    // this.object1 = this.add.image(72.53, 339.30, 'star');
    // this.object2 = this.add.image(141.38, 420.44, 'shoes');
    // this.object3 = this.add.image(317.17, 191.78, 'dress10');
    // this.object4 = this.add.image(317.17, 236.04, 'dress11');
    // this.object5 = this.add.image(494.20, 419.21, 's');
    // this.object6 = this.add.image(285.21, 388.47, 'dress12');
    // this.object7 = this.add.image(352.82, 387.25, 'cloth2');
    // this.object8 = this.add.image(416.75, 574.11, 'dress13');
    // this.object9 = this.add.image(221.28, 576.57, 'dress14');
    // this.object10 = this.add.image(191.78, 218.82, 'star');
    // this.object11 = this.add.image(451.17, 215.14, 'star');

    this.anims.create({
        key: 'maincharacter-up', 
        frames: this.anims.generateFrameNumbers ('maincharacter', 
        { start:105, end: 112 }),
        FrameRate: 5, 
        repeat:-1
    });

    this.anims.create({
        key: 'maincharacter-left', 
        frames: this.anims.generateFrameNumbers ('maincharacter', 
        { start:118, end: 125 }),
        FrameRate: 5, 
        repeat:-1
    });

    this.anims.create({
        key: 'maincharacter-down', 
        frames: this.anims.generateFrameNumbers ('maincharacter', 
        { start:131, end: 138 }),
        FrameRate: 5, 
        repeat:-1
    });
       
    this.anims.create({
        key: 'maincharacter-right', 
        frames: this.anims.generateFrameNumbers ('maincharacter', 
        { start:144, end: 151}),
        FrameRate: 5, 
        repeat:-1
    });

    this.player=this.physics.add.sprite (30, 300,'maincharacter').play("maincharacter-right")
    window.player=this.player
    this.player.body.setSize(this.player.width*0.1,this.player.height*0.2)

    this.cloth = this.physics.add.sprite(141.38, 420.44, "shoes")
    this.cloth2 = this.physics.add.sprite(317.17, 191.78, "dress10")
    this.cloth3 = this.physics.add.sprite(317.17, 236.04, "dress11")
    this.cloth4 = this.physics.add.sprite(494.20, 419.21, "s")
    this.cloth5 = this.physics.add.sprite(285.21, 388.47, "dress12")
    this.cloth6 = this.physics.add.sprite(352.82, 387.25, "cloth2")
    this.cloth7 = this.physics.add.sprite(416.75, 574.11, "dress13")
    this.cloth8 = this.physics.add.sprite(221.28, 576.57, "dress14")
    this.cloth9 = this.physics.add.sprite(191.78, 218.82, "star")
    this.cloth10 = this.physics.add.sprite(451.17, 215.14, "star")
    this.cloth11 = this.physics.add.sprite(72.53, 339.30, "star")

     // When object overlap with player, call the this.collectFire function
     this.physics.add.overlap(this.player, this.cloth, this.hitCloth, null, this);
     this.physics.add.overlap(this.player, this.cloth2, this.hitCloth, null, this);
     this.physics.add.overlap(this.player, this.cloth3, this.hitCloth, null, this);
     this.physics.add.overlap(this.player, this.cloth4, this.hitCloth, null, this);
     this.physics.add.overlap(this.player, this.cloth5, this.hitCloth, null, this);
     this.physics.add.overlap(this.player, this.cloth6, this.hitCloth, null, this);
     this.physics.add.overlap(this.player, this.cloth7, this.hitCloth, null, this);
     this.physics.add.overlap(this.player, this.cloth8, this.hitCloth, null, this);
     this.physics.add.overlap(this.player, this.cloth9, this.hitCloth, null, this);
     this.physics.add.overlap(this.player, this.cloth10, this.hitCloth, null, this);
     this.physics.add.overlap(this.player, this.cloth11, this.hitCloth, null, this);

    this.groundLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.groundLayer);
   
    this.elementLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.elementLayer);
    
    this.windowLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.windowLayer);
    
    this.element2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.element2Layer);

    this.element3Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.element3Layer);


    this.cursors = this.input.keyboard.createCursorKeys();

     // make the camera follow the player
     this.cameras.main.startFollow(this.player);

     var level3Down=this.input.keyboard.addKey(50);
    
    level3Down.on('down',function(){
        console.log("50 pressed,jump to level 3");
        this.scene.start("level3")
     },this);

     // this.cameras.main.startFollow(this.player);


    } // end of create //

    update () {

          //In update()  
  if (
    this.player.x > 623 &&
    this.player.y > 433 &&
    this.player.y < 503
  ) {
    console.log("Door2");
    this.room2();
  }


         if (this.cursors.left.isDown)
        {
             this.player.setVelocityX(-160);
             this.player.anims.play('maincharacter-left', true);
        }
         else if (this.cursors.right.isDown)
        {
             this.player.setVelocityX(160);
             this.player.anims.play('maincharacter-right', true);
        } else if (this.cursors.up.isDown)
         {
             this.player.setVelocityY(-160);
             this.player.anims.play('maincharacter-up', true);
         } else if (this.cursors.down.isDown)
         {
            this.player.setVelocityY(160);
             this.player.anims.play('maincharacter-down', true);
         } else {
             this.player.setVelocity(0);
             this.player.anims.stop();
         }

         this.player.setCollideWorldBounds(true);  // don't go out of the this.map


    } // end of update // 

     // this function is called when player touch the fire
  hitCloth(player, item) {
    console.log("Hit cloth");
    item.disableBody(true, true); // remove fire
    
  }

    
   
         // outside of update()
 
  // Function to jump to room1
  room2(player, tile) {
    console.log("room2 function");
    this.scene.start("congratulation1",);
  } 
     
}