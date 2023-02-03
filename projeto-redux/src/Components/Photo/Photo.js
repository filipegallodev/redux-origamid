import React from "react";
import { useParams } from "react-router-dom";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import Head from "../Helper/Head";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../store/photo";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [id, dispatch]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} />
      </section>
    );
  return null;
};

export default Photo;
