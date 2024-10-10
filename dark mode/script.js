var icon = document .getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    }else{
        icon.src = "moon.png";
    }
}