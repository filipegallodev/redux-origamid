import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "fotos",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const fetchFotos =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const response = await fetch(
        `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=9&_user=0`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };

export const selectOverFiveYear = (state) =>
  state.fotos.data?.filter(({ idade }) => idade >= 5);

export default slice.reducer;
