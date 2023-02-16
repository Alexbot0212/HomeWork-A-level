// DOM

// Number: divide

// {
//     let divide;
//     function calk(x,y) {
//         divide = Math.floor(x / y);
//         return divide;
//     }
//     console.log(calk(10,3))
    
// }

// Divide DOM

// {
//     const input = document.createElement("input");
//     input.type = "number";
//     input.id = "firstNumber";
//     const inputToo = document.createElement("input");
//     inputToo.type = "number";
//     inputToo.id = "secondNumber";
//     const div = document.createElement("div");
//     div.id = "divisionResult";
//     div.innerHTML ='<P> Результат:</p>'
//     document.body.append(input);
//     document.body.append(inputToo);
//     document.body.append(div);
//     const calcResult = () => {
//         const result = Math.floor(firstNumber.value/secondNumber.value)
//         console.log(result)
//         divisionResult.innerHTML = `Результат деления двух чисел: <strong>${result}</strong><br/>`
//     }
//     firstNumber.oninput = secondNumber.oninput = calcResult
// }

// closure calc

// {
//     fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//         .then(data => {
//             const entrance = Object.entries(data.rates)
//             for (const [key, value] of entrance) {
//                 const buttonCurrency = document.createElement("button")
//                 buttonCurrency.innerText = key
//                 document.body.append(buttonCurrency)
//                 buttonCurrency.onclick = () => {
//                     alert(`Вы выбрали: ${key}`)
//                     let sum = prompt("Введите сумму для обмена")
//                     let result = (sum / value).toFixed(1)
//                     console.log(`За ${sum} ${key}, вы получите ${result} USD`)
//                 }
//             }
//             //эта функция запускается когда данные скачиваются.
//             //остальной код работает РАНЬШЕ.
//             //только ТУТ есть переменная data со скачанными данными
//             console.log(entrance) //изучите структуру, получаемую с сервера в консоли
//         })
// }


// closure calc 2

// {
//     fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//         .then(data => {
//             const entrance = data.rates
//             let rate = {}
//             for (let key in entrance) {
//                 let option = document.createElement("option")
//                 option.innerHTML = key
//                 from.append(option)
//                 option = document.createElement("option")
//                 option.innerHTML = key
//                 to.append(option)
//                 let rateKey = {}
//                 rate[key] = rateKey
//                 for (let reRate in entrance) {
//                     rateKey[reRate] = entrance[reRate] / entrance[key]
//                     // console.log(reRate)
//                 }
//             }
//             const resultCalc = () => {
//             const fromValue = from.value
//             const toValue = to.value
//             const sum = amount.value
//             const rates = rate[fromValue][toValue]
//             result.innerHTML = (sum * rates) ;
//                 rate.innerHTML = sum
//                 console.log(fromValue)
//             }
//             from.onchange = resultCalc
//             to.onchange = resultCalc
//             amount.oninput = resultCalc
//             console.log(from.onchange)
//         }
//     )
// }

// countries and cities


{
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
        .then(data => {
            let countries = Object.keys(data)
            for (let key of countries) {
                let option = document.createElement("option")
                option.innerHTML = key
                from.append(option)
            }
            from.onchange = () => {
                to.innerHTML = ""
                const fromValue = from.value
                const cities = data[fromValue]
                for (const city of cities) {
                    option = document.createElement("option")
                    option.innerHTML = city
                    to.append(option)
                }
            }
                    
                
            
            // console.log(data[fromValue])
            
            //эта функция запускается когда данные скачиваются.
            //остальной код работает РАНЬШЕ.
            //только ТУТ есть переменная data со скачанными данными
            console.log(data) //изучите структуру, получаемую с сервера в консоли
        })
}
