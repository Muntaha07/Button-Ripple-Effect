var btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover",function(dets){
var x = (dets.clientX - btnEl.offsetLeft);
var y = (dets.clientY - btnEl.offsetTop);

btnEl.style.setProperty("--xpos", x + "px")
btnEl.style.setProperty("--ypos", y + "px")
})