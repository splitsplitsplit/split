function qS(S){
    return document.querySelector(S);
}
const displayedImage=qS(".displayed-img");
const thumbBar=qS(".thumb-bar");
const btn=qS("button");
const overlay=qS(".overlay");

for(let i=1;i<6;i++){
   const newImage=document.createElement("img");
   newImage.setAttribute("src","images/"+i+".jpg");
   thumbBar.appendChild(newImage);
   newImage.onclick=function(e){
       const imgSrc=e.target.getAttribute("src");
       displayedImage.setAttribute("src",imgSrc);
   }
}

btn.onclick=function(){
    const btnClass=btn.getAttribute("class");
    if(btnClass==="dark"){
        btn.setAttribute("class","light");
        btn.textContent="变亮";
        overlay.style.backgroundColor="rgba(0,0,0,0.5)";
    }else{
        btn.setAttribute("class","dark");
        btn.textContent="变暗";
        overlay.style.backgroundColor="rgba(0,0,0,0)";
    }
}