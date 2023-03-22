// Person Constructor

// {
// function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.fathername = "";
//     this.getFullName = () => {
//             return `${this.name} ${this.fathername} ${this.surname}`
//         }
// }
// const a = new Person("Вася", "Пупкин")
// const b = new Person("Анна", "Иванова")
// const c = new Person("Елизавета", "Петрова")

// console.log(a.getFullName()) //Вася Пупкин
// a.fathername = 'Иванович'    //Вася Иванович Пупкин
// console.log(a.getFullName())
// b.fathername = 'Ивановна'
// console.log(b.getFullName())
// }

// Person Prototype


// {
//     function Person(name, surname, fathername) {
//     this.name = name;
//     this.surname = surname;
//     this.fathername = "";
//     }
    
//     Person.prototype.getFullName = function (){
//         return `${this.name} ${this.fathername} ${this.surname}`
//     }

//     const a = new Person("Вася", "Пупкин")
//     const b = new Person("Анна", "Иванова")
//     const c = new Person("Елизавета", "Петрова")

//     console.log(a.getFullName()) //Вася Пупкин
//     a.fathername = 'Иванович'    //Вася Иванович Пупкин
//     console.log(a.getFullName())
//     console.log(a)
//     console.log(b.getFullName()) //Анна Иванова
// }

// Store

{
function reducer(state, { type, key, value, money }) { //объект action деструктуризируется на три переменных
    if (!state) { //начальная уборка в ларьке:
        return {
            beer: { pieces: 100, price: 50 },
            chips: { pieces: 100, price: 30 },
            sigi: { pieces: 100, price: 70 },
            kassa: 0,
            change: 0,
        }
    }

    if (type === 'КУПИТЬ') { //если тип action - КУПИТЬ, то:
        if (value <= state[key].pieces && money - (value * state[key].price) >= 0) {
            console.log(value, state[key].pieces, money, state[key].price)
            return {
                ...state, //берем все что было из ассортимента
                [key]: {
                    pieces: state[key].pieces - value,                      
                    price: state[key].price,
                    // kassa: state.kassa + (value * state[key].price),
                    // change: money - (value * state[key].price),
                }, //и уменьшаем то, что покупается на количество,
                kassa: state.kassa + (value * state[key].price),
                change: money - (value * state[key].price),
                
            }
        }
         //если мы не поняли, что от нас просят в `action` - оставляем все как есть
    }
    return state
}

function Store(reducer){
    let state = reducer(undefined, {})//стартовая инициализация состояния, запуск редьюсера со state === undefined
    let cbs = []                //массив подписчиков

    this.getState = () => state           //функция, возвращающая переменную из замыкания
    this.subscribe = cb => (cbs.push(cb),   //запоминаем подписчиков в массиве
                             () => cbs = cbs.filter(c => c !== cb)) //возвращаем функцию unsubscribe, которая удаляет подписчика из списка
    this.dispatch  = action => {
        const newState = reducer(state, action)//пробуем запустить редьюсер
        if (newState !== state){ //проверяем, смог ли редьюсер обработать action
            state = newState//если смог, то обновляем state
            for (let cb of cbs)  cb() //и запускаем подписчиков
        }
    }
}
    
// function createStore(reducer) {
//     let state = reducer(undefined, {}) //стартовая инициализация состояния, запуск редьюсера со state === undefined
//     let cbs = []
//     const getState = () => state       //функция, возвращающая переменную из замыкания
//     const subscribe = cb => (cbs.push(cb),   //запоминаем подписчиков в массиве
//         () => cbs = cbs.filter(c => c !== cb)) //возвращаем функцию unsubscribe, которая удаляет подписчика из списка
//     const dispatch = action => {
//         const newState = reducer(state, action) //пробуем запустить редьюсер
//         if (newState !== state) { //проверяем, смог ли редьюсер обработать action
//             state = newState //если смог, то обновляем state 
//             for (let cb of cbs) cb() //и запускаем подписчиков
//         }
//     }
//     return {
//         getState,
//         dispatch,
//         subscribe,
//     }
//     }




    const store = new Store(reducer)
    let range = () => {
        let objStore = store.getState()
    }
    for (let elem in store.getState()) {
        if (elem !== "kassa" && elem !== "change") {
            select.insertAdjacentHTML('beforeend', `<option>${elem}</option>`);
        }
    }
    let buy = () => ({ type: "КУПИТЬ", key: select.value, value: input.value, money: cash.value })
    
    button.onclick = () => {
        store.dispatch(buy())
        range()

    }

    window.onload = () => {
        range()
    }

    console.log(store.getState()) // выведет объект { пиво: 100, чипсы: 100, сиги: 100 }

    const unsubscribe3 = store.subscribe(() => {
        const sweets = Object.entries(store.getState());
        console.log(sweets[3][1]);
        kass.value = sweets[3][1];
        chang.value = sweets[4][1];
        
    })
    
}




// Password

// {
//     function Password(parent, open){
//         this.parent = parent;
//         this.open = open;

//         const inputPassword = document.createElement('input');
//         inputPassword.type = 'password';
//         parent.append(inputPassword);

//         const inputCheck = document.createElement('input');
//         inputCheck.type = 'checkbox';
//         parent.append(inputCheck);

//         this.setValue = (value) => inputPassword.value = value;
//         this.setOpen = (open) => inputPassword.type = open ? 'text' : 'password';

//         this.getValue = () => inputPassword.value;
//         this.getOpen = () => inputPassword.type;

//         inputCheck.onchange = () => this.setOpen(inputCheck.checked);
//         inputCheck.onchange = () => { this.setOpen(inputCheck.checked); this.onOpenChange(inputCheck.checked) };
//         inputPassword.oninput = () => this.onChange(inputPassword.value);
        
//     }
    
//     let pass = new Password(document.body, false);
//     pass.onChange = data => console.log(data);
//     pass.onOpenChange = open => console.log(open);

//     pass.setValue('qwerty1');
//     console.log(pass.getValue());

//     pass.setOpen(false);
//     console.log(pass.getOpen());
// }

// LoginForm

// {
//     function Password(parent, open){
//         this.parent = parent;
//         this.open = open;

//         const inputLogin = document.createElement('input');
//         inputLogin.type = 'text';
//         parent.append(inputLogin);

//         const inputPassword = document.createElement('input');
//         inputPassword.type = 'password';
//         parent.append(inputPassword);

//         const inputCheck = document.createElement('input');
//         inputCheck.type = 'checkbox';
//         parent.append(inputCheck);
//         inputCheck.disabled = 'disabled';

//         this.setValue = (value) => inputPassword.value = value;
//         this.setOpen = (open) => inputPassword.type = open ? 'text' : 'password';

//         this.getValue = () => inputPassword.value;
//         this.getOpen = () => inputPassword.type;

//         this.notDisable = () => {
//             if (inputPassword.value) {
//                 inputCheck.disabled = false;
//             } else {
//                 inputCheck.disabled = true;
//             }
//         }
//         this.disable = () => {
//             this.setOpen(inputCheck.checked)
//             }

//         inputPassword.oninput = () => this.onChange(inputPassword.value);
//         inputPassword.onchange = ()=> this.notDisable();
//         inputCheck.onchange = ()=> this.disable();
//     }
    
//     let pass = new Password(document.body, false);
//     pass.onChange = data => console.log(data);
//     pass.onOpenChange = open => console.log(open);

//     console.log(pass.getValue());

//     pass.setOpen(false);
//     console.log(pass.getOpen());
// }

// LoginForm Constructor


// {
//     function Password(parent, open){
//         this.parent = parent;
//         this.open = open;

//         const inputLogin = document.createElement('input');
//         inputLogin.type = 'text';
//         parent.append(inputLogin);

//         const inputPassword = document.createElement('input');
//         inputPassword.type = 'password';
//         parent.append(inputPassword);

//         const button = document.createElement('input');
//         button.type = 'button';
//         button.value = 'click me';
//         button.disabled = 'disabled';
//         parent.append(button);


//         this.setValue = (value) => inputPassword.value = value;
//         // this.setOpen = (open) => inputPassword.type = open ? 'text' : 'password';

//         this.getValue = () => inputPassword.value;
//         this.getOpen = () => inputPassword.type;

//         this.notDisable = () => {
//             if (inputPassword.value) {
//                 button.disabled = false;
//             } else {
//                 button.disabled = true;
//             }
//         }
//         this.disable = () => {
//             this.setOpen(button.checked)
//             }

//         inputPassword.oninput = () => this.onChange(inputPassword.value);
//         inputPassword.onchange = ()=> this.notDisable();
//         button.onchange = ()=> this.disable();
//     }
    
//     let pass = new Password(document.body, false);
//     pass.onChange = data => console.log(data);
//     pass.onOpenChange = open => console.log(open);

//     console.log(pass.getValue());

//     pass.setOpen(false);
//     console.log(pass.getOpen());
// }

// Password Verify

// {
//     function Password(parent, open) {
//         const pass = 'qwerty';
//         this.parent = parent;
//         this.open = open;

//         const inputPassword = document.createElement('input');
//         inputPassword.type = 'password';
//         parent.append(inputPassword);

//         const inputCheck = document.createElement('input');
//         inputCheck.type = 'checkbox';
//         parent.append(inputCheck);

//         const inputPass2 = document.createElement('input');
//         inputPass2.type = 'password';
//         parent.append(inputPass2);
//         inputPass2.disabled = 'disabled';

//         this.setValue = (value) => inputPassword.value = value;
//         this.setOpen = function(open) {
//             if (inputPassword.type = open) {
//                 inputPassword.type = 'text';
//                 inputPass2.style.display = 'none';
//             } else {
//                 inputPassword.type = 'password';
//                 inputPass2.style.display = 'block';
//             }
//         }
//         this.getValue = () => inputPassword.value;
//         this.getOpen = () => inputPassword.type;


//         this.notDisable = () => {
//             if (inputPassword.value === pass) {
//                 inputPass2.disabled = false;
//                 inputPassword.style.backgroundColor = "green";
//             } else {
//                 inputPass2.disabled = true;
//                 inputPassword.style.backgroundColor = "red"
//             }
//         }
//         this.disable = () => {
//                 if (inputPass2.value === pass) {
//                     inputPass2.style.backgroundColor = "green";
//                 } else {
//                     inputPass2.style.backgroundColor = "red";
//                 }
            
//             }

//         inputCheck.onchange = () => this.setOpen(inputCheck.checked);
//         // inputCheck.onchange = () => { this.setOpen(inputCheck.checked); this.onOpenChange(inputCheck.checked) };
//         inputPassword.oninput = () => this.onChange(inputPassword.value);
//         inputPassword.onchange = ()=> this.notDisable();
//         inputPass2.onchange = ()=> this.disable();
//     }
    
//     let pass = new Password(document.body, false);
//     pass.onChange = data => console.log(data);
//     pass.onOpenChange = open => console.log(open);

//     console.log(pass.getValue());

//     pass.setOpen(false);
//     console.log(pass.getOpen());
// }