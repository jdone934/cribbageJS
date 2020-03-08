class Crib {
    constructor() {
        this.cardsInCrib = [];
    }

    emptyCrib() {
        var numberOfCardsInCrib = this.cardsInCrib.length;
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
	    var handScorer = new HandScorer(this.cardsInCrib);
        var score = handScorer.scoreHand(starter);
        return score;
    }

    updateCribDisplayBeforePegging() {
        var cribLength = this.cardsInCrib.length;
        var i;
        var cribHTML = document.querySelector("#crib");
        var htmlForCard;

        cribHTML.innerHTML = "";

        for (i = 0; i < cribLength; i++) {
            htmlForCard = "<img class='card'";
            htmlForCard += "onclick='game.pushToPlayer(" + i + ")'";
            htmlForCard += "src='" + this.cardsInCrib[i].image + "'";
            htmlForCard += ">";

            cribHTML.innerHTML += htmlForCard;
        }

    }
}
