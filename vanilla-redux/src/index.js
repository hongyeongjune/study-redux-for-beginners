import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const text = document.querySelector("span");

const reducer = (state) => {
    return state;
};

const store = createStore(reducer);

console.log(store.getState());