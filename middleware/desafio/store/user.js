const FETCH_STARTED = "user/FETCH_STARTED";
const FETCH_SUCCESS = "user/FETCH_SUCCESS";
const FETCH_ERROR = "user/FETCH_ERROR";

const fetchStarted = () => ({ type: FETCH_STARTED });
const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});
const fetchError = (payload) => ({ type: FETCH_ERROR, payload });

export const userFetch = (token) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

const initialState = {
  loading: false,
  data: null,
  error: null,
};

function user(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case FETCH_ERROR:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
}

export default user;
