import { PHOTO_POST } from "../api";
import createAsyncSlice from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: "photoPost",
  fetchConfig: ({ formData, token }) => PHOTO_POST({ formData, token }),
});

export const fetchPhotoPost = slice.asyncAction;

export default slice.reducer;
