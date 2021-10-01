canvas=document.getElementsByName('myCanvas');
ctx=canvas.getContext("2");



greencar_height=100;
grrencar_width=75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


greencar_y=225;
greencar_x=5;

function add() {
	background_imgTag= new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=parkingLot.jpg;

	greencar_imgTag= new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar_imgTag.src=car2.png;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,greencar_x,background_y,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,grrencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=0)
	{
		greencar_y=greencar_y-10;
		console.log("when up arrow is pressed,x="+greencar_x+"| y="+ greencar_y)
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_x>=0)
	{
		greencar_x=greencar_x+10;
		console.log("when down arrow is pressed,y="+greencar_y+"| x="+ greencar_x)
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencar_y>=0)
	{
		greencar_y=greencar_y-10;
		console.log("when left arrow is pressed,x="+greencar_x+"| y="+ greencar_y)
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencar_x>=0)
	{
		greencar_x=greencar_x+10;
		console.log("when right arrow is pressed,y="+greencar_y+"| x="+ greencar_x)
		uploadBackground();
		uploadgreencar();
	}
}
