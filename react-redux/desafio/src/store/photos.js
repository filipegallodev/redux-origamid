import createAsyncSlide from "./helper/createAsyncSlice";

const photos = createAsyncSlide({
  name: "photos",
  fetchConfig: (page = 1) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  }),
});

export const fetchPhotos = photos.asyncAction;

export default photos.reducer;
