/*
  WRITE YOUR SOLUTION HERE
*/
class Book {
  constructor(title, author, ISBN, availableCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.availableCopies = availableCopies;
  }

  get availability() {
    if (this.availableCopies > 10) {
      return 'In stock';
    } else if (this.availableCopies < 10) {
      return 'Low stock';
    } else {
      return 'Out of stock';
    }
  }

  sell(numCopiesToSell = 1) {
    this.availableCopies -= numCopiesToSell;
  }

  restock(numOfCopiesToRestock = 5) {
    this.availableCopies += numOfCopiesToRestock;
  }
}

const HungerGames = new Book('Hunger Games', 'Suzanne Collins', 123919, 5);
console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);
