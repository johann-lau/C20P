var bathA, brushI, drinkA, eatA, gym1A, gym2A, moveA, sleepI, issI; // A for Animation, I for Image
var scott, iss, edges, relativeX, relativeY;

function preload() {
	bathA = loadAnimation("bath1.png", "bath2.png");
	drinkA = loadAnimation("drink1.png", "drink2.png");
	eatA = loadAnimation("eat1.png", "eat2.png");
	gym1A = loadAnimation("gym1.png", "gym2.png");
	gym2A = loadAnimation("gym11.png", "gym12.png");
	moveA = loadAnimation("move.png", "move1.png");
	brushI = loadImage("brush.png");
	sleepI = loadImage("sleep.png");
	issI = loadImage("iss.png");
}

function setup() {
	createCanvas(1000,600);
	textAlign(LEFT, CENTER);
	fill(255);
	edges = createEdgeSprites();

	iss = createSprite(500, 300, 1, 1);
	iss.addImage("iss", issI);
	iss.scale = 0.2;

	scott = createSprite(500, 300, 50, 50);
	scott.addImage("sleep", sleepI);
	scott.addAnimation("bath", bathA);
	scott.addAnimation("drink", drinkA);
	scott.addAnimation("eat", eatA);
	scott.addAnimation("gym1", gym1A);
	scott.addAnimation("gym2", gym2A);
	scott.addAnimation("move", moveA);
	scott.addImage("brush", brushI);
	scott.scale = 0.12;
}

function draw() {
 	background(0);
 	drawSprites();

	if (keyWentDown("UP")) {
		scott.setVelocity(0,0);
		scott.changeImage("brush")
	}
	if (keyWentDown("DOWN")) {
		scott.setVelocity(0,0);
		scott.changeAnimation("gym"+Math.round(random(1,2)))
	}
	if (keyWentDown("LEFT")) {
		scott.setVelocity(0,0);
		scott.changeAnimation("eat")
	}
	if (keyWentDown("RIGHT")) {
		scott.setVelocity(0,0);
		scott.changeAnimation("bath")
	}
	if (keyWentDown("M")) {
		//scott.changeAnimation("move"); causes error
		relativeX = (mouseX-scott.x)/8;
		if (relativeX > 0) {
			velX = Math.min(15,(relativeX));
		} else {
			velX = Math.max(-15,(relativeX));
		}

		relativeY = (mouseY-scott.y)/8
		if (relativeY > 0) {
			velY = Math.min(15,(relativeY));
		} else {
			velY = Math.max(-15,(relativeY));
		}
	scott.velocityX = velX;
	scott.velocityY = velY;
	}
	scott.bounceOff(edges);
	textSize(30);
	text("Instructions",50,50);
	textSize(20);
	text("Press UP",50,80);
	text("Press DOWN",50,110);
	text("Press LEFT",50,140);
	text("Press RIGHT",50,170);
	text("Press M",50,200);
	text("to brush the teeth",200,80);
	text("to exercise",200,110);
	text("to eat something",200,140);
	text("to take a bath",200,170);
	text("to move",200,200);
}
