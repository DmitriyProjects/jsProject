'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");

for (let i = 1; i < 3; i++) {
  var a = prompt("Один из последних просмотренных фильмов?", ""),
      c = a;
  var b = prompt("На сколько оцените его?", ""),
      d = b;
  
  if (a || b || c || d === "") {
    do {
      
    }
  }
  else if (a, b, c, d == null) {
    continue;
  }
  else if (a.length, b.length, c.length, d.length >= 50){
    continue;
  }
}

if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);