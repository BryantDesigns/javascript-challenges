/*
  WRITE YOUR SOLUTION HERE
*/
const Movie = (title, director, genre, releaseYear, rating) => {
  return {
    title,
    director,
    genre,
    releaseYear,
    rating,
    getOverview() {
      console.log(
        `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
      );
    }
  }
}

const movieCollection = [];
movieCollection.push(Movie('Star Wars: Episode IV - A New Hope', 'George Lucas', 'Action, Adventure, Fantasy', 1977, 8.6));
movieCollection.push(Movie('Star Wars: Episode V - The Empire Strikes Back', 'George Lucas', 'Action, Adventure, Fantasy', 1977, 8.7));
movieCollection.push(Movie('Star Wars: Episode VI - Return of the Jedi', 'George Lucas', 'Action, Adventure, Fantasy', 1977, 8.3));

movieCollection.forEach(mov => mov.getOverview());
