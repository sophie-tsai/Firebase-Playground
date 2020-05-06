import React, { useState, useEffect } from "react";
import Housemate from "./Housemate";
import Comments from "./Comments";
import { firestore } from "./firebaseConfig";

import { withRouter } from "react-router-dom";

function HousematePage(props) {
  const [thisHousemate, setThisHousemate] = useState(null);
  const [comments, setComments] = useState([]);

  const [loaded, setLoaded] = useState(false);

  const housemateId = props.match.params.id;
  const housemateRef = firestore.doc(`housemates/${housemateId}`);
  const commentsRef = housemateRef.collection("comments");

  useEffect(() => {
    const unsubscribeFromPost = housemateRef.onSnapshot((snapshot) => {
      //   const housemate = collectIdsAndData(snapshot);
      //   console.log("housemate", housemate);
      const gatherInfo = (doc) => {
        const data = doc.data();

        return {
          id: doc.id,
          name: data.name,
          gender: data.gender,
          user: { displayName: data.user.displayName, uid: data.user.uid },
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
        const createdAt = new Date();

        return {
          id: doc.id,
          comment: data.comment,
          //   createdAt: Date.parse(createdAt),
        };
      });

      //   const comments = gatherComments(snapshot);
      //   const comments = snapshot.docs.map(collectIdsAndData);
      //   console.log(comments);
      setComments(commentsArray);
    });

    return () => {
      unsubscribeFromPost();
      unsubscribeFromComments();
    };
  }, []);

  const createComment = (comment) => {
    commentsRef.add({
      comment,
    });
  };

  return (
    <section>
      {thisHousemate && <Housemate {...thisHousemate} />}
      <Comments
        comments={comments}
        // housemateId={thisHousemate.id}
        onCreate={createComment}
      />
    </section>
  );
}

export default withRouter(HousematePage);
