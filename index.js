function Roll(){
var RandomNumber1=Math.floor(Math.random()*6)+1;
var RandomImage="dice"+RandomNumber1+".png";
var ImageSrc="Images/"+RandomImage;
var imageOne=document.querySelector("#p1");
imageOne.setAttribute("src",ImageSrc);


var RandomNumber2=Math.floor(Math.random()*6)+1;
var RandomImageTwo="dice"+RandomNumber2+".png";
var ImageSrc2="Images/"+RandomImageTwo;
var imageTwo=document.querySelector("#p2");
imageTwo.setAttribute("src",ImageSrc2);

if (RandomNumber1>RandomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else if (RandomNumber2>RandomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
}