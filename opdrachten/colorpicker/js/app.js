const color = document.getElementById("js--color--1");

console.log(color);

color.onclick = function(){
    color.children[0].classList.add("colors__circle--selected");
}