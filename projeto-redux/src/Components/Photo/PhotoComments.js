import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map(({ comment_ID, comment_author, comment_content }) => (
          <li key={comment_ID}>
            <b>{comment_author}: </b>
            <span>{comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
