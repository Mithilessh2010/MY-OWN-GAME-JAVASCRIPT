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
    buttonimg = loadImage("images/start.png");
    startscreen = loadImage("images/startscreen.jpg")
    track3img = loadImage("images/track3.png");
    track4img = loadImage("images/track4.png")

    trafficGroup = new Group();
    trafficGroup2 = new Group();
    trafficGroup3 = new Group();
    trafficGroup4 = new Group();


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

    fill("blue");
    button = createButton('Play');
    let col = color(0, 234, 255);
    button.style('background-color', col);
    button.position(displayWidth / 2 - 80, displayHeight / 2);
    button.style("blue")

    song = loadSound('song.mp3');

    Restart = createButton('Restart');

}

function draw() {
    console.log(robber.y);
    background("white");
    if (gameState === "START") {
        background(startscreen);
        button.mousePressed(switch1);
        button.size(200, 100);
        // button.style('width', '200px');
        // button.style('height', '200px');
    }

    if (gameState === "LEVEL1") {
        spawnObstacles1();
        button.hide();
        background(rgb(198, 135, 103));
        image(track1img, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
        camera.position.x = displayWidth / 2;
        camera.position.y = robber.y;
        police.velocityY = -5
        if (keyDown("right") && robber.x < 1580) {
            robber.x = robber.x + 25;
        }

        if (keyDown("left") && robber.x > 360) {
            robber.x = robber.x - 25;
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

        if (robber.y < -4105) {
            gameState = "LEVEL2";
        }
        drawSprites();
    }

    if (gameState === "LEVEL2") {
        spawnObstacles2();
        button.hide();
        // robber.y = displayHeight - 500;
        // police.y = displayHeight - 10;
        background(rgb(198, 135, 103));
        image(track2img, 0, -displayHeight * 8, displayWidth, displayHeight * 5);
        camera.position.x = displayWidth / 2;
        camera.position.y = robber.y;


        if (keyDown("right") && robber.x < 1100) {
            robber.x = robber.x + 25;
        }

        if (keyDown("left") && robber.x > 540) {
            robber.x = robber.x - 25;
        }

        if (keyDown("down")) {
            robber.y = robber.y + 6;
        }

        if (keyDown("up")) {
            robber.y = robber.y - 6 ;
        }

        if (trafficGroup2.isTouching(robber) || police.isTouching(robber) || robber.y === police.y) {
            gameState = "END";
        }


        if (robber.y < -8510) {
            gameState = "LEVEL3"
        }

        drawSprites();
    }

    if (gameState === "LEVEL3") {
        spawnObstacles3();
        button.hide();
        // robber.y = displayHeight - 500;
        // police.y = displayHeight - 10;
        background(rgb(198, 135, 103));
        image(track3img, 0, -displayHeight * 16, displayWidth, displayHeight * 17);
        camera.position.x = displayWidth / 2;
        camera.position.y = robber.y;
        police.velocityY = -6


        if (keyDown("right") && robber.x < 1580) {
            robber.x = robber.x + 25;
        }

        if (keyDown("left") && robber.x > 360) {
            robber.x = robber.x - 25;
        }

        if (keyDown("down")) {
            robber.y = robber.y + 6;
        }

        if (keyDown("up")) {
            robber.y = robber.y - 6;
        }

        if (trafficGroup3.isTouching(robber) || police.isTouching(robber) || robber.y === police.y) {
            gameState = "END";
        }

        if (robber.y < -17216) {
            gameState = "LEVEL4";
        }


        drawSprites();
    }
    if (gameState === "LEVEL4") {
        spawnObstacles4();
        button.hide();
        // robber.y = displayHeight - 500;
        // police.y = displayHeight - 10;
        background(rgb(198, 135, 103));
        image(track4img, 0, -displayHeight * 34, displayWidth, displayHeight * 35);
        camera.position.x = displayWidth / 2;
        camera.position.y = robber.y;
        police.velocityY = -6


        if (keyDown("right") && robber.x < 1580) {
            robber.x = robber.x + 6;
        }

        if (keyDown("left") && robber.x > 360) {
            robber.x = robber.x - 6;
        }

        if (keyDown("down")) {
            robber.y = robber.y + 6;
        }

        if (keyDown("up")) {
            robber.y = robber.y - 6;
        }

        if (trafficGroup4.isTouching(robber) || police.isTouching(robber) || robber.y === police.y) {
            gameState = "END";
        }


        if (robber.y < -36638) {
            gameState = "FINISH";
        }


        drawSprites();
    }

    if (gameState === "END") {
        background(endimg);
        fill("red");
        textSize(50);
        text("You have been Captured!!!!!!! \n GAME OVER \n Press ctrl + r to restart", displayWidth / 2, displayHeight / 2 - 100);

        // song.play();
    }
}

function spawnObstacles1() {

    if (frameCount % 60 === 0) {
        var traffic = createSprite(0, -4105, 10, 25);
        traffic.x = Math.round(random(360, 1580));
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

function spawnObstacles2() {

    if (frameCount % 60 === 0) {
        var traffic22 = createSprite(0, -8510, 10, 25);
        traffic22.x = Math.round(random(350, 1100));
        var rand = Math.round(random(1, 5));
        traffic22.debug = true;
        switch (rand) {
            case 1: traffic22.addImage(traffic1);
                break;
            case 2: traffic22.addImage(traffic3);
                break;
            case 3: traffic22.addImage(traffic4);
                break;
            case 4: traffic22.addImage(traffic5);
                break;
            case 5: traffic22.addImage(traffic6);
                break;
            default: break;
        }

        traffic22.velocityY = +15;
        traffic22.scale = 0.5;
        traffic22.lifetime = 300;
        trafficGroup2.add(traffic22);
    }

}

function spawnObstacles3() {
    
    if (frameCount % 60 === 0) {
        var traffic33 = createSprite(0, -17216, 10, 25);
        traffic33.x = Math.round(random(360, 1580));
        var rand = Math.round(random(1, 5));
        traffic33.debug = true;
        switch (rand) {
            case 1: traffic33.addImage(traffic1);
                break;
            case 2: traffic33.addImage(traffic3);
                break;
            case 3: traffic33.addImage(traffic4);
                break;
            case 4: traffic33.addImage(traffic5);
                break;
            case 5: traffic33.addImage(traffic6);
                break;
            default: break;
        }

        traffic33.velocityY = +20;
        traffic33.scale = 0.5;
        traffic33.lifetime = 1000;
        trafficGroup3.add(traffic33);
    }

}


function spawnObstacles4() {

    if (frameCount % 60 === 0) {
        var traffic44 = createSprite(0, -36638, 10, 25);
        traffic44.x = Math.round(random(360, 1580));
        var rand = Math.round(random(1, 5));
        traffic44.debug = true;
        switch (rand) {
            case 1: traffic44.addImage(traffic1);
                break;
            case 2: traffic44.addImage(traffic3);
                break;
            case 3: traffic44.addImage(traffic4);
                break;
            case 4: traffic44.addImage(traffic5);
                break;
            case 5: traffic44.addImage(traffic6);
                break;
            default: break;
        }

        traffic44.velocityY = +15;
        traffic44.scale = 0.5;
        traffic44.lifetime = 300;
        trafficGroup4.add(traffic44);
    }

}
function switch1() {
    gameState = "LEVEL1";
    console.log("HELLO!!!!");
}