
let topTextInput, bottomTextInput;
let fontSizeSlider;
let fontColorSliderH, fontColorSliderS, fontColorSliderB;
let fontSelector;
let memeImage;
let imageSelector;
let selectedImage; // Declare selectedImage globally

function setup() { 
  //create canvas in column-two
 let canvas= createCanvas(600, 500);
  canvas.parent('column-two') ;

function saving () {
saveCanvas (canvas, "MyMeme", "jpg");
}


  imageSelector = createSelect();
  imageSelector.option('man, enlightened?','images/1.jpg');
  imageSelector.option('frog chilling', 'images/3.png');
 // imageSelector.position(290, height +-400 );
  imageSelector.changed(changeImage);
  imageSelector.parent('column-one');
  imageSelector.class('imgsel');


  topTextInput = createInput('Top text');
  //topTextInput.position(280, height + -350);
  topTextInput.parent('column-one');

  
  bottomTextInput = createInput('Bottom text');
 // bottomTextInput.position(280, height + -310);
bottomTextInput.parent('column-one');
  
  fontSizeSlider = createSlider(10, 100, 36); // Min, Max, Default
  //fontSizeSlider.position(290, height - 250);
  fontSizeSlider.parent('column-one');
  fontSizeSlider.class('sliders');
  fontSizeSlider.id('fsizeslider')

  
  fontColorSliderH = createSlider(0, 255, 255);
  //fontColorSliderH.position(290, height - 150);
  fontColorSliderH.parent('column-one');
  fontColorSliderH.class('sliders');
  
  fontColorSliderS = createSlider(0, 255, 255);
 // fontColorSliderS.position(290, height + -100);
 fontColorSliderS.parent('column-one');
 fontColorSliderS.class('sliders');
  
  fontColorSliderB = createSlider(0, 255, 255);
  //fontColorSliderB.position(290, height + -50);
  fontColorSliderB.parent('column-one');
  fontColorSliderB.class('sliders');

  
  fontSelector = createRadio();
  fontSelector.option('Arial');
  fontSelector.option('Times New Roman');
  fontSelector.option('Verdana');
  fontSelector.selected('Arial');
 // fontSelector.position(220, height + -280);
  fontSelector.parent('column-one');

  let btn1 = createButton('Save Meme'); 
 btn1.parent('column-one'); 
 btn1.mousePressed(saving);
 btn1.class('buttons'); 
 btn1.id('button1'); 
  
}

function draw() {
  background(60, 50, 10);
  imageMode(CENTER);
  
  if (selectedImage) {
    image(selectedImage, width / 2, height / 2); // Center the image if it's loaded
  }
  
  textSize(fontSizeSlider.value());
  colorMode(RGB);
  fill(fontColorSliderH.value(), fontColorSliderS.value(), fontColorSliderB.value());
  textAlign(CENTER, CENTER);
  
  let selectedFont = fontSelector.value();
  textFont(selectedFont);
  
  text(topTextInput.value(), width / 2, 50);
  text(bottomTextInput.value(), width / 2, height - 50);
}

function changeImage() {
  selectedImage = loadImage(imageSelector.value()); // Assign the selected image to the global variable
}