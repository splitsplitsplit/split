

let myImage=document.querySelector("img");
myImage.onclick=function(){
    let mySrc=myImage.getAttribute("src");
    if(mySrc==="images/2.jpg") myImage.setAttribute("src","images/1.jpg");
    else myImage.setAttribute("src","images/2.jpg");
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName=prompt("请输入你的名字");
    if(!myName||myName===null) setUserName();
   else{ 
   localStorage.setItem("name",myName);
   myHeading.textContent="欢迎你,"+myName;}
}
if(!localStorage.getItem("name")) setUserName();
else {let StoredName=localStorage.getItem("name");
      myHeading.textContent="欢迎你,"+StoredName;}

myButton.onclick=function(){
    setUserName();
}