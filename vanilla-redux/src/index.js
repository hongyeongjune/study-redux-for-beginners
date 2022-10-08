import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const text = document.querySelector("span");

text.innerText = 0;

const reducer = (state = 0, actions) => {
    if (actions.type === 'ADD') {
        return state + 1;
    } else if (actions.type === 'MINUS') {
        return state - 1;
    }
    return state;
};

const store = createStore(reducer);

store.subscribe(() => {
    text.innerText = store.getState();
});

add.addEventListener('click', () => store.dispatch({ type: 'ADD' }));
minus.addEventListener('click', () => store.dispatch({ type: 'MINUS' }));
