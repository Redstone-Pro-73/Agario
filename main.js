/**
 * Created by Adam Mikacich on 7/12/2016.
 */
$(window).load(function(){
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.background = "url('imgs/grid.png')";
    document.body.style.backgroundSize = "10%";
}

var mouseX = null;
var mouseY = null;

document.addEventListener('mousemove', function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    document.getElementById("position").innerHTML(mouseX + ", " + mouseY);
});