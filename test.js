// ====== Перебор

const arr = [2, 10, 56, 9]; 
    arr.forEach((value, i, arr) => {
     console.log(`В ${i} элементе значение ${value} `);
});


// ===== Сортировка


arr.sort(function(a, b){
    return a - b;
});
console.log(arr);


// ===== Сплит строки

 const str = prompt("", "");
 const product = str.split(', ');

 console.log(product.join('; '));


// Копирование об'екта


const obj = {
    one: 1,
    two: 2,
    three: 3,
    color: {
        blue: 'blue',
        yellow: 'yellow'
    }
};

function copyOfObject(Object){
    let newObject = {};
    for(let key in Object){
        newObject[key] = Object[key];
    }
    return newObject;
}

const copy = copyOfObject(obj);
copy.three = 26;
console.log(obj);
console.log(copy);

// Ключи об'екта

const myObj = {
    name: 'Valera',
    age: '17',
    status: 'doter',
    gender: {
        one: 'action helicopter',
        two: 'dead inside'
    }
};

const flag = Object.keys(myObj);
console.log(flag);

