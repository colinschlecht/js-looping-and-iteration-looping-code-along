// Code your solutions in this file

function writeCards(cards, event) {
    let arr = []
    for (let i = 0; i < cards.length; i ++) {
        arr.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return arr
}

function countDown(n) {
    while (n > -1) {
        console.log(n);
        n--;
    }
}