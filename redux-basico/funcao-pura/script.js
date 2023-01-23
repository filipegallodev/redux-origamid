function reducer(state = 0, action) {
  switch (action.type) {
    case "MODIFICAR_WIDTH":
      return action.payload;
    default:
      return state;
  }
}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function render() {
  const caixa = document.querySelector("#caixa");
  caixa.style.width = store.getState() + "px";
}

store.subscribe(render);
store.dispatch({ type: "MODIFICAR_WIDTH", payload: 20 });
store.dispatch({ type: "MODIFICAR_WIDTH", payload: 40 });
store.dispatch({ type: "MODIFICAR_WIDTH", payload: 60 });
store.dispatch({ type: "MODIFICAR_WIDTH", payload: 80 });

console.log(store.getState());
