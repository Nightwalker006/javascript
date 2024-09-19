let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(()=>{
  let currentTime = new Date();

  hrs.innerHtml = currentTime.getHours()<10?"0":"" + currentTime.getHours();
  min.innerHtml = currentTime.getMinutes()<10?"0":"" + currentTime.getMinutes();
  sec.innerHtml = currentTime.getSeconds()<10?"0":"" + currentTime.getSeconds();
  }, 1000)