// 1. Напишіть функцію avg, яка повертає середнє значення переданого масиву (якщо довжина масиву дорівнює нулю, то має повернутися 0).

// {
//     let sumAverage = 0;
//     function avg(array) {
//         let sum = 0;
//         for (let i = 0; i < array.length; i++) {
//                 sum = sum + array[i];
//                 sumAverage = sum / array.length;
//                 }
//         return sumAverage
//     }
//     console.log(avg([]));
//     console.log(avg([0, 1, 2, 3, 4, 5]));
//     console.log(avg([22, 34, 62, 99]));
//     console.log(avg([1000, 2056, 3444, 1237]));
// }



// console.log(avg([])); // 0
// console.log(avg([0, 1, 2, 3, 4, 5])); // 2.5
// console.log(avg([22, 34, 62, 99])); // 54.25
// console.log(avg([1000, 2056, 3444, 1237])); // 1934.25

//------------------------

// 2. Напишіть функцію power для обчислення степені числа
// {
//     function power(a, b) {
//         let degree = a;
//         for (let i = 1; i < b; i += 1) {
//             degree *= a;
//         }
//         return degree;
//     }


//     console.log(power(2, 3)); // 8
//     console.log(power(4, 2)); // 16
//     console.log(power(3, 4)); // 81
//     console.log(power(10, 3)); // 1000
// }
//------------------------

// 3. Напишіть функцію squareDigits, яка приймає число та зводить у квадрат кожен символ.

{

    function squareDigits(a) {
        let str = String(a);
        let str2 = 0;
        for (let i = 0; i < str.length; i++) {
            str2 += String(str[i] ** 2);
    
        }
        str2 = str2.slice(1);
        return str2
    }


    console.log(squareDigits(91)); // 811
    console.log(squareDigits(0)); // 0
    console.log(squareDigits(867)); // 643649

}

//------------------------



// 4. Напишіть функцію isPalindrome, яка перевіряє, чи переданий рядок є паліндромом.
// Паліндром - це слово, фраза чи послідовність, які читаються так само як уперед, назад, наприклад, level.

// {
//     function isPalindrome(a) {
//         let str5 = a;
//         let arr = str5.split('');
//         let arr2 = [...arr]
//         let reversed2 = arr.reverse();
//         let isEqual = JSON.stringify(arr2) === JSON.stringify(reversed2);
//         console.log(isEqual);
//         console.log(arr2);
//         console.log(reversed2);
        
        
//     }
//     console.log(isPalindrome('level')); // true
// console.log(isPalindrome('topot')); // true
// console.log(isPalindrome('вимив')); // true
// console.log(isPalindrome('анна')); // true
// console.log(isPalindrome('алла')); // true
// console.log(isPalindrome('дід')); // true
// console.log(isPalindrome('ротатор')); // true
// console.log(isPalindrome('радар')); // true
// console.log(isPalindrome('привіт')); // false
// console.log(isPalindrome('що')); // false
// console.log(isPalindrome('that'));  // false
// }



//------------------------

// 5. Написати функцію stringTransformer, яка буде трансформувати рядок за такими правилами:

// {
//     function stringTransformer(a) {
//         let str = a;
//         let arr = str.split(' ');
//         let reversed2 = arr.reverse();
//         str = arr.join(' ');
//         let i = 0;
//         let   result = ''
//         for (let character of str){
//         result += (str[i]!==str[i].toUpperCase()) ? character.toUpperCase() : character.toLowerCase()
//         i++;
//     }
// console.log(result)
//     }
//     console.log(stringTransformer('torininGEN THE bEst'));
//     console.log(stringTransformer('JavaScript IS cool LANGUAGE'));
// }


// 1) Змінити регістр кожного знака, тобто. нижній регістр у верхній регістр, верхній регістр у нижній регістр. (наприклад 'FizzBuzz'-> 'fIZZbUZZ');
// 2) Змінити порядок слів на зворотний (наприклад, 'pen pineapple apple PEN' --> 'pen APPLE PINEAPPLE PEN'). // Done


// console.log(stringTransformer('torininGEN THE bEst'));
// BeST the TORININgen

// console.log(stringTransformer('JavaScript IS cool LANGUAGE'));
// language COOL is jAVAsCRIPT


//------------------------

// 6. Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами

// {
//     function inquiry() {
//         let number1 = +prompt("Введите первое число.");
//         // let sign = +prompt("Введите знак математической операции (+, -, *, /): ");
//         if (isNaN(number1)) {
//             alert("Вы ввели не число. Повторите попытку.");
//         } else {
//             let number2 = +prompt("Введите второе число.");
//             if (isNaN(number2)) {
//                 alert("Вы ввели не число. Повторите попытку.");
//             } else {
//                 let sign = prompt("Введите знак математической операции (+, -, *, /).");
//                 if (sign === "+") {
//                     result = number1 + number2;
//                     alert(`${result}`);
//                 } else if (sign === "-") {
//                     result = number1 - number2;
//                     alert(`${result}`)
//                 } else if (sign === "*") {
//                     result = number1 * number2;
//                     alert(`${result}`)
//                 } else if (sign === "/") {
//                     result = number1 / number2;
//                     alert(`${result}`)
//                 } else {
//                     alert("Вы ввели не знак. Повторите попытку.")
//                 }

//             }
//         }
        
//     }
//     inquiry()
// }    



// Технічні вимоги:

// Взяти за допомогою модального вікна браузера два числа. ( функцією )
// Взяти за допомогою модального вікна браузера математичну операцію, яку потрібно здійснити. Сюди можна ввести +, -, *, /. ( функцією )
// Створити функцію, в якій провести запит чисел, мат. операції та виконати обчислення )
// Вивести у консоль результат виконання функції.
//
// Необов'язкове завдання додаткової складності:
//
// Після введення даних додати перевірку їхньої коректності.
// Якщо користувач не ввів числа, або при введенні вказав не числа - запитати обидва числа заново
// Якщо користувач вві неправильний символ - запитати ще раз
