class GetDataFromAPI {
  url = "";
  data = null;
  constructor(newUrl) {
    this.url = newUrl;
  }

  async getData() {
    console.log("data wordt opgehaald");
    await fetch(this.url)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.data = data;
      });
    return this.data;
  }
}

const Cedric = new GetDataFromAPI("/data/transactions.json");

class Header {
  headerElement;
  figureElement;
  logoElement;
  logoHeadingElement;
  avatarWrapperElement;
  figureAvatarElement;
  avatarElement;
  placeToRenderHeader;

  constructor(placeToRenderHeader) {
    this.placeToRenderHeader =
      document.getElementsByClassName(placeToRenderHeader)[0];
    this.headerElement = document.createElement("header");
    this.headerElement.classList = "header";

    this.figureElement = document.createElement("figure");
    this.figureElement.classList = "header__logo";

    this.logoElement = document.createElement("i");
    this.logoElement.classList = "fa-solid fa-sack-dollar";

    this.logoHeadingElement = document.createElement("h2");
    this.logoHeadingElement.classList = "header__banky";
    this.logoHeadingElement.innerText = "Banky";

    this.avatarWrapperElement = document.createElement("div");
    this.avatarWrapperElement.classList = "avatarWrapper";

    this.figureAvatarElement = document.createElement("figure");
    this.figureAvatarElement.classList = "avatar";

    this.avatarElement = document.createElement("i");
    this.avatarElement.classList = "fa-solid fa-user";
  }
  render() {
    if (!this.placeToRenderHeader) {
      console.error("Place to render header not found.");
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

class BankyMain {
  placeToRenderBankyMain;
  mainElement;

  leftsection = new BankyLeftSection();
  rightsection;

  constructor(placeToRenderBankyMain) {
    this.placeToRenderBankyMain = document.getElementsByClassName(
      placeToRenderBankyMain
    )[0];
    this.mainElement = document.createElement("main");
    this.mainElement.classList = "banky";

    this.rightsection = new BankyRightSection(this.mainElement);
  }

  makeButtonsFromData(data) {
    console.log(data);
    this.rightsection.makeButtonsFromData(data);
  }

  makeTransactionsFromData(data) {
    this.leftsection.makeTransactionsFromData("Bankrekening", data);
    console.log(data);
  }

  render() {
    if (!this.placeToRenderBankyMain) {
      console.error("Place to render BankyMain not found.");
      return;
    }

    this.placeToRenderBankyMain.appendChild(this.mainElement);
    this.mainElement.appendChild(this.leftsection.leftSectionElement);
    this.leftsection.render();

    this.rightsection.render();
  }
}

class BankyLeftSection {
  constructor() {
    this.leftSectionElement = document.createElement("section");
    this.leftSectionElement.classList = "banky__section banky__section--left";

    this.bankyHeaderWrapperElement = document.createElement("div");

    this.bankyHeaderElement = document.createElement("header");
    this.bankyHeaderElement.classList = "banky__header";

    this.bankylogoElement = document.createElement("figure");
    this.bankylogoElement.classList = "banky__logo";

    this.bankylogoIElement = document.createElement("i");
    this.bankylogoIElement.classList = "fa-solid fa-house";

    this.bankylogoText = document.createElement("h1");
    this.bankylogoText.classList = "banky__money";
    this.bankylogoText.innerText = "Balance €90";

    this.eyeButton = document.createElement("button");
    this.eyeButton.classList = "banky__eyeButton";

    this.eyeFigure = document.createElement("figure");
    this.eyeFigure.classList = "banky__eye";

    this.bankybuttonI = document.createElement("i");
    this.bankybuttonI.classList = "fa-solid fa-eye";

    this.transactionsElement = document.createElement("ul");
    this.transactionsElement.classList = "banky__transactions";
  }

  makeTransactionsFromData(accountToShow, data) {
    let totalMoney = 0;
    for (let index = 0; index < data[accountToShow].length; index++) {
        totalMoney += data[accountToShow][index]["amount"];
        
    }
    this.bankylogoText.innerText = "Balance: €" + totalMoney;
    
    console.log(totalMoney);

    for (let index = 0; index < data[accountToShow].length; index++) {
      this.transactionElement = document.createElement("li");
      this.transactionElement.classList = "banky__transaction";
      this.transactionElement.innerText = data[accountToShow][index]["from/to"];

      this.transactionFrom = document.createElement("h3");
      this.transactionFrom.classList = "banky__name";

      this.transactionAmount = document.createElement("h3");
      this.transactionAmount.classList = "banky__amount";
      this.transactionAmount.innerText = data[accountToShow][index]["amount"];

      this.transactionsElement.appendChild(this.transactionElement);

      this.transactionsElement.appendChild(this.transactionElement);
      this.transactionElement.appendChild(this.transactionFrom);
      this.transactionElement.appendChild(this.transactionAmount);
      
    }
    // buiten de for loop zodat het niet wordt gelooped
    this.transferButton = document.createElement("button");
    this.transferButton.classList = "banky__transferButton";
    this.transferButton.innerText = "Transfer";
    this.leftSectionElement.appendChild(this.transferButton);
  }

  render() {
    this.leftSectionElement.appendChild(this.bankyHeaderElement);
    this.bankyHeaderElement.appendChild(this.bankyHeaderWrapperElement);
    this.bankyHeaderWrapperElement.appendChild(this.bankylogoElement);
    this.bankylogoElement.appendChild(this.bankylogoIElement);
    this.bankyHeaderWrapperElement.appendChild(this.bankylogoText);
    this.bankyHeaderWrapperElement.appendChild(this.eyeButton);
    this.eyeButton.appendChild(this.eyeFigure);
    this.eyeFigure.appendChild(this.bankybuttonI);
    this.leftSectionElement.appendChild(this.transactionsElement);
  }
}

class BankyRightSection {
  mainElement;
  constructor(mainElement) {
    this.mainElement = mainElement;
    this.rightSectionElement = document.createElement("section");
    this.rightSectionElement.classList = "banky__section banky__section--right";

    this.accountsElement = document.createElement("ul");
    this.accountsElement.classList = "banky__accounts";
  }

  makeButtonsFromData(data) {
    Object.entries(data).forEach((entry) => {
      this.accountElement = document.createElement("li");
      this.accountElement.classList = "banky__account";

      this.bankySwitchButton = document.createElement("button");
      this.bankySwitchButton.classList = "banky__switchAccount";

      this.bankySwitchAccountFigure = document.createElement("figure");
      this.bankySwitchAccountFigure.classList = "banky__logo";

      this.bankySwitchI = document.createElement("i");
      this.bankySwitchI.classList = "fa-solid fa-house";

      this.bankyNameOfAccount = document.createElement("h4");
      this.bankyNameOfAccount.classList = "banky__nameOfAccount";
      this.bankyNameOfAccount.innerText = entry[0];

      this.accountsElement.appendChild(this.accountElement);
      this.accountElement.appendChild(this.bankySwitchButton);
      this.bankySwitchButton.appendChild(this.bankySwitchAccountFigure);
      this.bankySwitchAccountFigure.appendChild(this.bankySwitchI);
      this.accountElement.appendChild(this.bankyNameOfAccount);
    });
  }

  render() {
    this.mainElement.appendChild(this.rightSectionElement);
    this.rightSectionElement.appendChild(this.accountsElement);
  }
}

class App {
  bankyHeader;
  bankyMain;
  getDataFromAPI;
  constructor() {
    this.header = new Header("body");
    this.bankyMain = new BankyMain("body");

    this.getDataFromAPI = new GetDataFromAPI("./data/transactions.json");
    console.table(
      this.getDataFromAPI.getData().then((data) => {
        this.bankyMain.makeTransactionsFromData(data);
        this.bankyMain.makeButtonsFromData(data);
      })
    );

    this.header.render();
    this.bankyMain.render();
  }
}

const app = new App();
