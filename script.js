"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let filmName = prompt("Один из последних просмотренных фильмов?", "");
let filmMark = prompt("На сколько оцените его?", "");

personalMovieDB.movies = {
  filmName : filmMark
};