// HW6
// Objects and Arrays methods
// 1
// Створити функцію, яка буде видаляти людей з масиву за індексом, який ми передамо параметром.
// {
//     const arr = ['Vasya', 'Petya', 'Alexey']
//     removeUser(arr, 2)


//     function removeUser(arr, b) {
//         delete arr[b];
//     }
//     console.log(arr) /// ['Vasya', 'Alexey']
// }
//
// etc.
// 2
// Створити функцію яка поверне всі ключі об'єкта, переданого параметром
// {
//     const obj = { name: 'Vasya', age: 1, color: "black" }
//     getAllKeys(obj) /// ["name", "age"]

//     function getAllKeys(obj) {
//         let objKeys = Object.keys(obj);
//         console.log(objKeys)
//     }
// }



//
// etc.
// 3
// Створити функцію, яка поверне всі значення об'єкта переданого параметром
// {
//     const obj = { name: 'Vasya', age: 1, color: "black" }
//     getAllValues(obj) /// ["Vasya", 1]

//     function getAllValues(obj) {
//         let objValues = Object.values(obj);
//         console.log(objValues)
//     }
// }


// etc.
// 4
// Створити функцію, де ми першим параметром передамо об'єкт з новим кандидатом, а другим параметром - id будь-якого кондидата в масиві condidateArr. Функція повинна буде вставити кандидата переданого через перший параметр до масиву перед кондидатом у якого id одно тому що передали у другому параметрі
// {
// const obj = {
//     id: 3,
//     name: 'Vasya'
// }
// const secondObj = {
//     id: 4,
//     name: 'Katya'
// }
// const arr = [
//     {
//         id: 1,
//         name: 'Kolya'
//     },
//     {
//         id: 2,
//         name: 'Petya'
//     },
// ];

// function insertIntoarr(a, b) {
//     arr.splice(b - 1, 0, a);
// }

// insertIntoarr(obj, 2)
// console.log(arr)
// // /// [ {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]
// //
// insertIntoarr(secondObj, 1)
// console.log(arr)
// // /// [ {id: 4,name: 'Katya'}, {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]
// }
//
//
// 5
// Створіть клас Condidate який прийматиме параметром об'єкт із масиву condidateArr. Додати метод з назвою state що поверне штат у якому живе наш кандидат. Інформація про штат знаходиться у властивості address і це третій запис після коми.
// const condidate = new Condidate(condidateArr[0])
// condidate.state /// Colorado
// etc.
// 6
// Створити функцію яка виведе масив із назвами фірм взятими зі св-ва company. Якщо фірми повторюються в масиві, видалити дублікати. Так само використовуємо масив candidateArr.
// getCompanyNames() /// [""EZENT, "JASPER" ... ]
//
// etc.
//
// 7
// Створити функцію яка виведе мені масив id всіх кандидатів, які були зареєстровані в тому ж році, як і рік зазначений у параметрі.
// getUsersByYear(2017) /// ["e216bc9cab1bd9dbae25637", "5e216bc9e51667c70ee19f4f" ...]
//
// etc.
//
// 8
// Створити функцію яка поверне масив з екземплярами - кандидатами, відфільтрованими за кількістю непрочитаних повідомлень. Дивимося властивість greeting, там зазначено цю кількість у рядку, Вам треба дістати це число з рядка і звіряти з тим, що в параметр вашої функції.
// Так само використовуємо масив candidateArr.
// getCondidatesByUnreadMsg(8) /// [Condidate, Condidate ...]
//
// etc.
// 9
// Створити функцію яка поверне масив за якістю gender.
// Так само використовуємо масив candidateArr.
// getCondidatesByGender('male') /// [Condidate, Condidate ...]
//
// etc.
// 10*
// Створити функцію reduce, join самому як на занятті створювали forEach, map, find, filter і т.д.


class Car {
   #color = 'white';
   get color (){
       return this.#color
   }
   set color (value){
       this.#color = value;
   }
}
let car = new Car()
console.log(car)

car.color = "red"
console.log(car.color)