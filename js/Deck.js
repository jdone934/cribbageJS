class Deck {
    constructor() {
        this.newDeck = [
            { id: 'AS', rank: 1, value: 1, suit: 'S', image: "cards/AS.svg" },
            { id: '2S', rank: 2, value: 2, suit: 'S', image: "cards/2S.svg" },
            { id: '3S', rank: 3, value: 3, suit: 'S', image: "cards/3S.svg" },
            { id: '4S', rank: 4, value: 4, suit: 'S', image: "cards/4S.svg" },
            { id: '5S', rank: 5, value: 5, suit: 'S', image: "cards/5S.svg" },
            { id: '6S', rank: 6, value: 6, suit: 'S', image: "cards/6S.svg" },
            { id: '7S', rank: 7, value: 7, suit: 'S', image: "cards/7S.svg" },
            { id: '8S', rank: 8, value: 8, suit: 'S', image: "cards/8S.svg" },
            { id: '9S', rank: 9, value: 9, suit: 'S', image: "cards/9S.svg" },
            { id: 'TS', rank: 10, value: 10, suit: 'S', image: "cards/10S.svg" },
            { id: 'JS', rank: 11, value: 10, suit: 'S', image: "cards/JS.svg" },
            { id: 'QS', rank: 12, value: 10, suit: 'S', image: "cards/QS.svg" },
            { id: 'KS', rank: 13, value: 10, suit: 'S', image: "cards/KS.svg" },
            { id: 'AD', rank: 1, value: 1, suit: 'D', image: "cards/AD.svg" },
            { id: '2D', rank: 2, value: 2, suit: 'D', image: "cards/2D.svg" },
            { id: '3D', rank: 3, value: 3, suit: 'D', image: "cards/3D.svg" },
            { id: '4D', rank: 4, value: 4, suit: 'D', image: "cards/4D.svg" },
            { id: '5D', rank: 5, value: 5, suit: 'D', image: "cards/5D.svg" },
            { id: '6D', rank: 6, value: 6, suit: 'D', image: "cards/6D.svg" },
            { id: '7D', rank: 7, value: 7, suit: 'D', image: "cards/7D.svg" },
            { id: '8D', rank: 8, value: 8, suit: 'D', image: "cards/8D.svg" },
            { id: '9D', rank: 9, value: 9, suit: 'D', image: "cards/9D.svg" },
            { id: 'TD', rank: 10, value: 10, suit: 'D', image: "cards/10D.svg" },
            { id: 'JD', rank: 11, value: 10, suit: 'D', image: "cards/JD.svg" },
            { id: 'QD', rank: 12, value: 10, suit: 'D', image: "cards/QD.svg" },
            { id: 'KD', rank: 13, value: 10, suit: 'D', image: "cards/KD.svg" },
            { id: 'AC', rank: 1, value: 1, suit: 'C', image: "cards/AC.svg" },
            { id: '2C', rank: 2, value: 2, suit: 'C', image: "cards/2C.svg" },
            { id: '3C', rank: 3, value: 3, suit: 'C', image: "cards/3C.svg" },
            { id: '4C', rank: 4, value: 4, suit: 'C', image: "cards/4C.svg" },
            { id: '5C', rank: 5, value: 5, suit: 'C', image: "cards/5C.svg" },
            { id: '6C', rank: 6, value: 6, suit: 'C', image: "cards/6C.svg" },
            { id: '7C', rank: 7, value: 7, suit: 'C', image: "cards/7C.svg" },
            { id: '8C', rank: 8, value: 8, suit: 'C', image: "cards/8C.svg" },
            { id: '9C', rank: 9, value: 9, suit: 'C', image: "cards/9C.svg" },
            { id: 'TC', rank: 10, value: 10, suit: 'C', image: "cards/10C.svg" },
            { id: 'JC', rank: 11, value: 10, suit: 'C', image: "cards/JC.svg" },
            { id: 'QC', rank: 12, value: 10, suit: 'C', image: "cards/QC.svg" },
            { id: 'KC', rank: 13, value: 10, suit: 'C', image: "cards/KC.svg" },
            { id: 'AH', rank: 1, value: 1, suit: 'H', image: "cards/AH.svg" },
            { id: '2H', rank: 2, value: 2, suit: 'H', image: "cards/2H.svg" },
            { id: '3H', rank: 3, value: 3, suit: 'H', image: "cards/3H.svg" },
            { id: '4H', rank: 4, value: 4, suit: 'H', image: "cards/4H.svg" },
            { id: '5H', rank: 5, value: 5, suit: 'H', image: "cards/5H.svg" },
            { id: '6H', rank: 6, value: 6, suit: 'H', image: "cards/6H.svg" },
            { id: '7H', rank: 7, value: 7, suit: 'H', image: "cards/7H.svg" },
            { id: '8H', rank: 8, value: 8, suit: 'H', image: "cards/8H.svg" },
            { id: '9H', rank: 9, value: 9, suit: 'H', image: "cards/9H.svg" },
            { id: 'TH', rank: 10, value: 10, suit: 'H', image: "cards/10H.svg" },
            { id: 'JH', rank: 11, value: 10, suit: 'H', image: "cards/JH.svg" },
            { id: 'QH', rank: 12, value: 10, suit: 'H', image: "cards/QH.svg" },
            { id: 'KH', rank: 13, value: 10, suit: 'H', image: "cards/KH.svg" }
        ]

        this.resetDeck();
    }

    dealCard() {
        var numOfCardsInDeck = this.cardsInDeck.length;
        var indexToDeal = Math.floor(Math.random()*(numOfCardsInDeck - 1));
        var dealtCard = this.cardsInDeck.splice(indexToDeal, 1)[0];
        return dealtCard;
    }

    dealHand() {
        var i;
        const NUM_CARDS_TO_DEAL = 6;
        var dealtCard;
        var cardsToDeal = [];

        for (i = 0; i < NUM_CARDS_TO_DEAL; i++) {
            dealtCard = this.dealCard();
            cardsToDeal.push(dealtCard);
        }

        return cardsToDeal;
    }

    resetDeck() {
        this.cardsInDeck = this.newDeck.slice();
    }
}
