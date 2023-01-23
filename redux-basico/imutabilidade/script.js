// const array1 = [0, 1, 2, 3, 4];
// const array2 = array1.filter((item) => true);

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

// const obj1 = {
//   nome: "José",
//   idade: 49,
// };
// const obj2 = Object.assign({}, obj1, { nome: "Maria" });

// console.log(obj1 === obj2);
// console.log(obj1);
// console.log(obj2);

const obj1 = {
  nome: "José",
  idade: 49,
};

const obj2 = immer.produce(obj1, (draft) => {
  draft.idade = 45;
});

console.log(obj1);
console.log(obj2);

const initialState = {
  nome: "Filipe",
  sobre: {
    dados: {
      idade: 31,
    },
  },
};

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case "MUDAR_NOME":
      state.nome = action.payload;
      break;
    case "MUDAR_IDADE":
      state.sobre.dados.idade = action.payload;
      break;
  }
}, initialState);

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: "MUDAR_NOME", payload: "André" });
store.dispatch({ type: "MUDAR_NOME", payload: "João" });
store.dispatch({ type: "MUDAR_NOME", payload: "Pedro" });
store.dispatch({ type: "MUDAR_IDADE", payload: 20 });
store.dispatch({ type: "MUDAR_IDADE", payload: 35 });
store.dispatch({ type: "TESTE", payload: "Maria" });
