// Палиндром(строка)
/*
function palindrome(str) {
    str = str.toLowerCase().replace('/s/g', '');
    return str.split('').reverse().join('') == str;
}

console.log(palindrome('Анна'));
console.log(palindrome('монном'));
console.log(palindrome('Мон ном'));

function palindrome2(str) {
    let len = Math.floor(str.lenght / 2);
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[str.lenght - i - 1]) {
            return false;
        }
    }
    return true;
}
*/
