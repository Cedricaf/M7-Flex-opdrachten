
class getDataFromAPI{
    url= '';
    data = null;
    constructor(newUrl){
        this.url = newUrl;
    }

    async getData(){
            await fetch(this.url)
        .then(function (response){
            return response.json();

        }).then((data) => {
            console.log(this.data);
            this.data = data;
        });
        return this.data;
        

    }
}

const Cedric = new getDataFromAPI("/data/transactions.json");
Cedric.getData().then(function(data){console.log(data)})


class Header{

    headerElement;
    figureElement;
    logoElement;
    logoHeadingElement;
    avatarWrapperElement;
    figureAvatarElement;
    avatarElement;
    placeToRenderHeader;

    constructor(placeToRenderHeader){
        this.placeToRenderHeader = document.getElementsByClassName(placeToRenderHeader)[0];
        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";

        this.figureElement = document.createElement("figure");
        this.figureElement.classList = "header__logo";

        this.logoElement = document.createElement("i")
        this.logoElement.classList = "fa-solid fa-sack-dollar";


        this.logoHeadingElement = document.createElement("h2");
        this.logoHeadingElement.classList = "header__banky";
        this.logoHeadingElement.innerText = "Banky";

        this.avatarWrapperElement = document.createElement("div");
        this.avatarWrapperElement.classList = "avatarWrapper";

        this.figureAvatarElement = document.createElement("figure");
        this.figureAvatarElement.classList = "avatar";

        this.avatarElement = document.createElement("i")
        this.avatarElement.classList = "fa-solid fa-user";

    }
    render() {
        if (!this.placeToRenderHeader) {
            console.error('Place to render header not found.');
            return;
        }

        this.placeToRenderHeader.appendChild(this.headerElement);

        this.headerElement.appendChild(this.figureElement);

        
        this.figureElement.appendChild(this.logoElement);
        this.figureElement.appendChild(this.logoHeadingElement);

        this.headerElement.appendChild(this.avatarWrapperElement);
        this.avatarWrapperElement.appendChild(this.figureAvatarElement);
        this.figureAvatarElement.appendChild(this.avatarElement);
    }
    
}

document.addEventListener('DOMContentLoaded', function () {
    const header = new Header("body");
    header.render();
});


class Main{
    constructor(){
        this.mainElement = document.createElement("main");
        this.mainElement.classList = "banky";

        this.leftSectionElement = document.createElement("section");
        this.leftSectionElement.classList = "banky__section banky__section--left";

        this.bankywrapperElement = document.createElement("div");

        this.bankyHeaderElement = document.createElement("header");
        this.bankyHeaderElement.classList = "banky__header";

        this.bankylogoElement = document.createElement("figure");
        this.bankylogoElement.classList = "banky__logo";

        this.bankylogoIElement = document.createElement("i");
        this.bankylogoIElement.classList = "fa-solid fa-house";

        this.bankylogoText = document.createElement("h1");
        this.bankylogoText.classList = "banky__money";

        this.bankybutton = document.createElement("button")
        this.bankybutton.classList = "banky__eyeButton";

        this.bankyfigure = document.createElement("figure");
        this.bankyfigure.classList = "banky__eye";

        this.bankybuttonI = document.createElement("i");
        this.bankybuttonI.classList = "fa-solid fa-eye";



    }

    render() {
        if (!this.placeToRenderHeader) {
            console.error('Place to render header not found.');
            return;
        }

    }
}

document.addEventListener('DOMContentLoaded', function () {
    const main = new Main("body");
    main.render();
});