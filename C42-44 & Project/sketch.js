var robber, robberimg;
var police, policeimg;
var trafficGroup;
var track1;
var track2;
var traffic1, traffic2, traffic3, traffic4, traffic5, traffic6;
var endimg;
var button;
var gameState = "START";
function preload() {
    traffic1 = loadImage("images/car1.png");
    traffic3 = loadImage("images/car3.png");
    traffic4 = loadImage("images/car4.png");
    traffic5 = loadImage("images/car5.png");
    traffic6 = loadImage("images/car6.png");
    robberimg = loadImage("images/robber.png");
    policeimg = loadImage("images/police.png");
    track1img = loadImage("images/track.jpg");
    track2img = loadImage("images/track2.png");
    endimg = loadImage("images/endimg.jpg");
    song = loadSound("song.mp3")

    trafficGroup = new Group();

}

function setup() {
    createCanvas(displayWidth - 20, displayHeight - 30);

    robber = createSprite(displayWidth / 2 - 500, displayHeight - 500, 50, 50);
    robber.addImage("car1y", robberimg);
    robber.scale = 0.5

    police = createSprite(displayWidth / 2 - 50, displayHeight - 10, 50, 50);
    police.addImage("polssdfd", policeimg);
    police.scale = 0.5;
    police.debug = true;

    button = createButton('Play');
    button.position(displayWidth / 2 + 30, displayHeight / 2);

    // song = loadSound('HELP ME HELP. ME... NIGGA Sound Effect.mp3');

    Restart = createButton('Restart');

}

function draw() {
    background("white");
    if (gameState === "START") {
        button.mousePressed(switch1);
        button.size(500, 500);
    }

    if (gameState === "LEVEL1") {
        button.hide();
        background(rgb(198, 135, 103));
        image(track1img, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
        camera.position.x = displayWidth / 2;
        camera.position.y = robber.y;
        police.velocityY = -5
        spawnObstacles();
        if (keyDown("right")) {
            robber.x = robber.x + 20;
        }

        if (keyDown("left")) {
            robber.x = robber.x - 20;
        }


        if (keyDown("down")) {
            robber.y = robber.y + 5;
        }

        if (keyDown("up")) {
            robber.y = robber.y - 5;
        }

        if (robber.y < -4105) {
            gameState = "LEVEL2";
        }
        if (trafficGroup.isTouching(robber) || police.isTouching(robber) || robber.y === police.y) {
            gameState = "END";
        }

        drawSprites();
    }

    if (gameState === "LEVEL2") {
        button.hide();
        // robber.y = displayHeight - 500;
        // police.y = displayHeight - 10;
        background(rgb(198, 135, 103));
        image(track2img, 0, -displayHeight * 8, displayWidth, displayHeight * 5);
        camera.position.x = displayWidth / 2;
        camera.position.y = robber.y;
        police.velocityY = -6

        spawnObstacles();
        if (keyDown("right")) {
            robber.x = robber.x + 20;
        }

        if (keyDown("left")) {
            robber.x = robber.x - 20;
        }

        if (keyDown("down")) {
            robber.y = robber.y + 6;
        }

        if (keyDown("up")) {
            robber.y = robber.y - 6;
        }

        if (trafficGroup.isTouching(robber) || police.isTouching(robber) || robber.y === police.y) {
            gameState = "END";
        }

        trafficGroup.y = -8510;
        if (robber.y < -8510) {
            gameState = "LEVEL3"
        }

        drawSprites();
    }


    if (gameState === "END") {
        trafficGroup.setVelocityYEach(0);
        police.velocityY = 0;
        robber.velocityY = 0;
        fill("white");
        textSize(25);
        text("You have been Caputured!!!!!!!", displayWidth / 2, displayHeight / 2);
        background(endimg);
        song.play();

        if (Restart.mousePressed) {
            gameState = "START";
            song.stop();
        }
    }
}

function spawnObstacles() {

    if (frameCount % 60 === 0) {
        var traffic = createSprite(0, -4105, 10, 25);
        traffic.x = Math.round(random(500, 1000));
        var rand = Math.round(random(1, 5));
        traffic.debug = true;
        switch (rand) {
            case 1: traffic.addImage(traffic1);
                break;
            case 2: traffic.addImage(traffic3);
                break;
            case 3: traffic.addImage(traffic4);
                break;
            case 4: traffic.addImage(traffic5);
                break;
            case 5: traffic.addImage(traffic6);
                break;
            default: break;
        }

        traffic.velocityY = +15;
        traffic.scale = 0.5;
        traffic.lifetime = 300;
        trafficGroup.add(traffic);
    }

}
function switch1() {
    gameState = "LEVEL1";
    console.log("HELLO!!!!");
}