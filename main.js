 let list = document.querySelector(".list");
 let icon = document.querySelector(".icon");
 let close = document.querySelector(".close-icon");
 let overlay = document.querySelector(".overlay");

 icon.onclick = function show_hide(){
     
         list.style.display = "flex";
         overlay.style.display = "flex";
       
 }

 close.onclick = function close(){
     list.style.display = "none";
     overlay.style.display = "none";
 }