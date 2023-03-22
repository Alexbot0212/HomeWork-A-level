// fetch basic
// {
//     fetch('https://swapi.dev/api/people/1/')
//         .then(res => res.json())
//         .then(luke => {
//             const luk = function (dom, json) {
//                 let table = document.createElement('table')
//                 table.style.border = "1px"

//                 for (let key in luke) {
//                     let trTable = document.createElement('tr')
//                     table.append(trTable)
//                     let tdTable = document.createElement('td')
//                     tdTable.innerHTML = key
//                     trTable.append(tdTable)
//                     let tdValue = document.createElement('td')
//                     tdValue.innerHTML = luke[key]
//                     trTable.append(tdValue)
//                 }
//                 document.body.append(table)
//             }

//             luk()
//             console.log(luke)
//         })
// }


// fetch improved

{
    const fetchImproved = function (url, elem) {
    fetch(url)
    .then(res => res.json())
    .then(luke => {
      const lukeSkywalker = function  (dom,json) {
      let table = document.createElement('table')
  
      for( let key in luke) {
        let trTable = document.createElement('tr')
        table.append(trTable)
        let tdTable = document.createElement('td')
        tdTable.innerHTML = key
        trTable.append(tdTable)
        let tdValue = document.createElement('td')
        let value = luke[key]
        let arrOfValue = []

        if ( typeof value === 'string') {
          arrOfValue.push(value)
        } else if (Array.isArray(value)){
          arrOfValue = value.filter(v => typeof v === 'string')
        }
        arrOfValue = arrOfValue.filter(val => val.startsWith('https://swapi.dev/api/'))

        if (arrOfValue.length > 0) {
          for (let urlFromArr of arrOfValue) {
              let div = document.createElement('div')
              tdValue.append(div)
            //   let btn = document.createElement('button')
            let btn = document.createElement('input')
            btn.type = 'checkbox'
            tdValue.append(btn)
            btn.onchange = () => {
            //   btn.style.display = 'block'
                if (btn.checked) {
                    console.log(btn)
                    fetchImproved(urlFromArr, div)
                } else {
                console.log("false")
                    div.classList.add('test');
                }
            }
            
          }
        } else {
          tdValue.innerHTML = luke[key]
        }
        trTable.append(tdValue)
      }
      elem.append(table)
    }
      lukeSkywalker()
      console.log(luke)
    })
  }
  fetchImproved('https://swapi.dev/api/people/1/', document.body)
  fetchImproved('https://swapi.dev/api/people/2/', document.body)
  fetchImproved('https://swapi.dev/api/starships/12/', document.body)
}


//race

// {
//   function delay(ms){ 
//     function executor(fulfill, reject){  
//         setTimeout(() => fulfill(ms), ms) 
//     }
//     return new Promise(executor) 
//   }

//   let myFetch = fetch('https://swapi.dev/api/people/1/')
//     .then(result => 'myFetch')

//   let delayFetch = delay(128)
//     .then(result => 'delayFetch')

//   let date = new Date()

//   Promise.race ([myFetch, delayFetch])
//     .then((result) => {
//       alert(`${result} : ${new Date() - date}`)
//     },
//     () => {
//       alert(`${delayFetch} : ${new Date() - date}`)

//     })
// }


//Promisify: confirm
// {
//   function confirmPromise(text){
//     function choice (fulfill, reject){
//       if (confirm(text)) {
//         fulfill()
//       } else {
//         reject()
//       }
//     }
//     return new Promise(choice)
//   }
  
//   confirmPromise('Промисы это сложно?')
//   .then(
//     () => console.log('не так уже и сложно'),
//     () => console.log('respect за усидчивость и внимательность'))
// }


//Promisify: prompt
// {
//   function promptPromise(text){
//       let question = prompt(text)
//      function name (fulfill, reject){
//        if (question !== null && question !== "") {
//         fulfill(question)
//        } else {
//         reject()
//       }
//      }
//      return new Promise(name)
//    }
  
//    promptPromise("Как тебя зовут?").then(name => console.log(`Тебя зовут ${name}`), 
// () => console.log('Ну зачем морозиться, нормально же общались'))
// }