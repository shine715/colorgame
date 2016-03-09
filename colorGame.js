
var square = document.getElementsByClassName("square")
var getColorBtn = document.getElementById("getColor")
getColorBtn.addEventListener("click", function(){

for (var i=0;i<6;i++){
var Ared = Math.floor(Math.random()*256)
var Agreen = Math.floor(Math.random()*256)
var Ablue = Math.floor(Math.random()*256)
var rgbColor = "rgb("+Ared+","+Agreen+","+Ablue+")"
square[i].style.backgroundColor=rgbColor
}
})
