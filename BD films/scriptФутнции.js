/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?');
    }
}

start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm () {
    let i = 0;
    do {
        const lastViewedFilm = prompt('Один из последних просмотренных фильмов?');
        const lastFilmMark = +prompt('На сколько оцените его?');
       
    if (
lastViewedFilm != null && lastFilmMark != null && lastViewedFilm != ''&& lastFilmMark != '' && lastViewedFilm.length<50)
     {
            personalMovieDB.movies[lastViewedFilm] = lastFilmMark;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        i++;
    }
    while (  (i < 2) );
}

function decectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    
    } else {
        alert('Произошла ошибка');
    }
}

function showMyDB() {
    if (personalMovieDB.privat !== true) {
        console.log(personalMovieDB);
    } else {
        console.log('Сейчас база закрыта ');
    }
}
showMyDB();


function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres ();

console.log(personalMovieDB.genres);