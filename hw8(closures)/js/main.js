// ДЗ: Замыкания

// makeProfileTimer

// {
//         let timer = makeProfileTimer()
//     function makeProfileTimer() {
//         let time = performance.now();
//         alert('Замеряем время работы этого alert');  //некий код, время выполнения которого мы хотим измерить с высокой точностью
//         time = performance.now()- time;
//         alert("Время работы alert = " +  time +" микросекунд")
//     }
//     alert(timer());
//      //alert должен вывести время в микросекундах от выполнения makeProfileTimer до момента вызова timer(),
//     // т. е. измерить время выполнения alert
// }

// makeSaver

// {
//     const saver = makeSaver(Math.random)
//     //создает функцию-хранилище результата переданной в качестве параметра функции (Math.random
//     function makeSaver(f) {
//     let random
//     return function() {
//     return random ? random : (random = f())
//     }
// }
//  // в примере). На этом этапе Math.random НЕ вызывается
//     let value1 = saver()              //saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
//     let value2 = saver()              //saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную
//                                       //в makeSaver функцию;
//     console.log(value1 === value2)

//     let saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)])
//     let value3 = saver2()
//     let value4 = saver2()
//     console.log(value3 === value4)
    
//     let namePrompt = prompt.bind(window, 'Как тебя зовут?')
//     let nameSaver = makeSaver(namePrompt)
//     alert(`Привет! Prompt еще не было!`)
//     alert(`Привет ${nameSaver()}. Только что запустился prompt, первый и последний раз`)
//     alert(`Слушай, ${nameSaver()}, го пить пиво. Ведь prompt был только один раз`)


//     // debugger                 // всегда true
// }


// myBind

// {
//     const myBind = function (f, zith, param) {
//     function res(...value) {
//         let a = 0;
//         let b = 0;
//         let [...newParam] = param;
//         for (let item of newParam) {
//             if (item === undefined) {
//                 newParam[a] = value[b]
//                 b++;
//             }
//             a++;
//         }
//         return f.apply(zith, newParam);
//     }
//     return res;
//     }
//     var pow5 = myBind(Math.pow, Math, [undefined, 5])
//     var cube = myBind(Math.pow, Math, [undefined, 3]);
//     alert(pow5(2));//32
//     alert(cube(3));//27
//     var zeroPrompt = myBind(prompt, window, [undefined, "0"])
//     var someNumber = zeroPrompt("Введите число")
//     alert(someNumber); 
//     var chessMin = myBind(Math.min, Math, [, 4, , 5,, 8,, 9])
//     console.log(chessMin(-1,-5,3,15))
//     const bindedJoiner = myBind((...params) => params.join(''), null, [ ,'b', , , 'e', 'f'])//('a','c','d') === 'abcdef'
//     bindedJoiner('a','c','d') === 'abcdef'
//     bindedJoiner('1', '2', '3') === '1b23ef'
//     console.log(bindedJoiner('a','c','d'))
// }