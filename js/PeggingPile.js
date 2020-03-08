class PeggingPile {
    constructor() {
        this.pile = [];
        this.count = 0;
    }

    addToPile(card) {
        this.pile.push(card);
    }

    addToScore(card) {
        this.count += card.value;
    }

    scorePile() {
        var score = 0;

        score += this.checkForPairs();
        score += this.checkForFifteen();
        score += this.checkForThirtyOne();
        score += this.checkForRun();

        return score;
    }

    checkForPairs() {
        var i;
        var pile = this.pile;
        var numOfCardsInPile = pile.length;
        var score = 12;

        //check for double pair
        if (numOfCardsInPile >= 4) {
            i = numOfCardsInPile - 4;
            for (i = i; i < numOfCardsInPile - 1; i++) {
                if (pile[i].rank !== pile[i + 1].rank) {
                    break;
                }

                if (i === numOfCardsInPile - 2) {
                    return score;
                }
            }
        }

        //check for triple
        score = 6;
        if (numOfCardsInPile >= 3) {
            i = numOfCardsInPile - 3;
            for (i = i; i < numOfCardsInPile - 1; i++) {
                if (pile[i].rank !== pile[i + 1].rank) {
                    break;
                }

                if (i === numOfCardsInPile - 2) {
                    return score;
                }
            }
        }

        //check for pair
        score = 2;
        if (numOfCardsInPile >= 2) {
            if (pile[numOfCardsInPile - 2].rank === pile[numOfCardsInPile - 1].rank) {
                return score;
            } else {
                return 0;
            }
        }

        return 0;
    }

    checkForFifteen() {
        if (this.count === 15) {
            return 2;
        } else {
            return 0;
        }
    }

    checkForThirtyOne() {
        if (this.count === 31) {
            return 1;
        } else {
            return 0;
        }
    }

    checkForRun() {
        var tempCardsToCheck;
        var i;
        var j;
        var score = 0;
        const NUM_CARDS_IN_PILE = this.pile.length;

        if (NUM_CARDS_IN_PILE >= 3) {
            //starting from the bottom of the pile, this loop sets the number
            //of cards you're checking for a run in
            for (i = 0; i < NUM_CARDS_IN_PILE - 2; i++) {
                tempCardsToCheck = this.pile.slice(i, NUM_CARDS_IN_PILE);
                tempCardsToCheck.sort(function(a, b){return a.rank - b.rank});

                score = tempCardsToCheck.length;
                //this loop actually checks for the run
                for (j = 0; j < score - 2; j++) {
                    if (tempCardsToCheck[j].rank !== tempCardsToCheck[j + 1].rank - 1) {
                        score = 0;
                        break;
                    }
                }

                if (score > 0) {
                    return score;
                }
            }
        }

        return 0;
    }

    cardCanBePlayed(card) {
        var tempCount = this.count + card.value;
        const PEGGING_MAX_COUNT = 31;

        if (tempCount > PEGGING_MAX_COUNT) {
            return false;
        } else {
            return true;
        }
    }
}
