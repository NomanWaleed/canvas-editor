
function blue(){
    document.getElementById("bg").style.backgroundColor="blue";
}
function black(){
    document.getElementById("bg").style.backgroundColor="black";
}
function green(){
    document.getElementById("bg").style.backgroundColor="green";
}
function red(){
    document.getElementById("bg").style.backgroundColor="red";
}
function yellow(){
    document.getElementById("bg").style.backgroundColor="yellow";
}
function pink(){
    document.getElementById("bg").style.backgroundColor="pink";
}
function orange(){
    document.getElementById("bg").style.backgroundColor="orange";
}
function firebrick(){
    document.getElementById("bg").style.backgroundColor="firebrick";
}
function aqua(){
    document.getElementById("bg").style.backgroundColor="aqua";
}
function violet(){
    document.getElementById("bg").style.backgroundColor="violet";
}


var elements = document.getElementById("elements");
var images = document.getElementById("images");
var text = document.getElementById("text");
var bg = document.getElementById("background");

elements.style.display="block";
images.style.display= "none";
text.style.display= "none";
bg.style.display="none";

function elementsFun(){
    bg.style.display="none";
    images.style.display="none";
    text.style.display= "none";
    document.getElementById("elementss").className="active";    
    document.getElementById("imagess").className="";
    document.getElementById("textt").className="";
    document.getElementById("backgg").className="";    
}
function imagesFun(){
    bg.style.display="none";
    images.style.display="block";
    text.style.display= "none";
    elements.style.display="none";
    document.getElementById("imagess").className="active";
    document.getElementById("textt").className="";
    document.getElementById("elementss").className="";
    document.getElementById("backgg").className="";
}
function textFun(){
    bg.style.display="none";
    images.style.display="none";
    text.style.display= "block";
    elements.style.display="none";
    document.getElementById("imagess").className="";
    document.getElementById("elementss").className="";
    document.getElementById("textt").className="active";
    document.getElementById("backgg").className="";
}
function bgFun(){
    text.style.display="none";
    images.style.display="none";
    bg.style.display="block";
    elements.style.display="none";
    document.getElementById("imagess").className="";
    document.getElementById("elementss").className="";
    document.getElementById("textt").className="";
    document.getElementById("backgg").className="active";
}