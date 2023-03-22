// HW3
// 1
// Створити функцію - конструктор, який буде мати всередині всі властивості об'єкта emplyee з emplyeeArr масиву.

// {
//     function Emplyee(id, name, surname, salary, workExperience, isPrivileges, gender) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.salary = salary;
//         this.workExperience = workExperience;
//         this.isPrivileges = isPrivileges;
//         this.gender = gender;
//     }


//     const emplyeeObj = new Emplyee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');
//     console.log(emplyeeObj)
// }

// {
//     id: 0,
//     name: 'Valeriy',
//     surname: 'Zhmishenko',
//     salary: 1000,
//     workExperience: 10,
//     isPrivileges: true,
//     gender: 'male',
// }
//
// etc.
// 2
// Додати функції - конструктору метод (пам'ятаємо про prototype): getFullName який поверне повне ім'я починаючи з прізвища у вигляді рядка
// employeeObj.getFullName() // 'Zhmishenko Valeriy';

// {
//     function Emplyee(id, name, surname, salary, workExperience, isPrivileges, gender) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.salary = salary;
//         this.workExperience = workExperience;
//         this.isPrivileges = isPrivileges;
//         this.gender = gender;
//     }
    
//     const emplyeeObj = new Emplyee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');

//     emplyeeObj.getFullName = function () {
//     return `${this.surname} ${this.name}`
//     }
//     console.log(emplyeeObj)
// }



// 3
// Створити новий масив на основі emplyeeArr, в якому будуть утримуватися ті ж об'єкти, але створені функцією - конструктором Emploee. Новий масив повинен містити ім'я emplyeeConstructArr.
    
// {
//     function Emplyee(id, name, surname, salary, workExperience, isPrivileges, gender) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.salary = salary;
//         this.workExperience = workExperience;
//         this.isPrivileges = isPrivileges;
//         this.gender = gender;
//     }


//     const emplyeeObj = new Emplyee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');
//     // console.log(emplyeeObj)

//     let createEmployesFromArr = (obj) => {
//         const newEmplyee = [];
//         newEmplyee.splice(1, 0, obj)
//         // for (let elem in obj) {
//         //     newEmplyee.push(elem)
//         //     }
//         return newEmplyee;
//     };
//     const emplyeeConstructArr = createEmployesFromArr(emplyeeObj) /// [{id: 0, name: 'Valeriy', surname: 'Zhmishenko', salary: 1000,  workExperience: 10,  isPrivileges: true, gender:'male' }]
//     console.log(emplyeeConstructArr)
// }

// ДЗ: Массивы

// Confirms
// {
//     let questions = [confirm('Вы любите яблоки?'), confirm('Вы водите машину?'), confirm('Вы человек?')]
//     console.log(questions)
// }

// Prompts
// {
//     let arr = [];
//     arr[0] = prompt('Как вас зовут?');
//     arr[1] = prompt('Какой ваш любимый цвет?');
//     arr[2] = prompt('Сколько вам лет?');
//     console.log(arr)
// }

// Item access
// {
//     arr = ['red', 'blue', 'green'];
//     let index = prompt('Введите индекс от 0 до 2.');
//     console.log(arr, arr[index], arr.length)
// }

// Item change

// {
//     let colors = ['red', 'blue', 'green'];
//     let index = prompt('Введите индекс от 0 до 2.');
//     let color = prompt('Напишите цвет.');
//     colors[index] = color;
//     console.log(colors, index, color )
// }

// Multiply table

// {
//     let arr = Array(5);
// for (let i = 0; i < 5; i++) {
//   arr[i] = [...Array(5)].map((_, j) => i * j);
// }

// console.log(arr)
// console.log(arr[2][3])
// }

// Multiply table slice
// {
//     let arr = Array(5);
// for (let i = 0; i < 5; i++) {
//   arr[i] = [...Array(5)].map((_, j) => i * j);
// }
//     console.log(arr)
//     let arrNew = [];
//     for (Array of arr) {
        
//         delete arr[0];
//         console.log(elemArr)
//         arrNew.push(arr[1].slice(1));
//         // arrNew.push(arr[2].slice(1));
//         // arrNew.push(arr[3].slice(1));
//         // arrNew.push(arr[4].slice(1));
//         console.log(arrNew)
//         // for (let j of elemArr) {
//         //     console.log(j)
//         //     // for (let x = 0; x < elemArr.length; x++) {
//         //     //     if (j[x] === 0) {
//         //     //         delete elemArr[j][x];
//         //     //         console.log(elemArr)
//         //         }

//     }
    
//         }


    // let notNull = '';
    // for (let i = 0; i < 5; i++) {
    //     notNull.push = arr[i + 1].slice(1);
    //     notNull += [];
    //         // .join(' ') + '\n';
    // }
    // console.log(notNull)
// }


// IndexOf Word

// {
//     let str = prompt('напишите предложение.');
//     let word = prompt('Напишите искомое слово.');
//     let arr = str.split(' ');
//     let number = arr.indexOf(word);
//     if (number !== -1) {
//         console.log(arr.indexOf(word))
//     } else {
//         console.log('Такого слова нет.')
//     }
// }

// Reverse

// {
//     let arr = [];
//     arr.push(prompt('Введите первый элемент.'), prompt('Введите второй элемент.'), prompt('Введите третий элемент.'), prompt('Введите четвертый элемент.'), prompt('Введите пятый элемент.'));
//     console.log(`Первый массив:`, arr);
//     let arrNew = [];
//     let elem1 = arr.pop();
//     let elem2 = arr.pop();
//     let elem3 = arr.pop();
//     let elem4 = arr.pop();
//     let elem5 = arr.pop();
//     arrNew.push(elem1, elem2, elem3, elem4, elem5);

//     console.log(`Второй массив:`, arrNew);

// +

// // Reverse 2
    
//     let arrUnshift = [];
//     let element1 = arrNew.shift();
//     let element2 = arrNew.shift();
//     let element3 = arrNew.shift();
//     let element4 = arrNew.shift();
//     let element5 = arrNew.shift();
//     arrUnshift.unshift(element5, element4, element3, element2, element1);
//     console.log(`Третий массив:`,arrUnshift)
// }

// Copy

// {
//     let arr = [];
//     for (let i = 1; i < 6; i++){
//         for (let y = 1; y < 6; y++){
//             arr += i * y+'      ';
//             if (y >= 5) {
//                 arr+= '     \n';
//     }
//         }
//     }
//     console.log(arr)

//     let arr2 = arr;
//     console.log(arr2)
// }

// Destruct/Destruct default

// {
//     let str = prompt('Введите строку.');
//     let [, a = !, , b = !, c = !] = str;
//     console.log(str, a, b, c)
// }

// For Alert

// {
//     let names = ["John", "Paul", "George", "Ringo"];
//     for (let name of names) {
//         alert(`${name}`)
//     }
// }

// For Select Option

{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    for (let currency of currencies) {
        str += `<option> ${currency}</option>`
    }
    str += "</select>"
    document.write(str) //document.write отобразит ваш HTML на странице
}


// For Table Horizontal

// {
//     const names = ["John", "Paul", "George", "Ringo"]
// let   str = "<table>"
//     for (let name of names) {
//     str+=`<td style = 'border: 2px solid;'>${name}</td>`
// //    YOUR MAGIC HERE
// }
// str+= "</table>"
// document.write(str) //document.write отобразит ваш HTML на странице
// }

// For Table Vertical

// {
//     const names = ["John", "Paul", "George", "Ringo"]
//     let str = "<table>"
//     for (let name of names) {
//         str += `<tr><td>${name}</td></tr>`;
//         //    YOUR MAGIC HERE
//     }
//     str += "</table>"
//     document.write(str) //document.write отобразит ваш HTML на странице
// }

// For Table Letters
// {
//     const currencies = ["USD", "EUR", "GBP", "UAH"]
//     let str = "<table style = 'border: 1px solid; '>"
//     for (let currency of currencies) { //цикл создает строки
//         //одна итерация цикла создает ОДНУ СТРОКУ
//         "<tr>"
//         console.log(currency)
//         for (let letter of currency) { //цикл создает ЯЧЕЙКИ в ОДНОЙ СТРОКЕ
//             //одна итерация цикла создает ОДНУ ЯЧЕЙКУ
//             str += `<td style = 'border: 1px solid; '>${letter}</td>`
//             console.log(letter)
//         }
//         str += "</tr>"
//     }
//     str += "</table>"
//     document.write(str) //document.write отобразит ваш HTML на странице
// }

// Function Capitalize

// {
//     const capitalize = str => {
//         let str2 = str.slice(0, 1).toUpperCase();
//         let str4 = str.slice(1).toLowerCase();
//         let result = str2 + str4;
    
//         return result //именно этот код обеспечит возврат результата функции
//     }
//     console.log(capitalize("cANBerRa")) //Canberra
// }

// ДЗ: Циклы

// while confirm
// {
//     let i = 0
//     while (!confirm('Вы устали?')) {
//         alert('Еще поработаем?')
//         i++
//     }
//     alert(`Вам надоело за ${i} раз.`)
// }

// array fill

// {
//     let questions = [];
//     while (question = prompt("Напишите вопрос.")) {
//         questions.push(question);
//     }
//     console.log(questions)
// }

// array fill nopush

// {
//     let questions = [];
//     let i = 0;
//     while (question = prompt("Напишите вопрос.")) {
//         questions[i++] = question;
//     }
//     console.log(questions)
// }

// infinite probability

// {

//     function rnd() {
//         let i = 0;
//         for (i; (a = Math.random()) < 0.9; i++) {
            
//             console.log(i, a);
//             if ((a = Math.random()) > 0.9) {
//                 console.log(a);
//                 break
//             }
//         }
//         alert(`Цикл длился ${i} раз.`)
//     }
//     rnd ()
// }

// empty loop

// {
//     let str;
//     while (str == prompt("напишите число")) {

//     }
//     alert("Вам надоело");
// }

// progression sum

// {
//     let i = 1;
//     let s;
//     function sum(n) {
//         for ( s = i; i < n; i += 3, s += i) { };
//         return s;
//     }
//     alert(sum(13));
// }

// chess one line

// {
//     let str = "";
//     let lattice = "#";
//     let space = " ";
//     for (let i = 0; i < 11; i++) {
//         if (i % 2) {
//             str += space;
//         } else {
//             str += lattice;
//         }
//         console.log(i, str)
//     }
// }

// numbers

// {
//     let str10 = "";
//     for (let i = 0; i < 10; i++){
//         for (let j = 0; j < 10; j++){
//             str10 += j;
//             }
//         str10 += "\n";
//         }
//     console.log(str10)
// }

// chess

// {
//     let str10 = "";
//     for (let i = 0; i < 10; i++){
//         if (i % 2) {
//             for (let j = 0; j < 20; j++) {
//                 if (j % 2) {
//                     str10 += "#";
//                 } else {
//                     str10 += "."
//                 }
//             }
//         } else {
//             for (let j = 0; j < 20; j++) {
//                 if (j % 2) {
//                     str10 += ".";
//                 } else {
//                     str10 += "#"
//                 }
//             }
//         }
//         str10 += "\n";
//         }
//     console.log(str10)
// }

// cubes

// {
//     let arr = [4,8,6,2,9]
//     let arrСube = []
//         for(let i=0; i<arr.length;i++){
//             arrСube.push(i**3)
//         }
//     console.log(arrСube)
// }

// multiply table

// {
//     for (let i = 1; i < 7; i++) {
//         let arr=[];
//         for (let j = 1; j < 7; j++){
//             arr.push(j*i)
//         }
//         console.log(arr)
//     }
// }

// read array of objects

// {
//     const array = [];
//     function readArrayOfObjects() {
//         const object = {};
//         while (object[prompt("key")] = prompt("value")) {
//             console.log(object);
//             }
//         array.push(object);
//         alert("Обект ввели");
//         confirm("Продолжим?") ? readArrayOfObjects() : console.log("Закончили");
//         return array
//     }
//     readArrayOfObjects()
//     console.log("Массив:", array)
// }

// ромбик

// {
//     let a = '#';
//     let s = '.';
//     let str = "";
//     let num = 11;
//     let numarray = [1, 3, 5, 7, 9, 11, 9, 7, 5, 3, 1];
//     let dots;

//     numarray.forEach((elem) => {
//         dots = (num - elem) / 2;
//         for (i = 0; i < dots; i++) {
//             str += s;
//         }
//         for (i = 0; i < elem; i++) {
//             str += a;
//         }    
//         for (i = 0; i < dots; i++) {
//             str += s;
//         }
//         str += `\n`;
//     })
//     console.log(str);
// }