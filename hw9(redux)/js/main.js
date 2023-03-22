// Redux

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

    
function createStore(reducer) {
    let state = reducer(undefined, {}) //стартовая инициализация состояния, запуск редьюсера со state === undefined
    let cbs = []
    const getState = () => state       //функция, возвращающая переменную из замыкания
    const subscribe = cb => (cbs.push(cb),   //запоминаем подписчиков в массиве
        () => cbs = cbs.filter(c => c !== cb)) //возвращаем функцию unsubscribe, которая удаляет подписчика из списка
    const dispatch = action => {
        const newState = reducer(state, action) //пробуем запустить редьюсер
        if (newState !== state) { //проверяем, смог ли редьюсер обработать action
            state = newState //если смог, то обновляем state 
            for (let cb of cbs) cb() //и запускаем подписчиков
        }
    }
    return {
        getState,
        dispatch,
        subscribe,
    }
    }




    const store = createStore(reducer)
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