/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?');
        }
    },
    rememberMyFilm: () => {
        let i = 0;
        do {
            const lastViewedFilm = prompt('Один из последних просмотренных фильмов?');
            const lastFilmMark = +prompt('На сколько оцените его?');

            if (
                lastViewedFilm != null && lastFilmMark != null && lastViewedFilm != '' && lastFilmMark != '' && lastViewedFilm.length < 50) {
                personalMovieDB.movies[lastViewedFilm] = lastFilmMark;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
            i++;
        }
        while ((i < 2));
    },

    decectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
    
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
    
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
    
        } else {
            alert('Произошла ошибка');
        }
    },

    showMyDB: function() {
        if (personalMovieDB.privat !== true) {
            console.log(personalMovieDB);
        } else {
            console.log('Сейчас база закрыта ');
        }
    },

    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }, 

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {

           let genre =prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == '' || genre == null) {
                console.log('Введите корректніе данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i} - это ${item}`);
        });
    }
};

