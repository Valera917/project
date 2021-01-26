const arr = [2, 10, 56, 9];
// arr.forEach((value, i, arr) => {
//     console.log(`В ${i} элементе значение ${value} `);
// });
arr.sort(function(a, b){
    return a - b;
});
console.log(arr);

// const str = prompt("", "");
// const product = str.split(', ');

// console.log(product.join('; '));
