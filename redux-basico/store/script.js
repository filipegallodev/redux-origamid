const initialState = {
  nome: "André",
  id: 199,
};

function reducer(state = initialState, action) {
  return state;
}

const store = Redux.createStore(reducer);
const state = store.getState();
console.log(state);
