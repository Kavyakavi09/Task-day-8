class Movie {
	// a) constructor
	// b) "PG" as default when no rating is provided.
	constructor(title, studio, rating = "PG") {
		this.title = title;
		this.studio = studio;
		this.rating = rating;
	}

	// c) get movies with only PG rated
	 getPG(movies) {
		let result = movies.filter((film) => {
			 film.rating === "PG" 
			 return true;
		});
		return result;
	}
}

// d) created given instance

let movieTitle = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(movieTitle);
let movies1 = ["Casino Royale","Harry Potter","PG"];
console.log(movieTitle.getPG(movies1))




// or)
class movie {
  constructor(title , studio , rating ="PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }   
   getPG(movieArrays){
   return movieArrays.filter(movie => movie.rating == "PG");
   }  
  }
  let movie1 = new movie("Iron man" , "marvel studios" ,"PG");
  let movie2 = new movie("joker" , "DC studios" ,"R");
  const movieArray = [movie1 , movie2];
  let movie3 = new movie(movieArray); //instance
  
let film = new movie("Kings Man" , "Marv Films Cloudy Productions TSG Entertainment" ,"PG13");

console.log(film);
console.log(movie3.getPG(movieArray))