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
        let handScorer = new HandScorer(this.hand);
        let score = handScorer.scoreHand(starter);
        return score;
    }

    updateHandDisplay() {
        let hand = document.querySelector("#playerHand");
        let handLength = this.hand.length;
        let i;

        hand.innerHTML = "";

        for(i = 0; i < handLength; i++) {
            //handHTML.innerHTML += this.htmlForCardInHand(i);
            let card = document.createElement("img");
            card.setAttribute("class", "card");
            card.setAttribute("src", this.hand[i].image);
            card.setAttribute("cardPlace", i);
            card.addEventListener("click", pushToCrib);
            hand.appendChild(card);
        }
    }

    htmlForCardInHand(index) {
        let htmlForCard;

        htmlForCard = "<img class='card'";
        htmlForCard += "onclick='game.pushToCrib(" + index + ")'";
        htmlForCard += "src='" + this.hand[index].image + "'";
        htmlForCard += ">";

        return htmlForCard;
    }
}

const pushToCrib = event => {
    game.pushToCrib(event.currentTarget.getAttribute("cardPlace"));
}
