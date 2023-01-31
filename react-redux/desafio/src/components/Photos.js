import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadNewPhotos } from "../store/photos";
import PhotosContent from "./PhotosContent";
import PhotosLoadMore from "./PhotosLoadMore";

const Photos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch]);

  return (
    <section>
      <PhotosContent />
      <PhotosLoadMore />
    </section>
  );
};

export default Photos;
