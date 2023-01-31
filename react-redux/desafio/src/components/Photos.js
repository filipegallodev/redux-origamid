import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../store/photos";
import PhotosContent from "./PhotosContent";

const Photos = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return <section>{data && <PhotosContent />}</section>;
};

export default Photos;
