
class level1 extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'level1' });
        this.score=0;
        
        
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
        this.load.image("dress", "assets/dress.png");
        this.load.image("dress2", "assets/dress2.png");
        this.load.image("cloth2", "assets/cloth2.png");
        this.load.image("ribbon", "assets/ribbon.png");
        this.load.image("dress3", "assets/dress3.png");
        this.load.image("star", "assets/star.png");
        
         this.load.spritesheet ('maincharacter','assets/maincharacter.png',{ frameWidth:64,frameHeight: 64});

         


    } // end of preload //

    create (){

    console.log("level1")

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world1" });
    
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

    let delay = 5000; // 5 seconds
        let timer = this.time.addEvent({
            delay: delay,
            callback: timerCallback,
            callbackScope: this,
            loop: false
        });

        function timerCallback() {
            console.log("Timer elapsed!");
        }
    
  
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
    this.groundLayer = map.createLayer("ground",tilesArray,0,0);
    this.elementLayer = map.createLayer("element",tilesArray,0,0);
    this.windowLayer = map.createLayer("window",tilesArray,0,0);
    this.clothLayer = map.createLayer("cloth",tilesArray,0,0);

    let cloth = map.findObject("ObjectLayer",(obj) => obj.name === "item");
    let cloth2 = map.findObject("ObjectLayer",(obj) => obj.name === "item2");
    let cloth3 = map.findObject("ObjectLayer",(obj) => obj.name === "item3");
    let cloth4 = map.findObject("ObjectLayer",(obj) => obj.name === "item4");
    let cloth5 = map.findObject("ObjectLayer",(obj) => obj.name === "item5");
    let cloth6 = map.findObject("ObjectLayer",(obj) => obj.name === "item6");
    let cloth7 = map.findObject("ObjectLayer",(obj) => obj.name === "item7");
    let cloth8 = map.findObject("ObjectLayer",(obj) => obj.name === "item8");
    
    // this.object8 = this.add.image(386.02,322.09, 'star');
    // this.object1 = this.add.image(cloth.x, cloth.y, 'dress');
    // this.object2 = this.add.image(cloth2.x, cloth2.y, 'dress2');
    // this.object3 = this.add.image(cloth3.x, cloth3.y, 'cloth2');
    // this.object4 = this.add.image(574.11,164.73, 'ribbon');
    // this.object5 = this.add.image(462.24,322.09, 'dress3');
    // this.object6 = this.add.image(129.08,319.63, 'star');
    // this.object7 = this.add.image(319.63,191.78, 'star');
    
    this.physics.world.bounds.width=this.groundLayer.width;
    this.physics.world.bounds.height=this.groundLayer.height;

    //object layers

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

    this.player=this.physics.add.sprite (41.6, 305,'maincharacter').play("maincharacter-right")
    window.player=this.player
    this.player.body.setSize(this.player.width*0.2,this.player.height*0.3)

    this.cloth = this.physics.add.sprite(cloth.x, cloth.y, "dress")
    this.cloth2 = this.physics.add.sprite(473.30, 480.68, "dress2")
    this.cloth3 = this.physics.add.sprite(236.04, 324.55, "cloth2")
    this.cloth4 = this.physics.add.sprite(574.11, 164.73, "ribbon")
    this.cloth5 = this.physics.add.sprite(462.24, 322.09, "dress3")
    this.cloth6 = this.physics.add.sprite(386.02, 322.09, "star")
    this.cloth7 = this.physics.add.sprite(129.08, 319.63, "star")
    this.cloth8 = this.physics.add.sprite(319.63, 191.78, "star")

      
      // When object overlap with player, call the this.collectFire function
      this.physics.add.overlap(this.player, this.cloth, this.hitCloth, null, this);
      this.physics.add.overlap(this.player, this.cloth2, this.hitCloth, null, this);
      this.physics.add.overlap(this.player, this.cloth3, this.hitCloth, null, this);
      this.physics.add.overlap(this.player, this.cloth4, this.hitCloth, null, this);
      this.physics.add.overlap(this.player, this.cloth5, this.hitCloth, null, this);
      this.physics.add.overlap(this.player, this.cloth6, this.hitCloth, null, this);
     this.physics.add.overlap(this.player, this.cloth7, this.hitCloth, null, this);
     this.physics.add.overlap(this.player, this.cloth8, this.hitCloth, null, this);
    

    this.groundLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.groundLayer);
   
    this.elementLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.elementLayer);
    
    this.windowLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.windowLayer);
    
    this.clothLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.clothLayer);

   

    this.cursors = this.input.keyboard.createCursorKeys();

     // make the camera follow the player
     this.cameras.main.startFollow(this.player);

     var level2Down=this.input.keyboard.addKey(50);
    
    level2Down.on('down',function(){
        console.log("50 pressed,jump to level 2");
        this.scene.start("level2")
     },this);

     // this.cameras.main.startFollow(this.player);


    } // end of create //

    update () {

         //In update()  
  if (
this.player.x > 609 && this.player.y > 441 && this.player.y < 485 
  ) {
    console.log("Door1");
    this.room1();
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
  room1(player, tile) {
    console.log("room1 function");
    this.scene.start("page2",);
  }
}