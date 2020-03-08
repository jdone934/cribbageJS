class Game {
    constructor() {
        this.deck = new Deck();
        this.player = new Player();
        this.computer = new Computer();
        this.crib = new Crib();
    }

    startGame() {
        game.player.hand = game.deck.dealHand();
        game.player.updateHandDisplay();
    }

    pushToCrib(index) {
        if (this.isRoomInCrib()) {
            var cardForCrib;

            cardForCrib = this.player.removeCardFromHand(index);
            this.crib.addToCrib(cardForCrib);

            this.player.updateHandDisplay();
            this.crib.updateCribDisplayBeforePegging();

            if (this.crib.cardsInCrib.length === 2) {
                this.addSubmitCribButton()
            }
        } else {
            alert("There is no more room in the Crib. Either take a card back "
                    + "to your hand, or submit these cards to the crib.");
        }

    }

    isRoomInCrib() {
        var cribLength;

        cribLength = this.crib.cardsInCrib.length;

        if (cribLength >= 2) {
            return false;
        } else {
            return true;
        }
    }

    addSubmitCribButton() {
        var cribHTML;

        let crib = document.querySelector("#crib");

        let submit = document.createElement("button");
        submit.addEventListener("click", moveToPegging);
        submit.innerHTML = "Submit to Crib!";

        crib.appendChild(submit);
        //crib.innerHTML += "<button onclick='game.moveToPegging()' type='button'>"
        //                            + "Submit to Crib!";
    }

    pushToPlayer(index) {
        var cardForPlayer;

        cardForPlayer = this.crib.removeCardFromCrib(index);
        this.player.addToHand(cardForPlayer);

        this.player.updateHandDisplay();
        this.crib.updateCribDisplayBeforePegging();
    }

    moveToPegging() {
        var compCardsForCrib;

        compCardsForCrib = this.computer.chooseCardsForCrib();
    }
}

const moveToPegging = event => {
    console.log("Pegging!");
}
