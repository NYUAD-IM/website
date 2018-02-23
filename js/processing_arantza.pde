PFont myFont;
int fontSize = 100;
String title = "interactive\nmedia";

void setup(){
  size(800,800);
  myFont = createFont("Rockwell", 32);
}

void draw(){
  background(255); 
  
  textFont(myFont);
  textSize(fontSize);
  
  float x = 200;
  float y = 100;
  for (int i = 0; i < title.length(); i++) {
    
    fill(mouseX/3.5, mouseY/3.5, 0+250*noise(millis()*0.001, i*0.5));
    char ch = title.charAt(i);
    text (ch, x-32, y+width/3);
    
    x = x + textWidth(ch);
    
    if (ch == '\n') { 
      y = y + 80;
      x = 200;
    }
  }
}