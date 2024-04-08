class ColorCard{
    id;
    color;
    addToList;
    htmlElement;
    circle;
    text

    constructor(newId, newColor, addToList){
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;


        this.htmlElement = document.createElement("li");
        this.htmlElement.classList = "colors__color";
        this.circle = document.createElement("figure");
        this.circle.classList = "colors__circle";
        this.circle.style.background = this.color;
        this.htmlElement.appendChild(this.circle);
        this.text = document.createElement("p");
        this.text.innerText = "Copied";
        this.text.classList = "colors__text";
        this.htmlElement.appendChild(this.text);
        this.htmlElement.onclick = this.onHTMLElementClicked;
        this.render();
    }

    onHTMLElementClicked = () => {
        this.circle.classList.add("colors__circle--selected");
        window.navigator.title = this.color;
        window.navigator.clipboard.writeText(this.color);
    }

    render(){
    
        this.addToList.appendChild(this.htmlElement);
    
    }

}

for (let i = 1; i < 101; i++) {

    let randomHue = Math.floor(Math.random() *  (360 - 1) + 1);
    let randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";
    let randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";

    let hsl = `hsl(${randomHue}, ${randomSaturation}, ${randomLightness})`;

    new ColorCard(i, hsl, document.getElementById("js--colors"));
    
}





console.log(window.navigator);
