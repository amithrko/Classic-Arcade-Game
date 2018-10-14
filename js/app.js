// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
	this.x=x;
	this.y=y;
	
	this.speed=speed;
	
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	this.x+=this.speed*dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	if(this.x>550)
	{
		this.x=-100;
		this.speed=100+Math.floor(Math.random()*512);
	}
	
	if((player.x<this.x+60)&&(player.x+37>this.x)&&(player.y<this.y+25)&&(player.y+30>this.y))
	{
		player.x=200;
		player.y=380;
		
		
	}
	
	
	
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player=function(x,y,speed){
	this.x=x;
	this.y=y;
	this.speed=speed;
	this.sprite='images/char-boy.png';
	
	
	
	
};

var cc=1;
var c1;

Player.prototype.update=function(){
	if(this.y>380)
	{
		this.y=380;
	}
	
	if(this.x>400)
	{
		this.x=400;
	}
	
	if(this.x<0)
	{
		this.x=0;
	}
	
	if(this.y<0)
	{

		this.y=380;
		
	
		cc++;;
		document.getElementById('hh').innerHTML="Level"+cc;
	
		
		if(document.getElementById('hh').innerHTML=="Level6")
		{
			c1=confirm("The game is over with collection"+cc+"prizes and to restart the game then press an OK");
		
			if(c1==true)
			{
				document.location.href="index.html";
			}
		}
		
		
	}
	
};


Player.prototype.render=function(){
	 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};







Player.prototype.handleInput=function(keyPress){
	
	switch(keyPress)
	{
		
		case 'left': this.x-=this.speed+50;
					 break;
					 
		case 'right': this.x+=this.speed+50;
					  break;
				
		case 'up': this.y-=this.speed+30;
				   break;
					
		case 'down': this.y+=this.speed+30;
					 break;
					 
	}
	
};


var cc11=0;

var Gem=function(){
	
	
};

Gem.prototype.update=function(){
	
		if(document.getElementById('hh').innerHTML=="Level1")
		{
			gem.x=300;
			gem.y=300;
			
			
			gem.sprite='images/Rock.png';
			
			if((gem.x==player.x)&&(gem.y==player.y))
			{
				player.x=200;
				player.y=380;
				
				
			}
			
			
		}
		if(document.getElementById('hh').innerHTML=="Level2")
		{
			player.sprite='images/char-cat-girl.png';
			gem.sprite='images/Gem Blue.png';
			
			if((gem.x==player.x)&&(gem.y==player.y))
			{
				gem.x=-100;
				gem.y=0;
				
				cc11++;
				
				
			}
			
			
		}
		
	
};

Gem.prototype.render=function(){
	
	ctx.drawImage(Resources.get(this.sprite),this.x,this.y);

};

var Gems=function(){

			this.x=100;
			this.y=300;
};

Gems.prototype.update=function(){
		gems.sprite='images/Gem Orange.png';
	
			if((gems.x==player.x)&&(gems.y==player.y))
			{
				
				gems.x=-100;
				gems.y=0;
				
				gems.sprite='images/Gem Orange.png';
			
		
				cc11++;
				
			}

};

Gems.prototype.render=function(){
	
	ctx.drawImage(Resources.get(this.sprite),this.x,this.y);

};
var Gems1=function(){

			this.x=0;
			this.y=140;
};

Gems1.prototype.update=function(){
	
		
			gems1.sprite='images/Gem Green.png';

			if((gems1.x==player.x)&&(gems1.y==player.y))
			{
				
				gems1.x=-100;
				gems1.y=0;
				gems1.sprite='images/Gem Green.png';
				cc11++;
				
				
			}

};

Gems1.prototype.render=function(){
	
	ctx.drawImage(Resources.get(this.sprite),this.x,this.y);

};

	
		
var Heart=function(){

			this.x=100;
			this.y=300;
};

Heart.prototype.update=function(){
		
			heart.sprite='images/Heart.png';
		
			if((heart.x==player.x)&&(heart.y==player.y))
			{
				
				heart.x=-100;
				heart.y=0;
				heart.sprite='images/Gem Green.png';	
				cc11++;
	
			}

	
};

Heart.prototype.render=function(){
	
	ctx.drawImage(Resources.get(this.sprite),this.x,this.y);

};

var Star=function(){

			this.x=400;
			this.y=60;
};

Star.prototype.update=function(){
	
			star.sprite='images/Star.png';

			if((star.x==player.x)&&(star.y==player.y))
			{
				
				star.x=-100;
				star.y=0;
				star.sprite='images/Star.png';
				cc11++;
				
			}

};

Star.prototype.render=function(){
	
	ctx.drawImage(Resources.get(this.sprite),this.x,this.y);

};

var Selector=function(){

			this.x=400;
			this.y=60;
};

Selector.prototype.update=function(){
	
			
			selector.sprite='images/Selector.png';
			
			
			if((selector.x==player.x)&&(selector.y==player.y))
			{
				
				selector.x=-100;
				selector.y=0;
				selector.sprite='images/Selector.png';
				cc11++;
				
				
			}
			
};

Selector.prototype.render=function(){
	
	ctx.drawImage(Resources.get(this.sprite),this.x,this.y);

};

	





	

var allEnemies=[];

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemyposition=[40,120,200];
var gem=new Gem();

var gems=new Gems();
var gems1=new Gems1();

var heart=new Heart();
var star=new Star();

var selector=new Selector();



var player=new Player(200,380,50);


var enemy;




enemyposition.forEach(function(posY){
	 enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
