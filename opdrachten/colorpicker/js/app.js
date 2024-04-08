class ColorCard {
    constructor(newId, newColor, colorList) {
        this.id = newId;
        this.color = newColor;
        this.colorList = colorList;

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
        this.htmlElement.onclick = this.onHTMLElementClicked.bind(this);
        this.render();
    }

    onHTMLElementClicked() {
        this.circle.classList.add("colors__circle--selected");
        document.title = this.color; // Set the document title
        navigator.clipboard.writeText(this.color);
    }

    render() {
        this.colorList.htmlElement.appendChild(this.htmlElement);
    }
}

class ColorList {
    constructor(newId) {
        this.id = newId;
        this.htmlElement = document.createElement("ul");
        this.htmlElement.id = this.id;
        this.htmlElement.classList.add("colors");
        this.render();
    }

    render() {
        document.querySelector("body").appendChild(this.htmlElement);
    }
}

class HSLGenerator {
    constructor() {
        this.generateHSL();
    }

    generateHue() {
        this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);
    }

    generateSaturation() {
        this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";
    }

    generateLightness() {
        this.randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";
    }

    generateHSL() {
        this.generateHue();
        this.generateSaturation();
        this.generateLightness();
        this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})`;
    }
}

class App {
    constructor(newId) {
        this.id = newId;
        this.colorList = new ColorList("js--list");
        this.hslGenerator = new HSLGenerator();
        this.generateColorCards();
    }

    generateColorCards() {
        for (let i = 1; i <= 100; i++) {
            this.hslGenerator.generateHSL();
            new ColorCard(i, this.hslGenerator.hsl, this.colorList);
        }
    }
}

const app = new App("js--app");
const app2 = new App("js--app--1");
const app3 = new App("js--app--2");


