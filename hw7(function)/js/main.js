// Function


// createPerson

{
    function createPerson(name, surname){
        let person = {};
        person.name = name;
        person.surname = surname;
        person.fathername = "";
        person.getFullName = function () {
            return `${this.name} ${this.fathername} ${this.surname} `
        }
        return person
    }
    const a = createPerson("Вася", "Пупкин")
    const b = createPerson("Анна", "Иванова")
    const c = createPerson("Елизавета", "Петрова")
    a.fathername = 'Иванович'
    b.fathername = 'Ивановна'
    c.fathername = 'Ивановна'
    console.log(a.getFullName())
    console.log(b.getFullName())
    console.log(c.getFullName())
}


// createPersonClosure

// {
    
//     function createPersonClosure(name, surname) {
//         let age, fathername;
//         function getName() {
//             return name;
//         }
//         function getSurname() {
//             return surname;
//         }
//         function getFatherName() {
//             return fathername;
//         }
//         function getAge() {
//             return age;
//         }
//         function getFullName() {
//             return `${name} ${surname} ${fathername}`;
//         }
//         function setName(newName) {
//             if (newName.charAt(0) === newName.charAt(0).toUpperCase()) {
//                 name = newName
//             } else {
//                 return name;
//             }
//             return name;
//         }
//         function setSurname(newSurname) {
//             if (newSurname.charAt(0) === newSurname.charAt(0).toUpperCase()) {
//                 surname = newSurname;
//             } else {
//                 return surname;
//             }
//             return surname;
//         }
//         function setFatherName(newFatherName) {
//             if (newFatherName.charAt(0) === newFatherName.charAt(0).toUpperCase()) {
//                 fathername = newFatherName;
//             } else {
//                 return fathername;
//             }
//             return fathername;
//         }
//         function setAge(userAge) {
//             if (userAge > 0 && userAge < 100) {
//                 age = userAge;
//             } else {
//                 age;
//             }
//             return age;
//         }
//         function setFullName(newFullName) {
//             const arrayFullName = newFullName.split(' ')
        
//             setSurname(arrayFullName[0])
//             setName(arrayFullName[1])
//             setFatherName(arrayFullName[2])
//             return newFullName
//             }
//             return {
//                 getName,
//                 setName,
//                 setAge,
//                 getAge,
//                 getFatherName,
//                 setFatherName,
//                 getSurname,
//                 setSurname,
//                 getFullName,
//                 setFullName,
//             }
//         }
    

//         const a = createPersonClosure("Вася", "Пупкин")       // const b = createPersonClosure("Анна", "Иванова")
//         console.log(a)
//         a.setName("миша")
//         a.setAge(50)
//         console.log(a.getAge(), a.getName())
//         a.setFullName("Петрова анна Николаевна")
//         console.log(a.getFullName())
//         console.log(a.getFatherName())
//         console.log(a.getName())
//         console.log(a.getSurname())

// }


// createPersonClosureDestruct

// {
//     function createPerson(name, surname){
//         let person = {};
//         person.name = name;
//         person.surname = surname;
//         person.getFullName = function () {
//             return `${this.name} ${this.surname} ${this.fathername}`
//         }
//         return person
//     }
    
//     function createPersonClosureDestruct(person) {
//         let {name= "Анон", surname = "Анонов", fathername = "Анонович", age = 30} = person;
//         function getName() {
//             return name;
//         }
//         function getSurname() {
//             return surname;
//         }
//         function getFatherName() {
//             return fathername;
//         }
//         function getAge() {
//             return age;
//         }
//         function getFullName() {
//             return `${name} ${surname} ${fathername}`;
//         }
//         function setName(newName) {
//             if (newName.charAt(0) === newName.charAt(0).toUpperCase()) {
//                 name = newName
//             } else {
//                 return name;
//             }
//             return name;
//         }
//         function setSurname(newSurname) {
//             if (newSurname.charAt(0) === newSurname.charAt(0).toUpperCase()) {
//                 surname = newSurname;
//             } else {
//                 return surname;
//             }
//             return surname;
//         }
//         function setFatherName(newFatherName) {
//             if (newFatherName.charAt(0) === newFatherName.charAt(0).toUpperCase()) {
//                 fathername = newFatherName;
//             } else {
//                 return fathername;
//             }
//             return fathername;
//         }
//         function setAge(userAge) {
//             if (userAge > 0 && userAge < 100) {
//                 age = userAge;
//             } else {
//                 age;
//             }
//             return age;
//         }
//         function setFullName(newFullName) {
//             const arrayFullName = newFullName.split(' ')
        
//             setSurname(arrayFullName[0])
//             setName(arrayFullName[1])
//             setFatherName(arrayFullName[2])
//             return newFullName
//             }
//             return {
//                 getName,
//                 setName,
//                 setAge,
//                 getAge,
//                 getFatherName,
//                 setFatherName,
//                 getSurname,
//                 setSurname,
//                 getFullName,
//                 setFullName,
//             }
//         }
//             const a = createPersonClosureDestruct(createPerson("Вася", "Пупкин"))
//             const b = createPersonClosureDestruct({name: 'Николай', age: 75})


//         console.log(b.getFullName(), b.getAge())
//         console.log(a.getFullName())

// }


// isSorted

// {
//     let allNumber = true;
//     const isSorted = (...params) => {
//         params = params.map((param) => {
//             return +param;
//         })
//         for (let elem of params) {
//         if (isNaN(elem)) {
//             allNumber = false;
//             }
//         }
//         let arr = [];
//         if (allNumber) {
//             for (let elem of params) {
//             arr = params.sort(function (a, b) {
//                     return a - b
//                 })
//             }
//         }
//         if (arr.length > 0) {
//             console.log(arr);
//             return arr;
//         } else {
//             console.log("Вы ввели букву")
//         }
//     }
//     isSorted(2,1,7,3,10,9,5)
// }

// Test isSorted

// {
//         let allNumber = true;
//         let isSorted = (...params) => {
//             while (a = +prompt("Напишите шота")) {
//                 params.push(a)
//             }
//             params = params.map((param) => {
//                 return +param;
//             })
//             for (let elem of params) {
//                 if (isNaN(elem)) {
//                     allNumber = false;
//                 }
//             }

//             let arr = [];
//             if (allNumber) {
//                 for (let elem of params) {
//                     arr = params.sort(function (a, b) {
//                         return a - b
//                     })
//                 }
//             }
//             if (arr.length > 0) {
//                 console.log(arr);
//                 return arr;
//             } else {
//                 console.log("Вы ввели букву")
//             }
//         }

//         isSorted()
// }