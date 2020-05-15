import React, { useState, useEffect } from "react";
import Housemate from "./Housemate";
import Comments from "../Comments/Comments";
import { firestore } from "../../firebaseConfig";
import { withRouter } from "react-router-dom";

import { withUser } from "../../withUser";

function HousematePage(props) {
  const [thisHousemate, setThisHousemate] = useState(null);
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const housemateId = props.match.params.id;
  const housemateRef = firestore.doc(`housemates/${housemateId}`);
  const commentsRef = housemateRef.collection("comments");

  useEffect(() => {
    const unsubscribeFromPost = housemateRef.onSnapshot((snapshot) => {
      const gatherInfo = (doc) => {
        const data = doc.data();

        return {
          id: doc.id,
          ...data,
        };
      };
      const housemateInfo = gatherInfo(snapshot);

      //   console.log(housemateInfo);
      setThisHousemate(housemateInfo);
      setLoaded(true);
    });

    const unsubscribeFromComments = commentsRef.onSnapshot((snapshot) => {
      const commentsArray = snapshot.docs.map((doc) => {
        const data = doc.data();

        return {
          id: doc.id,
          ...data,
        };
      });
      //   console.log(commentsArray);
      setComments(commentsArray);
    });

    return () => {
      unsubscribeFromPost();
      unsubscribeFromComments();
    };
  }, []);

  const createComment = (comment) => {
    const { user } = props;
    const createdAt = new Date();
    commentsRef.add({
      comment,
      createdAt: createdAt.toDateString(),
      author: user.user.displayName,
    });
  };

  return (
    <section>
      {thisHousemate && loaded && <Housemate {...thisHousemate} />}
      <Comments comments={comments} onCreate={createComment} />
    </section>
  );
}

export default withRouter(withUser(HousematePage));
