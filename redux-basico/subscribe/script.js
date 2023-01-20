// Constantes
const INCREMENTAR = "INCREMENTAR";
const SOMAR = "SOMAR";

// Action Creator
function incrementar() {
  return { type: INCREMENTAR };
}

function somar(payload) {
  return { type: SOMAR, payload };
}

const initialState = 10;
function reducer(state = initialState, action) {
  if (action.type === INCREMENTAR) return state + 1;
  if (action.type === SOMAR) return state + action.payload;
  return state;
}

const store = Redux.createStore(reducer);

function render() {
  const state = store.getState();
  const total = document.querySelector("#total");
  total.innerText = state;
}
render();

const unsubscribe = store.subscribe(render);
store.dispatch(somar(15));
unsubscribe();

const unsub2 = store.subscribe(() => {
  console.log("Aconteceu");
});
unsub2();

const button = document.querySelector("#button");
button.addEventListener("click", () => store.dispatch(incrementar()));
