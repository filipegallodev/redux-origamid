function getLocalStorage(key, initial) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    return initial;
  }
}

const initialState = {
  loading: false,
  data: getLocalStorage("data", null),
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_STARTED":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { loading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") return action(store.dispatch);

  return next(action);
};

const localStorage = (store) => (next) => (action) => {
  const result = next(action);
  if (action.localStorage !== undefined) {
    console.log(action);
    window.localStorage.setItem(
      action.localStorage,
      JSON.stringify(action.payload)
    );
  }

  return result;
};

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const store = Redux.createStore(reducer, enhancer);

function fetchUrl(url) {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_STARTED" });
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data, localStorage: "data" });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };
}

const state = store.getState();
if (state.data === null) {
  store.dispatch(fetchUrl("https://dogsapi.origamid.dev/json/api/photo"));
}
