class Crib {
    constructor() {
        this.cardsInCrib = [];
    }

    emptyCrib() {
        let numberOfCardsInCrib = this.cardsInCrib.length;
        if (numberOfCardsInCrib !== 0) {
            this.cardsInCrib.splice(0, numberOfCardsInCrib);
        }
    }

    addToCrib(card) {
        this.cardsInCrib.push(card);
    }

    removeCardFromCrib(index) {
        return this.cardsInCrib.splice(index, 1)[0];
    }

    scoreCrib(starter) {
	    let handScorer = new HandScorer(this.cardsInCrib);
        let score = handScorer.scoreHand(starter);
        return score;
    }

    updateCribDisplayBeforePegging() {
        let cribHTML = document.querySelector("#crib");
        let cribLength = this.cardsInCrib.length;
        let i;
        //let htmlForCard;

        cribHTML.innerHTML = "";

        for (i = 0; i < cribLength; i++) {
            let card = document.createElement("img");

            card.setAttribute("class", "card");
            card.setAttribute("src", this.cardsInCrib[i].image);
            card.setAttribute("cardPlace", i);
            //card.setAttribute("onclick", "game.pushToPlayer(" + i + ")");
            card.addEventListener("click", pushToPlayer);

            cribHTML.appendChild(card);
            // htmlForCard = "<img class='card'";
            // htmlForCard += "onclick='game.pushToPlayer(" + i + ")'";
            // htmlForCard += "src='" + this.cardsInCrib[i].image + "'";
            // htmlForCard += ">";
            //
            // cribHTML.innerHTML += htmlForCard;
        }

    }
}

const pushToPlayer = event => {
    game.pushToPlayer(event.currentTarget.getAttribute("cardPlace"));
}
