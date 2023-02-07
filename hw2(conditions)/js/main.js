// ДЗ: Ветвления


// blocks
// {
// let a = 10
// {
//     let b = 20
//     {
//         let c = 30
//         //какие тут будут значения переменных a=10,b=20,c=30,d= is not defined
//         console.log(a,b,c)
//         b++
//         a *= 10
//     }
//     {
//         let c = 50
//         console.log(a,b,c)
//         //какие тут будут значения переменных a=100,b=21,c=50,d=is not defined
//         b += 500
//     }
//     {
//         const a = 100500
//         const d = "value"
//     console.log(a,b,d)
//         //какие тут будут значения переменных a=100500,b=521,c=is not defined,d="value"
//         {
//             let a = -50
//             b = 1000
//             console.log(a,b,d)
//             //какие тут будут значения переменных a= -50,b= 1000,c =is not defined,d="value"
//         }
//         console.log(a,b,d)
//         //какие тут будут значения переменных a=100500,b=1000,c=is not defined,d="value"
//     }
//     console.log(a,b)
//     //какие тут будут значения переменных a=100,b=1000,c=is not defined,d=is not defined
// }
// // debugger
// console.log(a)
// //какие тут будут значения переменных a=100,b=is not defined,c=is not defined,d=is not defined
// }
// comparison if

// {
//     var age = +prompt("Сколько вам лет?");
//     if (isNaN(age) || age == " ") {
//         alert("Вы ввели не число или отморозились")
//     }
//     else
//         if (age < 0) {
//             alert("вы в проекте");
//         }
//         else {
//             if (age <= 18) {
//                 alert("школьник");
//             }

//             else {
//                 if (age > 18 && age <= 30) {
//                     alert("молодеж");
//                 }
    
//                 else {
//                     if (age > 30 && age <= 45) {
//                         alert("зрелость");
//                     }
    
//                     else {
//                         if (age > 45 && age <= 60) {
//                             alert("закат");
//                         }
    
//                         else {
//                             if (age > 60 && age <= 120) {
//                                 alert("как пенсия?");
//                             }
    
//                             else {
//                                 if (age > 120) {
//                                     alert("то ли киборг, то ли KERNESS");
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
// }

// switch: if

// {
//     let color = prompt("Введите цвет", "");
//     if (color == "red") {
//         document.write("<div style='background-color: red;'>красный</div>")
//         document.write("<div style='background-color: black; color: white;'>черный</div>");
//     } else if(color == "black") {
//         document.write("<div style='background-color: black; color: white;'>черный</div>");
//     }
//     else if (color == "blue") {
//         document.write("<div style='background-color: blue;'>синий</div>")
//         document.write("<div style='background-color: green;'>зеленый</div>");
//     } else if(color == "green") {
//         document.write("<div style='background-color: green;'>зеленый</div>");
//     } else {
//         document.write("<div style='background-color: gray;'>Я не понял</div>");
//     }
// }

// noswitch
{
    const noSwitch = (key, cases, defaultKey = 'default') => {
        if (drink in cases) { //проверяем наличие введенного пользователем ключа из объекта
            cases[drink]() //запускаем функцию, находящуюся в объекте по ключу из переменной drink
        } else { //если же ключа нет, то делаем default
            cases.default()
        }
        return noSwitch
        //проверка наличия key в cases
        //если есть - достать значение по ключу. это будет функция. Запустить ее
        //если нет - извлечь из объекта cases значение по ключу, имя которого лежит в переменной defaultKey. Запустить
        //пущай функция noSWitch возвращает то, что возвращает одна из функций из объекта
    }



    const drink = prompt("Что вы любите пить")
    noSwitch(drink, {
        воду: () => console.log('Самый здоровый выбор!'),
        чай() {
            console.log('Вкусная и полезная штука. Не переусердствуйте с сахаром')
        },
        "пиво": () => console.log('Хорошо летом, да в меру'),
        виски: function () {
            console.log('Да вы, батенька, эстет! Не забудьте лед и сигару')
        },
        default() {
            console.log('шото я не понял')
        }
    })
}

// closure calc


