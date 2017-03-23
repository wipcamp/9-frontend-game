/*
* ###### ### ##   ##     #######    ####    ######  #         # ######  #       ######    ######    ######  ######
*    #    #  # # # #     #     #    #   #   #        #       #  #       #      #      #   #     #   #       #     #
*    #       #  #  #     #     #    #    #  ######    #     #   ######  #      #      #   #     #   ######  ######
*    #       #     #     #######    #    #  #          #   #    #       #      #      #   ######    #       ### 
*    #       #     #           #    #   #   #           # #     #       #      #      #   #         #       #  #
* ######     #     #     #######    ###     ######       #      ######  ######  ######    #         ######  #    #
*/
console.log('%c9 I\'m Developer.', 'background: #222; color: #f3603f; font-size: 26px; font-style: italic; font-weight:700');
console.log('If you interest our code 🙂 Join WIP Camp #9.');
console.log('%c## Powered by Alchemist ##','font-style: italic');

(function(){
    
// Firebase config
var config = {
    apiKey: "AIzaSyAhBOG3nZFT0xjOu5UPm1k-ZVot1IPEfoQ",
    authDomain: "wip-camps-game.firebaseapp.com",
    databaseURL: "https://wip-camps-game.firebaseio.com",
    storageBucket: "wip-camps-game.appspot.com",
    messagingSenderId: "768785136426"
};
firebase.initializeApp(config);
// end Firebase config

// State Management
var game = new Phaser.Game(980, 550, Phaser.AUTO, "game");

var login = {preload : preload , create : createLogin ,update : updateLogin};

var menu = { preload : preload , create : createMenu};
var howToPlay = { preload : preload ,create : createHowToPlay ,update : updateHowToPlay};
var credit = {preload : preload , create : createCredit};
var report = {preload : preload , create : createReport ,update : updateReport};

var gameplay = { preload : preload , create : createGameplay , update : updateGameplay};

var resultGame = {preload : preload , create : createResult};

game.state.add('report',report);
game.state.add('login',login);
game.state.add('menu', menu);
game.state.add('howToPlay',howToPlay);
game.state.add('credit',credit);

game.state.add('gameplay', gameplay);

game.state.add('result',resultGame);

game.state.start('login');
//end State Management

// Preload function : [login,menu,gameplay,howToPlay,result,credit]

function preload() {
	game.load.spritesheet('enemyShip','9-gamepr/images/enemyship.png',600,400);
    game.load.spritesheet('boom','9-gamepr/images/boom.png',80,90);
    game.load.spritesheet('boomGroup','9-gamepr/images/boom-group.png',160,200);
    game.load.spritesheet('menu','9-gamepr/images/mainmenu.png',2584/2,196);
    game.load.spritesheet('warnning','9-gamepr/images/warnning.png',100,100);
    game.load.spritesheet('playership', '9-gamepr/images/playership.png',600,500);
	game.load.spritesheet('left','9-gamepr/images/left.png',283,275);
	game.load.spritesheet('right','9-gamepr/images/right.png',283,275);
	game.load.spritesheet('report','9-gamepr/images/report.png',2584/2,196);
	game.load.spritesheet('scoreboard','9-gamepr/images/score.png',2584/2,196);
	game.load.spritesheet('spacebar','9-gamepr/images/spacebar.png',2584/2,196);
	game.load.spritesheet('enter','9-gamepr/images/enter.png',851.33,196);
    game.load.spritesheet('submit','9-gamepr/images/submit.png',2584/2,196);
    game.load.spritesheet('startButton','9-gamepr/images/start.png',2584/2,196);
    game.load.spritesheet('howToPlayButton','9-gamepr/images/howtoplay.png',2584/2,196);
	game.load.spritesheet('creditButton','9-gamepr/images/credit.png',2584/2,196);
    game.load.spritesheet('playagain','9-gamepr/images/playagain.png',2584/2,196);
	game.load.spritesheet('kraken','9-gamepr/images/boss.png',1191,842);//1191 842
	game.load.spritesheet('shark','9-gamepr/images/shark.png',1000,700);
    game.load.spritesheet('mute','9-gamepr/images/mute.png',450,447);
    game.load.spritesheet('fullscreen','9-gamepr/images/fullscreen.png',283,275);

    game.load.image('cloud','9-gamepr/images/cloud.png');
	game.load.image('moon','9-gamepr/images/moon.png');
    game.load.image('openWord','9-gamepr/images/openWord.png');
	game.load.image('wippo','9-gamepr/images/wippo.png');
	game.load.image('sky','9-gamepr/images/sky.png');
	game.load.image('water_bot','9-gamepr/images/water_bot.png');
	game.load.image('water_mid','9-gamepr/images/water_mid.png');
	game.load.image('water_top','9-gamepr/images/water_top.png');
	game.load.image('oldMap','9-gamepr/images/oldMap.png');
	game.load.image('logoWip','9-gamepr/images/wip.png');
	game.load.image('bgLogin','9-gamepr/images/login.png');
	game.load.image('gameOver','9-gamepr/images/GAME-OVER-01.png');
	game.load.image('logoGame','9-gamepr/images/escape-01.png');
	game.load.image('bgHowToPlay','9-gamepr/images/bghowtoplay.png');
    game.load.image('bgEnd','9-gamepr/images/endState.png');
    game.load.image('bgStart','9-gamepr/images/bg-Start.png');
    game.load.image('map','9-gamepr/images/map.png');
    game.load.image('ropeResult','9-gamepr/images/rope-02.png');
	game.load.image('ropeMenu','9-gamepr/images/rope-01.png');
    game.load.image('cannonball','9-gamepr/images/cannonball.png');
    game.load.image('obj','9-gamepr/images/object.png');
    game.load.image('bottom','9-gamepr/images/bottom.png');
    game.load.image('textHowToPlay1','9-gamepr/images/textHowToPlay1.png');
    game.load.image('textHowToPlay2','9-gamepr/images/textHowToPlay2.png');

    game.load.audio('Play','9-gamepr/sound/Escape.mp3');
    game.load.audio('Kraken','9-gamepr/sound/Kraken.mp3');
    game.load.audio('Death','9-gamepr/sound/Death.mp3');
    game.load.audio('buttonPush','9-gamepr/sound/Paddling.mp3');
    game.load.audio('Login','9-gamepr/sound/Login.mp3');
    game.load.audio('Shark','9-gamepr/sound/Shark.mp3');
    game.load.audio('BombDrop','9-gamepr/sound/BombDrop.mp3');
    game.load.audio('dKraken','9-gamepr/sound/DeathbyKraken.mp3');
    game.load.audio('dBomb','9-gamepr/sound/DeathbyBombDrop.mp3');
    game.load.audio('Warn','9-gamepr/sound/Warn.mp3');
    game.load.audio('BombAway','9-gamepr/sound/BombAway.mp3');
    game.load.audio('button','9-gamepr/sound/pushIt.mp3');

	game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

}

// end Preload function

// Declare Global variable
var textMute;
var isSound;
var name = "พี่ Wippo";
var map;
var player;
var playership;
var ck;
var textScore;
var score;
var boomGroup;
var timer;
var cannonTimer;
var time;
var warnning;
var maxSpeed;
var cannonball;
var cannonGroup;
var floor;
var jump;
var bomb;
var bombGroup;
var bombTimer;
var moon;
var shark;
var sharkGroup;
var sharkTimer;
var cannonTime;
var bombTime;
var sharkTime;
var bottomship;
var playershipJump;
var buttonPush;
var death;
var water_top,water_mid,water_bot;
var warnSound;
var krakenSound;
var enemy;
var enemyAnimations;
var buttonStart;
var buttonHowTOPlay;
var buttonCredit;
var buttonScore;
var buttonReport;
var buttonFullSc;
var menuButton;
var music;
var bg;
var logoGame;
var ropeMenu;
var left;
var right;
var spacebar;
var playershipEx;
var animJumpSpacebar;
var oldMap;
var checkMove;
var textName;
var wippo;
var message;
var random;
var textHowToPlay1;
var textHowToPlay2;
var cloud1,cloud2,cloud3;
var isFirstSubmit;
var ckReport;
// end Declare Global variable

// CreateGameplay function
function createGameplay() {
    game.world.setBounds(0, 0, 2440, 550);
    music.stop();
    music = game.add.audio('Play');
    music.loopFull();
    score=0;
    ck=0;
    time=0;
    bombTimer=0;
    maxSpeed=50;
    cannonTimer = 0;
    bombTimer = 0;
    sharkTimer = 0;
    cannonTime = 40*60;
    bombTime = 10*60;
    sharkTime = 25*60;
    floor = game.add.sprite(0,game.world.height*(3.75/4),'obj');
    floor.scale.setTo(23.6,0.5);
    game.physics.arcade.enable(floor);
    floor.body.immovable = true;
    player = this.add.sprite((game.world.width/2),(game.world.height*(2/4))+24,'obj');
    player.anchor.set(0.5);
    player.scale.setTo(0.95, 0.20);
    game.physics.arcade.enable(player);
    player.body.setCircle(40,10,-5);
    map = game.add.tileSprite(0, 0, 1960+480, 550, 'sky');

    cloud1 = game.add.sprite(800+480,550/4-75,'cloud');
    cloud1.scale.setTo(0.7,0.7);
    game.physics.arcade.enable(cloud1);
    cloud1.body.velocity.x=-50;
    cloud1.body.maxVelocity.set(200);

    cloud2 = game.add.sprite(1620+540,550/4-75,'cloud');
    cloud2.scale.setTo(0.7,0.55);
    game.physics.arcade.enable(cloud2);
    cloud2.body.velocity.x=-50;

    moon = game.add.image(1500+480,550/4-50,'moon');
    moon.anchor.set(0.5);
    moon.scale.setTo(0.5,0.5);

    cloud3 = game.add.sprite(1400+480,550/4-50,'cloud');
    cloud3.scale.setTo(0.6,0.45);
    game.physics.arcade.enable(cloud3);
    cloud3.body.velocity.x=-50;

    enemy = game.add.image(game.world.width/2,550/2-50,'enemyShip');
    enemy.frame = 0;
    enemyAnimations = enemy.animations.add('play',[0,1,2,3,0],5,true);
    water_top = game.add.tileSprite(0,550/2+50,1960+480,550,'water_top');
    water_mid = game.add.tileSprite(0,550/2+125,1960+480,550,'water_mid');
    kraken = game.add.image(980/4+420,game.world.height*(2.75/4)+50,'kraken');
    kraken.anchor.set(0.5);
    kraken.animations.add('move',[0,1,2],3,true);
    kraken.animations.play('move');
    kraken.scale.setTo(0.75,0.75);
    water_bot = game.add.tileSprite(0,550/2+200,1960+480,550,'water_bot');
    warnning = game.add.sprite(20,game.world.height*(3.5/6),'warnning');
    warnning.frame = 0;
    //warnning.anchor.set(0.5);
    //warnning.scale.setTo(0.25,0.25);
    warnning.animations.add('play',[0,1],4,true);
    warnning.fixedToCamera = true;

    boomGroup=game.add.image(game.world.width*(7/8)+180,game.world.height*(4.5/6),'boomGroup');
    boomGroup.scale.setTo(0.6, 0.6);
    boomGroup.animations.add('move', [0,1,2,3,4,5], 10, true);
    boomGroup.frame = 0;

    enemy.anchor.setTo(0.5);
    playership = this.add.sprite(game.world.width/2,game.world.height*(2/4), 'playership');
    playershipJump = playership.animations.add('jump',[2,1,0],3,true);
    playershipJump.onComplete.add(startAnimationMove, this);
    playership.frame = 4;
    playership.animations.add('jump',[2,1,0],3,true);
    playership.animations.add('move',[8,7,6,5,4,3],24,true);
    playership.animations.play('move');
    playership.anchor.set(0.5);
    playership.scale.setTo(0.25, 0.25);
    game.physics.arcade.enable(playership);
    playership.body.gravity.y = 980;
    playership.body.maxVelocity.set(500);
    playership.body.collideWorldBounds = true;
    textScore = game.add.text(20,20,"Score : "+score,{fontSize : "30px",fill : "#FFFFFF"});
    textScore.stroke = "#BAB8B8";
    textScore.strokeThickness = 3;
    textScore.fixedToCamera = true;
	text = game.add.text(20,60,"HighScore : "+getHighScore(),{fontSize : "24px",fill : "#FFFFFF"});
    text.stroke = "#BAB8B8";
    text.strokeThickness = 2;
    text.fixedToCamera = true;

    cursors = this.input.keyboard.createCursorKeys();
    jump = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    game.camera.follow(playership);
    //game.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400);
    cannonGroup = game.add.group();
    cannonGroup.enableBody = true;
    cannonGroup.physicsBodyType = Phaser.Physics.ARCADE;
    cannonball = cannonGroup.create(0,0,'cannonball');
    cannonball.scale.setTo(0.4,0.4);
    cannonball.exists = false;
    cannonball.visible = false;
    cannonball.checkWorldBounds = true;
    cannonball.events.onOutOfBounds.add(resetBullet, this);
    cannonball.body.setCircle(15,0,-10);
    bombGroup = game.add.group();
    bombGroup.enableBody = true;
    bombGroup.physicsBodyType = Phaser.Physics.ARCADE;
    for(var i = 0;i<16;i++){
        bomb = bombGroup.create(0,0,'boom');
        bomb.scale.setTo(0.7, 0.7);
        bomb.exists = false;
        bomb.visible = false;
        bomb.checkWorldBounds = true;
        bomb.events.onOutOfBounds.add(resetBullet, this);
        bomb.body.setCircle(45);
    }
    bombGroup.callAll('animations.add', 'animations', 'move', [0,1,2,3,4], 10, true);
    sharkGroup = game.add.group();
    sharkGroup.enableBody = true;
    sharkGroup.physicsBodyType = Phaser.Physics.ARCADE;
    for(var i = 0;i<16;i++){
        shark = sharkGroup.create(0,0,'shark');
        shark.exists = false;
        shark.visible = false;
        shark.checkWorldBounds = true;
        shark.body.bounce.y = 1;
        shark.scale.setTo(0.1, 0.1);
        shark.anchor.set(0.5);
        shark.body.setCircle(25);
        shark.body.collideWorldBounds = true;
    }
    sharkGroup.callAll('animations.add', 'animations', 'move', [2,2,2,2,2,2,3,0,0,0,0,1,1,1],5.3, true);
    bottomship = game.add.image(1861+480,0,'bottom');
    warnSound = game.add.audio('Warn');
    krakenSound = game.add.audio('Kraken');
    sharkSound = game.add.audio('Shark');
    bombAwaySound = game.add.audio('BombAway');
    bombDropSound = game.add.audio('BombDrop');
    textMute= game.add.button(900,20,'mute',function () {
        isSound=!isSound;
        if(!isSound){
            game.sound.mute = true;
            textMute.frame = 1;
        }
        else{
            textMute.frame = 0;
            game.sound.mute = false;
        }
    });
    textMute.scale.setTo(0.1,0.1);
    textMute.fixedToCamera = true;
    if(isSound)
        textMute.frame = 0;
    else
        textMute.frame = 1;
    //fullScreen button
    buttonFullSc = game.add.button(850, 40, 'fullscreen', changeScreenMode, this);
    buttonFullSc.scale.setTo(0.15, 0.15);
    buttonFullSc.fixedToCamera = true;
    buttonFullSc.anchor.set(0.5);
    if (game.scale.isFullScreen){
        buttonFullSc.frame = 1;
    }
    else{
        buttonFullSc.frame = 0;
    }
}

//end createGameplay function

// updateGameplay function
function updateGameplay() {
    if(isSound){
        game.sound.mute = false;
    }
    else{
        game.sound.mute = true;
    }
    game.world.wrap(cloud1, 0);
    game.world.wrap(cloud2, 0);
    game.world.wrap(cloud3, 0);
    map.tilePosition.x -= 1;
    water_top.tilePosition.x -= 1;
    water_mid.tilePosition.x -= 2;
    water_bot.tilePosition.x -= 3;
    player.x=playership.x-5;
    player.y=playership.y;
    game.physics.arcade.overlap(player,cannonGroup, cannonHitPlayer, null , this);
    game.physics.arcade.overlap(player,bombGroup, bombHitPlayer, null , this);
    game.physics.arcade.collide(playership,floor);
    game.physics.arcade.overlap(player,sharkGroup, sharkHitPlayer, null , this);

    boomGroup.animations.play('move');

    if(bombTime<=0){
        bombSpawn();
    }
    if(cannonTime<=0){
        shootThem();
    }
    if(sharkTime<=0){
        sharkSpawn();
    }
    cannonTime--;
    bombTime--;
    sharkTime--;
    if(time%720==480)
        warnning.animations.play('play');   
    if(time%720==0){
        warnning.animations.stop('play');
        warnning.frame = 0;
    }
    if(time%720>=480&&time%720<600){
        if(!warnSound.isPlaying) {
            warnSound.play();
        }
    }
    if(time%720<=600){
    	playership.body.velocity.x -= 0.5;
     }
    else{
    	playership.body.velocity.x -= 1.5;
        {
            if(!krakenSound.isPlaying) {
                krakenSound.play();
                if(warnSound.isPlaying){
                    warnSound.stop();
                }
                if(krakenSound.isPlaying)
                        music.volume = 0.2;
            }else{
                sharkSound.volume = 0.6;
                bombAwaySound.volume = 0.6;
                bombDropSound.volume = 0.6;
                buttonPush.volume = 0.6;

            }
        }

    }
    time++;
    if(playership.body.velocity.x<=maxSpeed){
        if(cursors.right.isDown){
            ck=1;
            buttonPush=  game.add.audio('buttonPush');
        }
        if(ck==1){
        	if(cursors.left.isDown&&(!cursors.right.isDown)){
                ck=2;
                    buttonPush.play();
                sharkSound.volume = 1;
                bombAwaySound.volume = 1;
                bombDropSound.volume = 1;
                buttonPush.volume = 1;
                music.volume = 1;
        	}
        }
        if(ck==2){
            ck=0;
            score+=5;
            playership.body.velocity.x +=20;
        }
    }

    if(playership.x<250+550){
        game.state.start('result');
        allSoundStopFx();
        death = game.add.audio('dKraken');
        if (isSound) 
            death.play();
    }

    if(playership.x>game.world.width*(6.75/7)-50){
        game.state.start('result');
    }

    if (jump.isDown && playership.body.touching.down) {
        playership.body.velocity.y = -500;
        playershipJump.play(3,false);
    }
    textScore.text = "Score : "+score;
}

//end updateGameplay function

//Support function GameplayState
function resetBullet(bullet) {
    bullet.kill();
}
function cannonHitPlayer() {
   allSoundStopFx();
    death = game.add.audio('dBomb');
        death.play();
    game.state.start('result');
}
function bombHitPlayer() {
    allSoundStopFx();
    death = game.add.audio('dBomb');
    
        death.play();

    game.state.start('result');
}
function sharkHitPlayer() {
    allSoundStopFx();
    death = game.add.audio('dKraken');
        death.play();
    game.state.start('result');

}
function bombSpawn() {
    if(bombTimer<game.time.now){
        var output = game.rnd.integerInRange(0,20);
        
            if(!bombAwaySound.isPlaying){
                bombAwaySound.play();
        }
        if(output == 0){
            bombTimer = game.time.now + 5000;
            bomby = bombGroup.getFirstExists(false);
            bomby.reset(1900+480, game.world.height*(3.75/4)-50);
            bomby.body.velocity.x = -200;
            bombGroup.callAll('animations.play', 'animations', 'move');
        }
    }
}
function sharkSpawn() {
    if(sharkTimer<game.time.now){
        var output = game.rnd.integerInRange(0,20);
        
            sharkSound.play();
            if(!sharkSound.isPlaying){
                sharkSound.play();
            }
        
        if(output == 0){
            sharkTimer = game.time.now + 8000;
            bomby = sharkGroup.getFirstExists(false);
            bomby.reset(1850+480, game.world.height*(1/6));
            bomby.body.gravity.y = 500;
            bomby.body.velocity.x = -200;
            game.time.events.add(9250, sharkKill, this, bomby);
            //sharkGroup.callAll('animations.play', 'animations', 'move');
            bomby.animations.play('move');
        }
    }
    //sharkTimer

}
function sharkKill(bomby) {
    bomby.animations.stop();
    bomby.kill();
}

function shootThem() {
    if(cannonTimer<game.time.now){
        var output = game.rnd.integerInRange(0,20);
        {
            bombDropSound.play();
            if(bombDropSound.isPlaying){
                bombDropSound.restart();
            }
        }
        if(output == 0){
            enemyAnimations.play(5,false);
            cannonTimer = game.time.now + 12000;
            var range = game.rnd.integerInRange(-200, 200);
            bullet = cannonGroup.getFirstExists(false);
            bullet.reset(playership.x+range, 0);
            bullet.body.velocity.y = 100;
        }
    }
}
// end support function GameplayState

// createMenu function
function createMenu(){ // menu page
    bg = game.add.image(0,0,'bgStart');
    music.stop();
    music = game.add.audio('Login');
    music.loopFull();
    ropeMenu = game.add.image(980*(2/10),550*(2/10),'ropeMenu');
    ropeMenu.anchor.set(0.5);
    ropeMenu.scale.setTo(0.25,0.45);
    logoGame = game.add.image(980*(2/10),550*(2/10)+20,'logoGame');
    logoGame.anchor.set(0.5);
    logoGame.scale.setTo(0.25,0.25);
    buttonCredit = game.add.button(980*(2/10), 550*(6/10)+20, 'creditButton', toCredit, this,1,0,2);
    buttonStart = game.add.button(980*(2/10), 550*(4/10)+20, 'startButton', toGame, this,1,0,2);
    buttonCredit.anchor.set(0.5);
    buttonStart.anchor.set(0.5);
    buttonStart.scale.setTo(0.25, 0.25);
    buttonCredit.scale.setTo(0.25, 0.25);
    buttonHowTOPlay = game.add.button(980*(2/10),550*(5/10)+20 , 'howToPlayButton', toHowToPlay, this,1,0,2);
    buttonHowTOPlay.anchor.set(0.5);
    buttonHowTOPlay.scale.setTo(0.25,0.25);
    buttonScore = game.add.button(980*(2/10),550*(8/10)+20, 'scoreboard', toScore, this,1,0,2);
    buttonScore.anchor.set(0.5);
    buttonScore.scale.setTo(0.25,0.25);
    buttonReport = game.add.button(980*(2/10),550*(7/10)+20 , 'report', toReport, this,1,0,2);
    buttonReport.anchor.set(0.5);
    buttonReport.scale.setTo(0.25,0.25);
    textMute= game.add.button(900,20,'mute',function () {
        isSound=!isSound;
        if(!isSound){
            game.sound.mute = true;
            textMute.frame = 1;
        }
        else{
            textMute.frame = 0;
            game.sound.mute = false;
        }
    });
    textMute.scale.setTo(0.1,0.1);
    if(isSound)
        textMute.frame = 0;
    else
        textMute.frame = 1;
    //fullScreen button
    buttonFullSc = game.add.button(850, 40, 'fullscreen', changeScreenMode, this);
    buttonFullSc.scale.setTo(0.15, 0.15);
    buttonFullSc.fixedToCamera = true;
    buttonFullSc.anchor.set(0.5);
    if (game.scale.isFullScreen){
        buttonFullSc.frame = 1;
    }
    else{
        buttonFullSc.frame = 0;
    }
}
// end createMenu function

// createHowToPlay function
function createHowToPlay(){ //how to play
    checkMove = 0;
	floor = game.add.sprite(0,game.world.height/2+75,'obj');
    floor.scale.setTo(9.8,0.5);
    game.physics.arcade.enable(floor);
    floor.body.immovable = true;
	game.add.image(0,0,'bgHowToPlay');
	oldMap = game.add.image(980/2,550/2,'oldMap');
	oldMap.anchor.set(0.5);
	oldMap.scale.setTo(0.22,0.22);
	textHowToPlay1 = game.add.image(980/8+19.4,550/4+5,'textHowToPlay1');
	textHowToPlay2 = game.add.image(980*(5/8)-29.4+25,550/4+5,'textHowToPlay2');
	logoGame = game.add.image(980/2,550*(1/4)-55,'howToPlayButton');
	logoGame.anchor.set(0.5);
	logoGame.scale.setTo(0.3,0.3);
	left = game.add.sprite(980*(3/4)-35-29.4,550*(3/4)-15,'left');
	left.frame = 0;
	left.animations.add('do',[0,1],4,true);
	left.anchor.set(0.5);
	left.scale.setTo(0.18,0.18);
	right = game.add.image(980*(3.5/4)-85-29.4,550*(3/4)-15,'right');
	right.anchor.set(0.5);
	right.scale.setTo(0.18,0.18);
	right.frame = 0;
	right.animations.add('do',[1,0],4,true);
	spacebar = game.add.image(980*(1/4)+29.4,550*(3/4)-15,'spacebar');
	spacebar.frame = 0;
	animJumpSpacebar = spacebar.animations.add('jump',[1,0],2,true);
	animJumpSpacebar.onComplete.add(startAnimationMove, this);
	spacebar.anchor.set(0.5);
	spacebar.scale.setTo(0.2,0.25);
	menuButton = game.add.button(980*(1/4)+29.4, 550*(3.75/4)-35, 'menu', tomenu, this,1,0,2);
	menuButton.anchor.setTo(0.5);
	menuButton.scale.setTo(0.25,0.25);
    buttonStart = game.add.button(980*(3/4)-29.4, 550*(3.75/4)-35, 'startButton', toGame, this,1,0,2);
    buttonStart.anchor.set(0.5);
    buttonStart.scale.setTo(0.25,0.25);
    playership = game.add.sprite(980*(1/4)+29.4,550/2-150,'playership');
    playership.anchor.set(0.5);
    playership.scale.setTo(0.25,0.25);
    playership.frame = 5;
    playership.animations.add('move',[8,7,6,5,4,3],24,true);
    playershipJump = playership.animations.add('jump',[2,1,0],3,true);
    playershipJump.onComplete.add(startAnimationMove, this);
    game.physics.arcade.enable(playership);
    playership.body.gravity.y = 980;
    playership.body.maxVelocity.set(500);
    playership.body.collideWorldBounds = true;
    playership.animations.play('move');
    game.time.events.loop(3000, Jump, this);

    playershipEx = game.add.sprite(980*(3/4)-115-29.4,550/2-150,'playership');
    playershipEx.anchor.set(0.5);
    playershipEx.scale.setTo(0.25,0.25);
    playershipEx.frame = 5;
    playershipEx.animations.add('move',[8,7,6,5,4,3],24,true);
    playershipEx.animations.play('move');
    game.physics.arcade.enable(playershipEx);
    playershipEx.body.gravity.y = 980;
    playershipEx.body.maxVelocity.set(500);
    playershipEx.body.collideWorldBounds = true;
    game.time.events.loop(3000, shipMove, this);
    textMute= game.add.button(900,20,'mute',function () {
        isSound=!isSound;
        if(!isSound){
            game.sound.mute = true;
            textMute.frame = 1;
        }
        else{
            textMute.frame = 0;
            game.sound.mute = false;
        }
    });
    textMute.scale.setTo(0.1,0.1);
    if(isSound)
        textMute.frame = 0;
    else
        textMute.frame = 1;
    //fullScreen button
    buttonFullSc = game.add.button(850, 40, 'fullscreen', changeScreenMode, this);
    buttonFullSc.scale.setTo(0.15, 0.15);
    buttonFullSc.fixedToCamera = true;
    buttonFullSc.anchor.set(0.5);
    if (game.scale.isFullScreen){
        buttonFullSc.frame = 1;
    }
    else{
        buttonFullSc.frame = 0;
    }
}
// end createHowtoPlay function

// updateHowtoPlay function
function updateHowToPlay() {
	game.physics.arcade.collide(playership,floor);
	game.physics.arcade.collide(playershipEx,floor);
}
//end updateHowtoPlay function

//Support function howtoplay state
function Jump() {
	playership.body.velocity.y = -500;
	playershipJump.play(3,false);
	animJumpSpacebar.play(2,false);
}
function shipMove() {
	if(checkMove%2==0){
		left.animations.play('do');
		right.animations.play('do');
		playershipEx.body.velocity.x = 70;
	}
	else{
		left.animations.stop('do');
		right.animations.stop('do');
		left.frame = 0;
		right.frame = 0;
		playershipEx.body.velocity.x = -70;
	}
	checkMove++;
}
// end support function howtoplay state

// createResult function
function createResult(){ //result
    allSoundStopFx();
    game.add.image(0,0,'bgEnd');
    music.stop();
    music = game.add.audio('Death');
    music.loopFull();
    ropeResult = game.add.image(980/2,550*(2/10),'ropeResult');
    ropeResult.anchor.set(0.5);
    ropeResult.scale.setTo(0.2,0.35);
    logoGame = game.add.image(980/2,game.world.centerY-125,'gameOver');
    logoGame.anchor.set(0.5);
    logoGame.scale.setTo(0.25,0.25);
    textName = game.add.text(980/2+130,550*(1/4)+25,name,{font : "48px Thaisans Neue for Web",fill : "#5B3B00"});
    textName.anchor.set(0.5);
    textName.stroke = "#221702";
    textName.strokeThickness = 3;
    text = game.add.text(980/2+80+45,550*(1/4)+100,"Score : "+score,{font : "48px Thaisans Neue for Web",fill : "#5B3B00"});
    text.anchor.set(0.5);
    text.stroke = "#221702";
    text.strokeThickness = 3;
    buttonStart = game.add.button(980/2, game.world.centerY+25+50-20, 'playagain', toGame, this,1,0,2);
    buttonStart.anchor.set(0.5);
    buttonStart.scale.setTo(0.3,0.3);
    menuButton = game.add.button(980/2, 550/2+115+125-55, 'menu', tomenu, this,1,0,2);
    menuButton.anchor.set(0.5);
    menuButton.scale.setTo(0.3,0.3);
    buttonScore = game.add.button(980/2,game.world.centerY+115+25-20, 'scoreboard', toScore, this,1,0,2);
    buttonScore.anchor.set(0.5);
    buttonScore.scale.setTo(0.3,0.3);
    setScore();
    textMute= game.add.button(900,20,'mute',function () {
        isSound=!isSound;
        if(!isSound){
            game.sound.mute = true;
            textMute.frame = 1;
        }
        else{
            textMute.frame = 0;
            game.sound.mute = false;
        }
    });
    textMute.scale.setTo(0.1,0.1);
    if(isSound)
        textMute.frame = 0;
    else
        textMute.frame = 1;
    //fullScreen button
    buttonFullSc = game.add.button(850, 40, 'fullscreen', changeScreenMode, this);
    buttonFullSc.scale.setTo(0.15, 0.15);
    buttonFullSc.fixedToCamera = true;
    buttonFullSc.anchor.set(0.5);
    if (game.scale.isFullScreen){
        buttonFullSc.frame = 1;
    }
    else{
        buttonFullSc.frame = 0;
    }
}
// end createResult function

// createReport function
function createReport() {
    ckReport = false;
	game.add.image(0,0,'bgHowToPlay');
	oldMap = game.add.image(980/2,550/2,'oldMap');
	oldMap.anchor.set(0.5);
	oldMap.scale.setTo(0.22,0.22);
	logoGame = game.add.image(980/2,550*(1/4)-65,'report');
	logoGame.anchor.set(0.5);
	logoGame.scale.setTo(0.3,0.3);
	game.add.plugin(PhaserInput.Plugin);
    input = game.add.inputField(980*0.5/4, 550/4, {
        font: '22px Thaisans Neue for Web',
        fill: '#212121',
        fontWeight: 'normal',
        width: 735,
        height: 250,
        borderColor: '#000',
        textAlign: 'left',
        padding : 10,
        max : 300,
        placeHolder : 'แจ้งข้อผิดพลาดได้ที่นี่เลยนะ :)'
    });
    input.startFocus();
    buttonSubmit = game.add.button(980*(3/4)-29.4, 550*(3.75/4)-35, 'submit', sendReport, this,1,0,2);
    buttonSubmit.anchor.set(0.5);
    buttonSubmit.scale.setTo(0.25,0.25);
    menuButton = game.add.button(980*(1/4)+29.4, 550*(3.75/4)-35, 'menu', tomenu, this,1,0,2);
  	menuButton.anchor.setTo(0.5);
  	menuButton.scale.setTo(0.25,0.25);
    textMute= game.add.button(900,20,'mute',function () {
        isSound=!isSound;
        if(!isSound){
            game.sound.mute = true;
            textMute.frame = 1;
        }
        else{
            textMute.frame = 0;
            game.sound.mute = false;
        }
    });
    textMute.scale.setTo(0.1,0.1);
    if(isSound)
        textMute.frame = 0;
    else
        textMute.frame = 1;
  //sendReportMessage
  //fullScreen button
    buttonFullSc = game.add.button(850, 40, 'fullscreen', changeScreenMode, this);
    buttonFullSc.scale.setTo(0.15, 0.15);
    buttonFullSc.fixedToCamera = true;
    buttonFullSc.anchor.set(0.5);
    if (game.scale.isFullScreen){
        buttonFullSc.frame = 1;
    }
    else{
        buttonFullSc.frame = 0;
    }
}
//end createReport function

// updateReport function
function updateReport() {
    if(ckReport)
        debugReport();
    window.input = input;
}
// end updateReport function

var inputDebug;
//support function  reportstate
function sendReport(){
    if(input.value!=""){
        isFirstSubmit = false;
        ckReport = true;
        buttonSound();
        sendReportMessage(input.value);
        input.value = null;
        input.destroy();
        text = game.add.text(980/2,550*(3.75/4)-80,"แจ้งข่าวกัปตันเรียบร้อยแล้ว",{font : "36px Thaisans Neue for Web",fill : "#5B3B00"});
        text.anchor.set(0.5);
    }
}

function debugReport(){
    if(input.value!=""){
        isFirstSubmit = false;
        ckReport = false;
        buttonSound();
        sendReportMessage(input.value);
        input.value = null;
        input = game.add.inputField(980*0.5/4, 550/4, {
            font: '22px Thaisans Neue for Web',
            fill: '#212121',
            fontWeight: 'normal',
            width: 735,
            height: 250,
            borderColor: '#000',
            textAlign: 'left',
            padding : 10,
            max : 300,
            placeHolder : 'แจ้งข้อผิดพลาดได้ที่นี่เลยนะ :)'
        });
        input.startFocus();
        text = game.add.text(980/2,550*(3.75/4)-80,"แจ้งข่าวกัปตันเรียบร้อยแล้ว",{font : "36px Thaisans Neue for Web",fill : "#5B3B00"});
        text.anchor.set(0.5);
    }
}
//end function reportstate

// createLogin function
function createLogin() { //login
	isSound = true;

    random = 0;
	game.add.image(0,0,'bgLogin');
    logoGame = game.add.image(980/2,550/4,'logoWip');
    logoGame.anchor.setTo(0.5);
    music = game.add.audio('Login');
    music.loopFull();
    text = game.add.image(980/2+15,550*(1/4)+125,'openWord');
    text.anchor.set(0.5);
    text.scale.setTo(1.5,1.5);
    
    game.add.plugin(PhaserInput.Plugin);
    input = game.add.inputField(980/2-150, game.world.centerY-12.5+50, {
        font: '22px Thaisans Neue for Web',
        fill: '#212121',
        fontWeight: 'normal',
        width: 300,
        height: 25,
        borderColor: '#000',
        borderRadius : 10,
        textAlign: 'center',
        padding : 10,
        max : 15,
        placeHolder : 'ใส่ชื่อของเจ้าที่นี่'
    });

    menuButton = game.add.button(980/2+10, game.world.centerY+100+50, 'enter', toMenu, this,1,0,2);
    menuButton.anchor.set(0.5);
    menuButton.scale.setTo(0.25,0.25);
    message = game.add.text(980/2+5,game.world.centerY+100+125,"",{font : "48px Thaisans Neue for Web",fill : "#FFFFFF"});
    message.anchor.set(0.5);
    textMute= game.add.button(900,20,'mute',function () {
        isSound=!isSound;
        if(!isSound){
            game.sound.mute = true;
            textMute.frame = 1;
        }
        else{
            textMute.frame = 0;
            game.sound.mute = false;
        }
    });
    textMute.scale.setTo(0.1,0.1);
    if(isSound)
        textMute.frame = 0;
    else
        textMute.frame = 1;
    //fullScreen button
    buttonFullSc = game.add.button(850, 40, 'fullscreen', changeScreenMode, this);
    buttonFullSc.scale.setTo(0.15, 0.15);
    buttonFullSc.fixedToCamera = true;
    buttonFullSc.anchor.set(0.5);
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    if (game.scale.isFullScreen){
        buttonFullSc.frame = 1;
    }
    else{
        buttonFullSc.frame = 0;
    }
}
//end createLogin function

// updateLogin function
function updateLogin() {
	if (this.input.keyboard.addKey(Phaser.KeyCode.ENTER).isDown){
    	toMenu();
    }
}
//end updateLogin function

// createCredit function
function createCredit() { //credit
	game.add.image(0,0,'bgHowToPlay');
	oldMap = game.add.image(980/2,550/2,'oldMap');
	oldMap.anchor.set(0.5);
	oldMap.scale.setTo(0.22,0.22);
	logoGame = game.add.image(980/2,550*(1/4)-65,'creditButton');
	logoGame.anchor.set(0.5);
	logoGame.scale.setTo(0.3,0.3);
	wippo = game.add.image(980/2+150,550/2-55,'wippo');
	wippo.anchor.set(0.5);
	game.add.text(980*(0.5/4),550*(1/4)-25+10,"Audio Library – No Copyright Music",{fontSize : "20px",fill : "#5B3B00"});
	game.add.text(980*(0.5/4),550*(1/4)+5+10,"URL : goo.gl/yReazM",{fontSize : "14px",fill : "#5B3B00"});
	game.add.text(980*(0.5/4),550*(1/4)+35+10,"Ross Bugden - Music",{fontSize : "20px",fill : "#5B3B00"});
	game.add.text(980*(0.5/4),550*(1/4)+65+10,"URL : goo.gl/NDMy6w",{fontSize : "14px",fill : "#5B3B00"});
	game.add.text(980*(0.5/4),550*(1/4)+95+10,"Ship sailing on the sea",{fontSize : "20px",fill : "#5B3B00"});
	game.add.text(980*(0.5/4),550*(1/4)+125+10,"URL : goo.gl/1YpYo3",{fontSize : "14px",fill : "#5B3B00"});
	game.add.text(980*(0.5/4),550*(1/4)+155+10,"Beach party wooden sign",{fontSize : "20px",fill : "#5B3B00"});
	game.add.text(980*(0.5/4),550*(1/4)+185+10,"URL : goo.gl/9kzuhy",{fontSize : "14px",fill : "#5B3B00"});
	game.add.text(980*(0.5/4),550*(1/4)+215+10,"Father and son illustration",{fontSize : "20px",fill : "#5B3B00"});
	game.add.text(980*(0.5/4),550*(1/4)+245+10,"URL : goo.gl/js8DkX",{fontSize : "14px",fill : "#5B3B00"});
    buttonStart = game.add.button(980*(1/2),550*(3.75/4)-35,'menu',tomenu,this,1,0,2);
    buttonStart.anchor.set(0.5);
    buttonStart.scale.setTo(0.25,0.25);
    textMute= game.add.button(900,20,'mute',function () {
        isSound=!isSound;
        if(!isSound){
            game.sound.mute = true;
            textMute.frame = 1;
        }
        else{
            textMute.frame = 0;
            game.sound.mute = false;
        }
    });
    textMute.scale.setTo(0.1,0.1);
    if(isSound)
        textMute.frame = 0;
    else
        textMute.frame = 1;
    //fullScreen button
    buttonFullSc = game.add.button(850, 40, 'fullscreen', changeScreenMode, this);
    buttonFullSc.scale.setTo(0.15, 0.15);
    buttonFullSc.fixedToCamera = true;
    buttonFullSc.anchor.set(0.5);
    if (game.scale.isFullScreen){
        buttonFullSc.frame = 1;
    }
    else{
        buttonFullSc.frame = 0;
    }
}//toCredit

// end createCredit function

// Link state function
function toScore() {
    window.open("ranking-etk.html");
}
function toReport() {
	buttonSound();
    isFirstSubmit = true;
    game.state.start('report');
}
function toGame() {
    buttonSound();
    game.state.start('gameplay');
}
function tomenu() {
    game.state.start('menu');
}
function toMenu() {
	if(input.value!=""){
	    buttonSound();
	    game.state.start('menu');
	    name = input.value;
	}
	else{
		if(random==0)
			message.text = "บอกชื่อของเจ้ามาก่อน";
		else if(random==1)
			message.text = "นี่ถามไม่ตอบเรอะ !!";
		else if(random==2)
			message.text = "เจ้าควรตอบคำถามข้านะ";
		else if(random==3)
			message.text = "ยัง ยังอีก";
		else if(random==4)
			message.text = "เจ้าทำให้ข้าหงุดหงิดนะ";
		else if(random == 5)
			message.text = "ข้าไหว้ละ";
		else if(random == 6)
			message.text = "บอกข้าเถอะข้าขอร้อง";
		else if(random == 7)
			message.text = "นร้า นร้า ๆ";
		else if(random == 8)
			message.text = "ถ้าไม่บอกข้าจะงอนแล้วนะ -*-";
		else if(random == 9)
			message.text = "เชอะ! งอนแล้ว";
		else if(random == 10)
			window.close();
		random++;
	}
}
function toHowToPlay() {
    buttonSound();
    game.state.start('howToPlay');
}
function toCredit() {
    buttonSound();
    game.state.start('credit');
}

function toLink() {
    window.open(linkToScore);
}
// end link state function

//support function
function toFullScreen(recommendFullSc){
    if (!game.scale.isFullScreen)
      {
          console.log("windowMode detected ,bring to fullScreen");
          game.scale.startFullScreen(false,false);
      }
    recommendFullSc.destroy();
}
function changeScreenMode(){
    if (game.scale.isFullScreen)
        {
            game.scale.stopFullScreen();
            buttonFullSc.frame = 0;
        }
        else
        {
            game.scale.startFullScreen(false,false);
            buttonFullSc.frame = 1;
        }
}
//end support function

// sound function
function buttonSound(){
    soundFx1 = game.add.audio('button');
    soundFx1.play();
}

function allSoundStopFx(){
    if(sharkSound.isPlaying){
        sharkSound.stop();
    }
    if(bombAwaySound.isPlaying){
        bombAwaySound.stop();
    }
    if(bombDropSound.isPlaying){
        bombDropSound.stop();
    }
    if(krakenSound.isPlaying){
        krakenSound.stop();
    }
    if(warnSound.isPlaying){
        warnSound.stop();
    }
}

//end sound function

// animation function
function startAnimationMove() {
  playership.play('move');
}
//end animation function

// Firebase function
var highscore=0;
var dbEtk = firebase.database().ref().child("etk").child("web");

function getHighScore() {
	var etk = dbEtk.child(name);
    etk.on('value', function(snapshot) {
        highscore = snapshot.val().highscore;
    });
    if (highscore===undefined) {
    	highscore=0.0;
    }
    return highscore;
}

function setScore() {
    var etk = dbEtk.child(name);
    etk.on('value', function(snapshot) {
        highscore = snapshot.val().highscore;
    });

    if(highscore <= score || highscore === undefined){
        dbEtk.child(name).update(
            {
                 "score" : score,
                 "highscore" : score
            }
        );
    }else{
        dbEtk.child(name).update(
             {
                 "score" : score
             }
        );
    }
}

function sendReportMessage(report){
    var rndText = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ ){
        rndText += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    var rnd = game.rnd.integerInRange(0,1000000)+ rndText + (new Date()).getTime();
    var dbEtkReport = firebase.database().ref().child("etk");
    var etk = dbEtkReport.child('report').child(rnd);
    etk.update(
             {
                 'message' : report
             }
    );
}
// end Firebase funtion
})();