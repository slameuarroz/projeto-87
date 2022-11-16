
var canvas = new fabric.Canvas('myCanvas')
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object=Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToWidth(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?') // adicione os códigos adequados às teclas
	{
		new_image('vermelho.png')
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('verde.png')
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('amarelo.png')
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image('rosa.png')
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('azul.png')
	}
	
}

