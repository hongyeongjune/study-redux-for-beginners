import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const text = document.querySelector("span");

const reducer = (state = 0, actions) => {
    if (actions.type === 'ADD') {
        return state + 1;
    } else if (actions.type === 'MINUS') {
        return state - 1;
    }
    return state;
};

const store = createStore(reducer);

store.dispatch({ type: 'ADD'});
store.dispatch({ type: 'ADD'});
store.dispatch({ type: 'ADD'});
store.dispatch({ type: 'ADD'});
store.dispatch({ type: 'ADD'});
store.dispatch({ type: 'ADD'});
store.dispatch({ type: 'MINUS'});

console.log(store.getState());