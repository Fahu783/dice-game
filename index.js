
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage="./images/dice"+randomNumber1+".png";
 var randomselect=document.querySelectorAll("img")[0];
 randomselect.setAttribute("src",randomdiceimage);


 
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="./images/dice"+randomNumber2+".png";
 var randomselect2=document.querySelectorAll("img")[1];
 randomselect2.setAttribute("src",randomdiceimage2);

 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}