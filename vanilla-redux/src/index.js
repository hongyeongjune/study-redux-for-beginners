import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const text = document.querySelector("span");

const ADD = 'ADD';
const MINUS = 'MINUS';

text.innerText = 0;

const reducer = (state = 0, actions) => {
    switch (actions.type) {
        case ADD:
            return state + 1;
        case MINUS:
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(reducer);

store.subscribe(() => {
    text.innerText = store.getState();
});

add.addEventListener('click', () => store.dispatch({ type: ADD }));
minus.addEventListener('click', () => store.dispatch({ type: MINUS }));
