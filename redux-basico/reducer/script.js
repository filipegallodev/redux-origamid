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

const initialState = 0;
function contador(state = initialState, action) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case SOMAR:
      return state + action.payload;
    default:
      return state;
  }
}

function modal(state = true, action) {
  switch (action.type) {
    case "ABRIR":
      return true;
    case "FECHAR":
      return false;
    default:
      return state;
  }
}

const reducer = Redux.combineReducers({ contador, modal });

const store = Redux.createStore(reducer);

function render() {
  const { contador, modal } = store.getState();
  const total = document.querySelector("#total");
  total.innerText = contador;
  if (modal) {
    total.style.display = "inline-block";
  } else {
    total.style.display = "none";
  }
}
render();

store.subscribe(render);

const button = document.querySelector("#button");
button.addEventListener("click", () => store.dispatch(incrementar()));

const abrir = document.querySelector("#abrir");
abrir.addEventListener("click", () => store.dispatch({ type: "ABRIR" }));

const fechar = document.querySelector("#fechar");
fechar.addEventListener("click", () => store.dispatch({ type: "FECHAR" }));
