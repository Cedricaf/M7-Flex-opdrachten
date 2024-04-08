const color = document.getElementsByClassName("colors__color");



for (let index = 0; index < color.length; index++) {


    let randomHue = Math.floor(Math.random() *  (360 - 1) + 1);
    let randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";
    let randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";

    color[index].children[0].style.background = `hsl(${randomHue}, ${randomSaturation}, ${randomLightness})`;

    console.log(randomHue, randomSaturation, randomLightness);


    


    color[index].onclick = function(){
        color[index].children[0].classList.add("colors__circle--selected");
    	navigator.clipboard.writeText(color[index].children[0].style.background);
        console.log(color[index].children[0])
        document.title = color[index].children[0].style.background;
        
    }
}

