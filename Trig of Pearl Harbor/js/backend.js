// Set Up Variables 
var canvas;
var context;
var WIDTH = 600;
var HEIGHT = 400;
var player = new Sprite();
var score = 0;
var message = "Score"  + score;
//variables for scrolling game
var scrollSpeed = 2;
var totalCollectables = 1;
var totalEnemies = 1;
var sceneLength = 12000;

var goalx = 12000;
var goalImage = new Image();
goalImage.src = "images/goal.png";
goalImage.onLoad = function(){
	context.drawImage(goalImage, 69,50);
}
	//Array of Definitions
var definitions = ["What is sin(pi/4)",
 "What is cos(pi/6)",
 "What is tan(pi/4)",
 "What is sin(pi)",
 "What is cos(7pi/4)", 
 "What is cos(pi/3)", 
 "What is tan(11pi/6)", 
 "What is sin(3pi/2)",
 "What is sec(2pi/3)",
 "What is csc(3pi/4)"];
 
//Declare an array variable called collectables. The opening and closing square brackets mean array in javascript
var collectables = [];
var collectables2 = [];
var collectables3 = [];
var collectables4 = [];
var collectables5 = [];
var collectables6 = [];
var collectables7 = [];
var collectables8 = [];
var collectables9 = [];
var collectables10 = [];
//Use a for loop to fill the array with collectable items
for(var i=0; i < totalCollectables; i++){
collectables.push(new Sprite());
collectables[i].x = 2000;
collectables[i].y = 215;
collectables[i].width = 50;
collectables[i].height = 50;
collectables2.push(new Sprite());
collectables2[i].x = 3000;
collectables2[i].y = 100;
collectables2[i].width = 50;
collectables2[i].height = 50;
collectables3.push(new Sprite());
collectables3[i].x = 4000;
collectables3[i].y = 330;
collectables3[i].width = 50;
collectables3[i].height = 50;
collectables4.push(new Sprite());
collectables4[i].x = 5000;
collectables4[i].y = 100;
collectables4[i].width = 50;
collectables4[i].height = 50;
collectables5.push(new Sprite());
collectables5[i].x = 6000;
collectables5[i].y = 215;
collectables5[i].width = 50;
collectables5[i].height = 50;
collectables6.push(new Sprite());
collectables6[i].x = 7000;
collectables6[i].y = 330;
collectables6[i].width = 50;
collectables6[i].height = 50;
collectables7.push(new Sprite());
collectables7[i].x = 8000;
collectables7[i].y = 100;
collectables7[i].width = 50;
collectables7[i].height = 50;
collectables8.push(new Sprite());
collectables8[i].x = 9000;
collectables8[i].y = 215;
collectables8[i].width = 50;
collectables8[i].height = 50;
collectables9.push(new Sprite());
collectables9[i].x = 10000;
collectables9[i].y = 215;
collectables9[i].width = 50;
collectables9[i].height = 50;
collectables10.push(new Sprite());
collectables10[i].x = 11000;
collectables10[i].y = 100;
collectables10[i].width = 50;
collectables10[i].height = 50;
}

//Declare an array variable called enemies
var enemies = [];
var enemies2 = [];
var enemies3 = [];
var enemies4 = [];
var enemies5 = [];
var enemies6 = [];
var enemies7 = [];
var enemies8 = [];
var enemies9 = [];
var enemies1 = [];
var enemies11 = [];
var enemies12 = [];
var enemies13 = [];
var enemies14 = [];
var enemies15 = [];
var enemies16 = [];
var enemies17 = [];
var enemies18 = [];
var enemies19 = [];
var enemies20 = [];
//Use a for loop to fill the array with enemy items
for (var j = 0; j < totalEnemies; j++) {
    enemies.push(new Sprite());
    enemies[j].x = 2000;
    enemies[j].y = 100;
    enemies[j].width = 50;
    enemies[j].height = 50;
    enemies2.push(new Sprite());
    enemies2[j].x = 2000;
    enemies2[j].y = 330;
    enemies2[j].width = 50;
    enemies2[j].height = 50;
    enemies3.push(new Sprite());
    enemies3[j].x = 3000;
    enemies3[j].y = 330;
    enemies3[j].width = 50;
    enemies3[j].height = 50;
    enemies4.push(new Sprite());
    enemies4[j].x = 3000;
    enemies4[j].y = 215;
    enemies4[j].width = 50;
    enemies4[j].height = 50;
    enemies5.push(new Sprite());
    enemies5[j].x = 4000;
    enemies5[j].y = 215;
    enemies5[j].width = 50;
    enemies5[j].height = 50;
    enemies6.push(new Sprite());
    enemies6[j].x = 4000;
    enemies6[j].y = 100;
    enemies6[j].width = 50;
    enemies6[j].height = 50;
    enemies7.push(new Sprite());
    enemies7[j].x = 5000;
    enemies7[j].y = 215;
    enemies7[j].width = 50;
    enemies7[j].height = 50;
    enemies8.push(new Sprite());
    enemies8[j].x = 5000;
    enemies8[j].y = 330;
    enemies8[j].width = 50;
    enemies8[j].height = 50;
    enemies9.push(new Sprite());
    enemies9[j].x = 6000;
    enemies9[j].y = 330;
    enemies9[j].width = 50;
    enemies9[j].height = 50;
    enemies1.push(new Sprite());
    enemies1[j].x = 6000;
    enemies1[j].y = 100;
    enemies1[j].width = 50;
    enemies1[j].height = 50;
    enemies11.push(new Sprite());
    enemies11[j].x = 7000;
    enemies11[j].y = 215;
    enemies11[j].width = 50;
    enemies11[j].height = 50;
    enemies12.push(new Sprite());
    enemies12[j].x = 7000;
    enemies12[j].y = 100;
    enemies12[j].width = 50;
    enemies12[j].height = 50;
    enemies13.push(new Sprite());
    enemies13[j].x = 8000;
    enemies13[j].y = 330;
    enemies13[j].width = 50;
    enemies13[j].height = 50;
    enemies14.push(new Sprite());
    enemies14[j].x = 8000;
    enemies14[j].y = 215;
    enemies14[j].width = 50;
    enemies14[j].height = 50;
    enemies15.push(new Sprite());
    enemies15[j].x = 9000;
    enemies15[j].y = 330;
    enemies15[j].width = 50;
    enemies15[j].height = 50;
    enemies16.push(new Sprite());
    enemies16[j].x = 9000;
    enemies16[j].y = 100;
    enemies16[j].width = 50;
    enemies16[j].height = 50;
    enemies17.push(new Sprite());
    enemies17[j].x = 10000;
    enemies17[j].y = 330;
    enemies17[j].width = 50;
    enemies17[j].height = 50;
    enemies18.push(new Sprite());
    enemies18[j].x = 10000;
    enemies18[j].y = 100;
    enemies18[j].width = 50;
    enemies18[j].height = 50;
    enemies19.push(new Sprite());
    enemies19[j].x = 11000;
    enemies19[j].y = 215;
    enemies19[j].width = 50;
    enemies19[j].height = 50;
    enemies20.push(new Sprite());
    enemies20[j].x = 11000;
    enemies20[j].y = 330;
    enemies20[j].width = 50;
    enemies20[j].height = 50;
}
// splash screen image settings
var splashScreenImage = new Image();
var splashScreenClicked = false;
splashScreenImage.src = "images/SplashScreen.png";
// end splash screen image settings

//Variable for Background Image
var backgroundImage = new Image();
backgroundImage.src = "images/BackgroundF.png";
// end background image settings

//Variable for Player Image
var playerImage = new Image();
playerImage.src = "images/Player.png";
// end player image settings

//Variable for collectable Image 1
//var collectableImage1 = new Image();
//collectableImage1.src = "images/Collectableroot2.png";
// end collectable image 1 settings

var collectableImgs = ["images/Collectableroot2.png",
 "images/Collectableroot3.png",
 "images/Collectable1.png",
 "images/Collectable0.png",
 "images/Collectablenegroot2.png",
 "images/Collectablehalf.png",
 "images/Collectablenegroot3ov3.png",
 "images/CollectableDNE.png",
 "images/Collectableneg2.png",
 "images/Collectableroot2.png"];

//Variable for collectable Image 1
var collectableImage1 = new Image();
collectableImage1.src = collectableImgs[0];
// end collectable image 1 settings

//Variable for collectable image 2
var collectableImage2 = new Image();
collectableImage2.src = collectableImgs[1];
// end collectable image 2 settings

//Variable for collectable image 2
var collectableImage3 = new Image();
collectableImage3.src = collectableImgs[2];
// end collectable image 2 settings

//Variable for collectable image 2
var collectableImage4 = new Image();
collectableImage4.src = collectableImgs[3];
// end collectable image 2 settings

//Variable for collectable image 2
var collectableImage5 = new Image();
collectableImage5.src = collectableImgs[4];
// end collectable image 2 settings

//Variable for collectable image 2
var collectableImage6 = new Image();
collectableImage6.src = collectableImgs[5];
// end collectable image 2 settings

//Variable for collectable image 2
var collectableImage7 = new Image();
collectableImage7.src = collectableImgs[6];
// end collectable image 2 settings

//Variable for collectable image 2
var collectableImage8 = new Image();
collectableImage8.src = collectableImgs[7];
// end collectable image 2 settings

//Variable for collectable image 2
var collectableImage9 = new Image();
collectableImage9.src = collectableImgs[8];
// end collectable image 2 settings

//Variable for collectable image 2
var collectableImage10 = new Image();
collectableImage10.src = collectableImgs[9];
// end collectable image 2 settings

var enemyImgs =  ["images/Collectableroot2.png",
 "images/Collectableroot3.png",
 "images/Collectable1.png",
 "images/Collectable0.png",
 "images/Collectablenegroot2.png",
 "images/Collectablehalf.png",
 "images/Collectablenegroot3ov3.png",
 "images/CollectableDNE.png",
 "images/Collectableneg2.png",
 "images/Collectableroot2.png"];

//Variable for enemy Image 1
var enemyImage1 = new Image();
enemyImage1.src = enemyImgs[1];
// end enemy image 1 settings

//Variable for enemy Image 2;
var enemyImage2 = new Image();
enemyImage2.src = enemyImgs[2];
// end enemy image 2 settings

//Variable for enemy Image 3;
var enemyImage3 = new Image();
enemyImage3.src = enemyImgs[2];
// end enemy image 2 settings

//Variable for enemy Image 4;
var enemyImage4 = new Image();
enemyImage4.src = enemyImgs[3];
// end enemy image 2 settings

//Variable for enemy Image 5;
var enemyImage5 = new Image();
enemyImage5.src = enemyImgs[3];
// end enemy image 2 settings

//Variable for enemy Image 6;
var enemyImage6 = new Image();
enemyImage6.src = enemyImgs[4];
// end enemy image 2 settings

//Variable for enemy Image 7;
var enemyImage7 = new Image();
enemyImage7.src = enemyImgs[4];
// end enemy image 2 settings

//Variable for enemy Image 8;
var enemyImage8 = new Image();
enemyImage8.src = enemyImgs[5];
// end enemy image 2 settings

//Variable for enemy Image 9;
var enemyImage9 = new Image();
enemyImage9.src = enemyImgs[5];
// end enemy image 2 settings

//Variable for enemy Image 10;
var enemyImage = new Image();
enemyImage.src = enemyImgs[6];
// end enemy image 2 settings

//Variable for enemy Image 11;
var enemyImage11 = new Image();
enemyImage11.src = enemyImgs[6];
// end enemy image 2 settings

//Variable for enemy Image 12;
var enemyImage12 = new Image();
enemyImage12.src = enemyImgs[7];
// end enemy image 2 settings

//Variable for enemy Image 13;
var enemyImage13 = new Image();
enemyImage13.src = enemyImgs[7];
// end enemy image 2 settings

//Variable for enemy Image 14;
var enemyImage14 = new Image();
enemyImage14.src = enemyImgs[8];
// end enemy image 2 settings

//Variable for enemy Image 15;
var enemyImage15 = new Image();
enemyImage15.src = enemyImgs[8];
// end enemy image 2 settings

//Variable for enemy Image 16;
var enemyImage16 = new Image();
enemyImage16.src = enemyImgs[9];
// end enemy image 2 settings

//Variable for enemy Image 17;
var enemyImage17 = new Image();
enemyImage17.src = enemyImgs[9];
// end enemy image 2 settings

//Variable for enemy Image 18;
var enemyImage18 = new Image();
enemyImage18.src = enemyImgs[7];
// end enemy image 2 settings

//Variable for enemy Image 19;
var enemyImage19 = new Image();
enemyImage19.src = enemyImgs[0];
// end enemy image 2 settings

//Variable for enemy Image 20;
var enemyImage20 = new Image();
enemyImage20.src = enemyImgs[1];
// end enemy image 2 settings

//Sound variables
var collectableSound = new Audio('sounds/collectable.mp3')
var enemySound = new Audio ('sounds/enemy1.mp3')
//Health Variables
var health = 200;
var message2 = "Health: " + health;

//health bar variables
var maxHealth = 100;
var healthbar = new Sprite();
healthbar.x = 10;
healthbar.y = 0;
healthbar.width = 200;
healthbar.height = 20;

//keyboard variables
var x = 0;
var y = 0;
var speed = 2;
var isUpDown = false;
var isDownDown = false;
var isRightDown = false;
var isLeftDown = false;

// Set Up Functions
function init (){
    // Get reference to canvas
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext('2d');
	
	//Call the update function every 10 milliseconds
	setInterval(update, 10);
	
	//Call the function movePlayer when the mouse moves
	//canvas.onmousemove = movePlayer;
	
	//Listen for player click on splash screen
	canvas.onmousedown = canvasClicked; 
	function canvasClicked(event) {
  	splashScreenClicked = true;
	}
	window.addEventListener('keydown',handleKeyDown,true);
	window.addEventListener('keyup',handleKeyUp,true);
}
function update() {
	handleInput();
	
	//Draw splash screen
		context.drawImage(splashScreenImage, -50, 0);
	//Check if the user has clicked to start playing
		if(splashScreenClicked){
	
	//Clear canvas of shapes
	clear();
	
	//Draw background
		context.drawImage(backgroundImage, 0, 0, 600, 400);
		
	//Draw Goal
	
	context.drawImage(goalImage, goalx, 0);
	goalx -= scrollSpeed;
	if(goalx == -10){
		window.open("00_gameWinScreen.html", "_self");
	}
	
	//Draw collectables
		for (var i = 0; i < totalCollectables; i++) {
    	var collectable = collectables[i];
    	collectable.x -= scrollSpeed;
    	if (collectable.isVisible == true) {
        context.drawImage(collectableImage1, collectable.x, collectable.y, collectable.width, collectable.height);
    }
 
	    //Check for collisions between the player and collectable. Also check if the collectable is visible
    	if(collectable.isVisible & collides(player, collectable)){
        //If a collision occurs and the collectable is visible, increase the score
		score ++;
		//Change the collectable's visibility to false so that it only get picked up once
		collectable.isVisible = false;
		collectableSound.play();
    }
}


//Draw collectables2
		for (var i = 0; i < totalCollectables; i++) {
    	var collectable2 = collectables2[i];
    	collectable2.x -= scrollSpeed;
    	if (collectable2.isVisible == true) {
        context.drawImage(collectableImage2, collectable2.x, collectable2.y, collectable2.width, collectable2.height);
    }
 
	    //Check for collisions between the player and collectable. Also check if the collectable is visible
    	if(collectable2.isVisible & collides(player, collectable2)){
        //If a collision occurs and the collectable is visible, increase the score
		score ++;
		//Change the collectable's visibility to false so that it only get picked up once
		collectable2.isVisible = false;
		collectableSound.play();
		
    }
}
//Draw collectables3
		for (var i = 0; i < totalCollectables; i++) {
    	var collectable3 = collectables3[i];
    	collectable3.x -= scrollSpeed;
    	if (collectable3.isVisible == true) {
        context.drawImage(collectableImage3, collectable3.x, collectable3.y, collectable3.width, collectable3.height);
    }
 
	    //Check for collisions between the player and collectable. Also check if the collectable is visible
    	if(collectable3.isVisible & collides(player, collectable3)){
        //If a collision occurs and the collectable is visible, increase the score
		score ++;
		//Change the collectable's visibility to false so that it only get picked up once
		collectable3.isVisible = false;
		collectableSound.play();
    }
}
//Draw collectables4
		for (var i = 0; i < totalCollectables; i++) {
    	var collectable4 = collectables4[i];
    	collectable4.x -= scrollSpeed;
    	if (collectable4.isVisible == true) {
        context.drawImage(collectableImage4, collectable4.x, collectable4.y, collectable4.width, collectable4.height);
    }
 
	    //Check for collisions between the player and collectable. Also check if the collectable is visible
    	if(collectable4.isVisible & collides(player, collectable4)){
        //If a collision occurs and the collectable is visible, increase the score
		score ++;
		//Change the collectable's visibility to false so that it only get picked up once
		collectable4.isVisible = false;
		collectableSound.play();
    }
}
//Draw collectables5
		for (var i = 0; i < totalCollectables; i++) {
    	var collectable5 = collectables5[i];
    	collectable5.x -= scrollSpeed;
    	if (collectable5.isVisible == true) {
        context.drawImage(collectableImage5, collectable5.x, collectable5.y, collectable5.width, collectable5.height);
    }
 
	    //Check for collisions between the player and collectable. Also check if the collectable is visible
    	if(collectable5.isVisible & collides(player, collectable5)){
        //If a collision occurs and the collectable is visible, increase the score
		score ++;
		//Change the collectable's visibility to false so that it only get picked up once
		collectable5.isVisible = false;
		collectableSound.play();
    }
}
//Draw collectables6
		for (var i = 0; i < totalCollectables; i++) {
    	var collectable6 = collectables6[i];
    	collectable6.x -= scrollSpeed;
    	if (collectable6.isVisible == true) {
        context.drawImage(collectableImage6, collectable6.x, collectable6.y, collectable6.width, collectable6.height);
    }
 
	    //Check for collisions between the player and collectable. Also check if the collectable is visible
    	if(collectable6.isVisible & collides(player, collectable6)){
        //If a collision occurs and the collectable is visible, increase the score
		score ++;
		//Change the collectable's visibility to false so that it only get picked up once
		collectable6.isVisible = false;
		collectableSound.play();
    }
}
//Draw collectables7
		for (var i = 0; i < totalCollectables; i++) {
    	var collectable7 = collectables7[i];
    	collectable7.x -= scrollSpeed;
    	if (collectable7.isVisible == true) {
        context.drawImage(collectableImage7, collectable7.x, collectable7.y, collectable7.width, collectable7.height);
    }
 
	    //Check for collisions between the player and collectable. Also check if the collectable is visible
    	if(collectable7.isVisible & collides(player, collectable7)){
        //If a collision occurs and the collectable is visible, increase the score
		score ++;
		//Change the collectable's visibility to false so that it only get picked up once
		collectable7.isVisible = false;
		collectableSound.play();
    }
}
//Draw collectables8
		for (var i = 0; i < totalCollectables; i++) {
    	var collectable8 = collectables8[i];
    	collectable8.x -= scrollSpeed;
    	if (collectable8.isVisible == true) {
        context.drawImage(collectableImage8, collectable8.x, collectable8.y, collectable8.width, collectable8.height);
    }
 
	    //Check for collisions between the player and collectable. Also check if the collectable is visible
    	if(collectable8.isVisible & collides(player, collectable8)){
        //If a collision occurs and the collectable is visible, increase the score
		score ++;
		//Change the collectable's visibility to false so that it only get picked up once
		collectable8.isVisible = false;
		collectableSound.play();
    }
}
//Draw collectables9
		for (var i = 0; i < totalCollectables; i++) {
    	var collectable9 = collectables9[i];
    	collectable9.x -= scrollSpeed;
    	if (collectable9.isVisible == true) {
        context.drawImage(collectableImage9, collectable9.x, collectable9.y, collectable9.width, collectable9.height);
    }
 
	    //Check for collisions between the player and collectable. Also check if the collectable is visible
    	if(collectable9.isVisible & collides(player, collectable9)){
        //If a collision occurs and the collectable is visible, increase the score
		score ++;
		//Change the collectable's visibility to false so that it only get picked up once
		collectable9.isVisible = false;
		collectableSound.play();
    }
}
//Draw collectables10
		for (var i = 0; i < totalCollectables; i++) {
    	var collectable10 = collectables10[i];
    	collectable10.x -= scrollSpeed;
    	if (collectable10.isVisible == true) {
        context.drawImage(collectableImage10, collectable10.x, collectable10.y, collectable10.width, collectable10.height);
    }
 
	    //Check for collisions between the player and collectable. Also check if the collectable is visible
    	if(collectable10.isVisible & collides(player, collectable10)){
        //If a collision occurs and the collectable is visible, increase the score
		score ++;
		//Change the collectable's visibility to false so that it only get picked up once
		collectable10.isVisible = false;
		collectableSound.play();
    }
}
	
	//Draw enemy 1
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy = enemies[j];
   	 	enemy.x -= scrollSpeed;
    	if (enemy.isVisible == true) {
        context.drawImage(enemyImage1, enemy.x, enemy.y, enemy.width, enemy.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy.isVisible & collides(player, enemy)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
	//Draw enemy 2
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy2 = enemies2[j];
   	 	enemy2.x -= scrollSpeed;
    	if (enemy2.isVisible == true) {
        context.drawImage(enemyImage2, enemy2.x, enemy2.y, enemy2.width, enemy2.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy2.isVisible & collides(player, enemy2)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy2.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 3
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy3 = enemies3[j];
   	 	enemy3.x -= scrollSpeed;
    	if (enemy3.isVisible == true) {
        context.drawImage(enemyImage3, enemy3.x, enemy3.y, enemy3.width, enemy3.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy3.isVisible & collides(player, enemy3)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy3.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 4
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy4 = enemies4[j];
   	 	enemy4.x -= scrollSpeed;
    	if (enemy4.isVisible == true) {
        context.drawImage(enemyImage4, enemy4.x, enemy4.y, enemy4.width, enemy4.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy4.isVisible & collides(player, enemy4)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy4.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 5
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy5 = enemies5[j];
   	 	enemy5.x -= scrollSpeed;
    	if (enemy5.isVisible == true) {
        context.drawImage(enemyImage5, enemy5.x, enemy5.y, enemy5.width, enemy5.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy5.isVisible & collides(player, enemy5)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy5.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 6
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy6 = enemies6[j];
   	 	enemy6.x -= scrollSpeed;
    	if (enemy6.isVisible == true) {
        context.drawImage(enemyImage6, enemy6.x, enemy6.y, enemy6.width, enemy6.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy6.isVisible & collides(player, enemy6)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy6.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}7
//Draw enemy 7
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy7 = enemies7[j];
   	 	enemy7.x -= scrollSpeed;
    	if (enemy7.isVisible == true) {
        context.drawImage(enemyImage7, enemy7.x, enemy7.y, enemy7.width, enemy7.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy7.isVisible & collides(player, enemy7)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy7.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 8
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy8 = enemies8[j];
   	 	enemy8.x -= scrollSpeed;
    	if (enemy8.isVisible == true) {
        context.drawImage(enemyImage8, enemy8.x, enemy8.y, enemy8.width, enemy8.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy8.isVisible & collides(player, enemy8)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy8.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 9
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy9 = enemies9[j];
   	 	enemy9.x -= scrollSpeed;
    	if (enemy9.isVisible == true) {
        context.drawImage(enemyImage9, enemy9.x, enemy9.y, enemy9.width, enemy9.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy9.isVisible & collides(player, enemy9)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy9.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 10
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy1 = enemies1[j];
   	 	enemy1.x -= scrollSpeed;
    	if (enemy1.isVisible == true) {
        context.drawImage(enemyImage, enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy1.isVisible & collides(player, enemy1)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy1.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 11
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy11 = enemies11[j];
   	 	enemy11.x -= scrollSpeed;
    	if (enemy11.isVisible == true) {
        context.drawImage(enemyImage11, enemy11.x, enemy11.y, enemy11.width, enemy11.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy11.isVisible & collides(player, enemy11)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy11.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 12
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy12 = enemies12[j];
   	 	enemy12.x -= scrollSpeed;
    	if (enemy12.isVisible == true) {
        context.drawImage(enemyImage12, enemy12.x, enemy12.y, enemy12.width, enemy12.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy12.isVisible & collides(player, enemy12)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy12.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 13
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy13 = enemies13[j];
   	 	enemy13.x -= scrollSpeed;
    	if (enemy13.isVisible == true) {
        context.drawImage(enemyImage13, enemy13.x, enemy13.y, enemy13.width, enemy13.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy13.isVisible & collides(player, enemy13)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy13.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 14
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy14 = enemies14[j];
   	 	enemy14.x -= scrollSpeed;
    	if (enemy14.isVisible == true) {
        context.drawImage(enemyImage14, enemy14.x, enemy14.y, enemy14.width, enemy14.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy14.isVisible & collides(player, enemy14)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy14.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 15
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy15 = enemies15[j];
   	 	enemy15.x -= scrollSpeed;
    	if (enemy15.isVisible == true) {
        context.drawImage(enemyImage15, enemy15.x, enemy15.y, enemy15.width, enemy15.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy15.isVisible & collides(player, enemy15)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy15.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 16
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy16 = enemies16[j];
   	 	enemy16.x -= scrollSpeed;
    	if (enemy16.isVisible == true) {
        context.drawImage(enemyImage16, enemy16.x, enemy16.y, enemy16.width, enemy16.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy16.isVisible & collides(player, enemy16)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy16.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 17
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy17 = enemies17[j];
   	 	enemy17.x -= scrollSpeed;
    	if (enemy17.isVisible == true) {
        context.drawImage(enemyImage17, enemy17.x, enemy17.y, enemy17.width, enemy17.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy17.isVisible & collides(player, enemy17)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy17.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 18
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy18 = enemies18[j];
   	 	enemy18.x -= scrollSpeed;
    	if (enemy18.isVisible == true) {
        context.drawImage(enemyImage18, enemy18.x, enemy18.y, enemy18.width, enemy18.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy18.isVisible & collides(player, enemy18)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy18.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 19
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy19 = enemies19[j];
   	 	enemy19.x -= scrollSpeed;
    	if (enemy19.isVisible == true) {
        context.drawImage(enemyImage19, enemy19.x, enemy19.y, enemy19.width, enemy19.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy19.isVisible & collides(player, enemy19)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy19.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
//Draw enemy 20
		for (var j = 0; j < totalEnemies; j++) {
   	 	var enemy20 = enemies20[j];
   	 	enemy20.x -= scrollSpeed;
    	if (enemy20.isVisible == true) {
        context.drawImage(enemyImage20, enemy20.x, enemy20.y, enemy20.width, enemy20.height);
    }
 
    //Check for collisions between the player and enemy. Also check if the enemy is visible
	//If a collision occurs and the enemy is visible, decrease the score
	if(enemy20.isVisible & collides(player, enemy20)){
    	//If a collision occurs and the enemy is visible, decrease the score
    	health = health - 40;
    	//Change the enemy visibility to false
    	enemy20.isVisible = false;
    	enemySound.play();
    	if(health < 1) {
     		window.open("00_gameOverScreen.html", "_self");
		}
	}  
}
	



		
	//definition s
   context.fillText(definitions[0], collectable.x - 500, 65 );
   context.fillText(definitions[1], collectable2.x - 500, 65);
   context.fillText(definitions[2], collectable3.x - 500, 65);
   context.fillText(definitions[3], collectable4.x - 500, 65);
   context.fillText(definitions[4], collectable5.x - 500, 65);
   context.fillText(definitions[5], collectable6.x - 500, 65);
   context.fillText(definitions[6], collectable7.x - 500, 65);
   context.fillText(definitions[7], collectable8.x - 500, 65);
   context.fillText(definitions[8], collectable9.x - 500, 65);
   context.fillText(definitions[9], collectable10.x - 500, 65);


    //Draw player
    context.drawImage(playerImage, player.x, player.y);
	
	//Score text font and color
	context.font = "25px serif";
	context.fillStyle = "red";
	
	//Display score
	message = "Score: " + score;
	context.fillText(message, 20, 45);
	
	//health text box
	//draw health bar
	context.fillStyle = 'yellow';
	if(health < 50){
		context.fillStyle = 'red';
 	}
	context.fillRect(healthbar.x, healthbar.y, healthbar.width*health/maxHealth, healthbar.height); 
	//end health text box
	
		} //Closing curly brace for if(splashScreenClicked)
 }//End update function

function handleInput() {
	if(isUpDown){
		player.y-=speed;
	}
	if(isDownDown){
		player.y+=speed;
	}
//	if(isLeftDown){
//		player.x-=speed;
//	}
//	if(isRightDown){
//		player.x+=speed;
//	}
}

function handleKeyDown(evt) {
 
    if(evt.keyCode == 39) // Right
    {
        isRightDown = true;
    }
    if(evt.keyCode == 40) // Down
    {
        isDownDown = true;
    }
    if(evt.keyCode == 38) // Up
    {
        isUpDown = true;
    }
    if(evt.keyCode == 37) // Left
    {
        isLeftDown = true;
    }                   
 
}

function handleKeyUp(evt) {
 
    if(evt.keyCode == 39) // Right
    {
        isRightDown = false;
    }
    if(evt.keyCode == 40) // Down
    {
        isDownDown = false;
    }
    if(evt.keyCode == 38) // Up
    {
        isUpDown = false;
    }
    if(evt.keyCode == 37) // Left
    {
        isLeftDown = false;
    }                   
 
}

function clear() {
 	context.clearRect(0, 0, WIDTH, HEIGHT);
}

function Sprite() {
    this.x = 0;
    this.y = 225;
    this.width = 50;
    this.height = 50;
    this.isVisible = true;
}

function movePlayer(event) {
    player.x = event.pageX - canvas.offsetLeft;
    player.y = event.pageY - canvas.offsetTop;
}

//Check if object a and object b are colliding
function collides(a, b) {
   var val = false;
 
   val = (a.x < b.x + b.width) &&
   (a.x + a.width > b.x) &&
   (a.y < b.y + b.height) &&
   (a.y + a.height > b.y);
 
   return val;        
}
  
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
 
//Call the init function as soon as the page has finished loading
window.onload = init;









