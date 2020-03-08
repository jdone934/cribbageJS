class Player {
    constructor() {
        this.score = 0;
        this.hand = null;
    }

    addToScore(scoreAdder) {
        this.score += scoreAdder;
    }

    addToHand(card) {
        this.hand.push(card);
    }

    removeCardFromHand(index) {
        return this.hand.splice(index, 1)[0];
    }

    scoreHand(starter) {
        var handScorer = new HandScorer(this.hand);
        var score = handScorer.scoreHand(starter);
        return score;
    }

    updateHandDisplay() {
        var handHTML = document.querySelector("#playerHand");
        var handLength = this.hand.length;
        var i;

        handHTML.innerHTML = "";

        for(i = 0; i < handLength; i++) {
            handHTML.innerHTML += this.htmlForCardInHand(i);
        }
    }

    htmlForCardInHand(index) {
        var htmlForCard;

        htmlForCard = "<img class='card'";
        htmlForCard += "onclick='game.pushToCrib(" + index + ")'";
        htmlForCard += "src='" + this.hand[index].image + "'";
        htmlForCard += ">";

        return htmlForCard;
    }
}
