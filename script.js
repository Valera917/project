'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов', ''),
                  b = prompt('На сколько оцените фильм?', '');
            
            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLeve: function() {
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классичесий зритель');
        } else if (personalMovieDB.count >= 30){
            console.log('Вы киноман');
        } else {
            console.log('Error');
        }
    },
    showNyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.private){
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i < 2; i++){
        //     let genres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        //     if(genres != '' || genres != null){
        //         personalMovieDB.genres[i] = genres;
        //     } else {
        //         prompt('Вы ввели некоректные данные');
        //         i--;
        //     }
        // }

        let genres = prompt('Введите любимые жанры через , ');

        if(genres != '' || genres != null){
            personalMovieDB.genres = genres.split(', ');
             } else {
                prompt('Вы ввели некоректные данные');
                i--;
            }
        }

        personalMovieDB.genres.forEach((value, i) =>{
            console.log(`Любимый жанр ${i + 1} = ${value}`);
        });
    }
};
