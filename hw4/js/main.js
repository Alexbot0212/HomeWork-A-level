// HW 4


// 1) Даний об'єкт з містами та країнами. Вивести масив значення в якому будуть рядки перетворені на цей формат: <Столиця> - це <Країна>.
// {
//     const countryСapital = {
//         Ukraine: "Kyiv",
//         France: "Paris",
//         Montenegro: "Podgorica",
//         Polska: "Warszawa",
//     }
//     for (let key in countryСapital) {
//         console.log(`${countryСapital[key]} - is ${key}`);
//     }
// }

// 2) Створити функцію яка виведе багатовимірний масив A. Даний масив містить список інших масивів B. Масиви B повинні містити по 3 значення. Та вивести його максимальне значення
{
    const array = [[1, 5, 9], [2, 6, 3], [4, 8, 7], [7, 5, 3]];
    function getMaxOfArray() {
        const arrMax = [];
        for (let i = 0; i < array.length; i++) {
            console.log(array[i])
            arrMax.push(Math.max.apply(null, array[i]))
        }
        console.log(arrMax);
    }
        
    getMaxOfArray(array)
    
}

// 3) Створити об'єкт із назвами днів тижня. Де ключами будуть uk і en, a значенням властивості uk буде масив із назвами днів тижня українською, а en - англійською. Після написати функцію яка буде виводити в консоль назву дня тижня, користуючись вище створеним об'єктом. Усі дні тижня починаються з 1 і закінчуються цифрою 7 (1- понеділок, 7 - неділя). Функція отримує змінну lang – назву мови дня тижня та змінну day – число дня тижня.
// {
//     const langs = {
//         uk: ["понеділок", "вівторок", "середа", "четвер", "пятниця", "субота", "неділя"],
//         en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
//     }

//     function oneDay(lang, day) {
//         let arrKeys = Object.keys(langs);
//         let numberLang = arrKeys.indexOf(lang);
//         let arrValues = Object.values(langs);
//         let arrDay = arrValues[numberLang][day-1];
//         console.log(`${day} - ${arrDay}`)
//     }
//     oneDay('uk', 1)
// }
    


// 4) Створіть функцію, яка повертає суму двох найменших позитивних чисел із масиву мінімум 4 позитивних цілих чисел. Не передаються числа з плаваючою комою або непозитивні цілі числа.
// {
//  const arr = [1, 5, 8, 9, 7, 3];
// let results = [];
// let min = arr[0];

// for (let n = 0; n < arr.length; n++) {
//   if (arr[n] < min) {
//     min = arr[n];
//   }
// }
// results.push([min, arr.indexOf(min)]);

// min = arr[1];
// for (let n = 0; n < arr.length; n++) {
//   if (arr[n] < min) {
//     if (n !== results[0][1]) {
//       min = arr[n];
//     }
//   }
// }
// results.push([min,arr.indexOf(min)]);

// let sum = results[0][0] + results[1][0];
// console.log(sum)
// }

    // 5) Даний масив одиниць і нулів, перетворіть еквівалентне двійкове значення ціле число.
    // Наприклад: [0, 0, 0, 1] розглядається як 0001 двійкове уявлення 1.


// {
//     let binary = [1, 0, 0, 1, 0, 0, 1];
//     let str = binary.join('')
//     let digit = parseInt(str, 2);
//     console.log(digit);
// }
