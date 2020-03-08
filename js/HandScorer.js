class HandScorer {
    constructor(cardsToScore) {
	    this.cardsToScore = cardsToScore;
    }

    scoreHand(starter) {
    	var cardsToScore = this.cardsToScore.slice(0, this.cardsToScore.length);
        var score = 0;

    	cardsToScore.push(starter);

    	score += this.scoreFifteens(cardsToScore);
    	score += this.scorePairs(cardsToScore);
    	score += this.scoreFlush(cardsToScore);
        score += this.scoreNobs(cardsToScore);
        score += this.scoreRuns(cardsToScore);

        return score;
    }

    scoreFifteens(cardsToScore) {
    	var i;
    	var j;
        var k;
    	var numOfCardsToScore = cardsToScore.length;
    	var tempTotalValue = 0;
    	var tempCardsToCount;
    	var score = 0;

    	//check all 5 cards
    	for (i = 0; i < numOfCardsToScore; i++) {
    	    tempTotalValue += cardsToScore[i].value;
    	}

    	if (tempTotalValue === 15) {
    	    return 2;
    	}

    	//check 4 cards at a time
    	for (i = 0; i < numOfCardsToScore; i++) {
            tempTotalValue = 0;
            tempCardsToCount = cardsToScore.slice(0, numOfCardsToScore);
            tempCardsToCount.splice(i,1);

            testDiv.innerHTML += "<br>";
            for (j = 0; j < tempCardsToCount.length; j++) {
                tempTotalValue += tempCardsToCount[j].value;
            }

            if (tempTotalValue === 15) {
                score += 2;
            }
        }

        //check 3 cards at a time
        for (i = 0; i < numOfCardsToScore - 1; i++) {
            for (j = i + 1; j < numOfCardsToScore; j++) {
                tempTotalValue = 0;
                tempCardsToCount = cardsToScore.slice(0, numOfCardsToScore);
                tempCardsToCount.splice(j, 1);
                tempCardsToCount.splice(i, 1);

                for (k = 0; k < 3; k++) {
                    tempTotalValue += tempCardsToCount[k].value;
                }

                if (tempTotalValue === 15) {
                    score += 2;
                }
            }
        }

    	//check 2 at a time
    	for (i = 0; i < numOfCardsToScore - 1; i++) {
    	    for (j = i + 1; j < numOfCardsToScore; j++) {
                if (cardsToScore[i].value + cardsToScore[j].value === 15) {
                    score += 2;
                }
    	    }
    	}

        return score;
    }

    scorePairs(cardsToScore) {
        var i;
        var j;
        var score = 0;

        for (i = 0; i < cardsToScore.length - 1; i++) {
            for (j = i + 1; j < cardsToScore.length; j++) {
                if (cardsToScore[i].rank === cardsToScore[j].rank) {
                    score += 2;
                }
            }
        }

        return score;
    }

    scoreRuns(cardsToScore) {
        cardsToScore.sort(function(a, b){return a.rank - b.rank});

        var i;
        var j;
        var score = 0;
        var tempCardsToCount;

        //check all 5 cards
        if (this.checkIfRun(cardsToScore) > 0) {
            return 5;
        }

        //check 4 card runs
        for (i = 0; i < cardsToScore.length; i++) {
            tempCardsToCount = cardsToScore.slice(0, 5);
            tempCardsToCount.splice(i, 1);

            if (this.checkIfRun(tempCardsToCount) > 0) {
                score += 4;
            }
        }

        if (score > 0) {
            return score;
        }

        //check 3 card runs
        for (i = 0; i < cardsToScore.length - 1; i++) {
            for (j = i +1; j < cardsToScore.length; j++) {
                tempCardsToCount = cardsToScore.slice(0,5);
                tempCardsToCount.splice(j, 1);
                tempCardsToCount.splice(i, 1);

                if (this.checkIfRun(tempCardsToCount) > 0) {
                    score += 3;
                }
            }
        }

        return score;
    }

    checkIfRun(cardsToScore) {
        var i;
        var numOfCardsToScore = cardsToScore.length;

        for (i = 0; i < numOfCardsToScore - 1; i++) {
            if (cardsToScore[i].rank + 1 !== cardsToScore[i + 1].rank) {
                return 0;
            }

            if (i === numOfCardsToScore - 2) {
                return numOfCardsToScore;
            }
        }
    }

    scoreFlush(cardsToScore) {
        var i;
        var score = 4;

        for (i = 0; i < cardsToScore.length - 2; i++) {
            if (cardsToScore[i].suit !== cardsToScore[i+1].suit) {
                score = 0;
                return score;
            }
        }

        if (cardsToScore[3].suit === cardsToScore[4].suit) {
            score += 1;
        }

        return score;
    }

    scoreNobs(cardsToScore) {
        var i;
        var numOfCardsToScore = cardsToScore.length;

        for (i = 0; i < numOfCardsToScore - 1; i++) {
            if (cardsToScore[i].rank === 11
                    && cardsToScore[i].suit === cardsToScore[numOfCardsToScore - 1].suit) {
                return 1;
            }
        }

        return 0;
    }
}
