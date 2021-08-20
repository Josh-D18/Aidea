import axios from "axios";
import React from "react";

function DeleteIdea(props) {
  const handleClick = () => {
    axios
      .delete(`http://localhost:8080/ideas/${props.match.params.id}`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then(() => {
        props.history.goBack();
      });
  };
  const handleGoBack = () => {
    props.history.goBack();
  };
  return (
    <section className="delete">
      <h2>Are You Sure You Want To Delete This Idea?</h2>
      <button onClick={handleClick}>Yes</button>
      <button onClick={handleGoBack}>NO TAKE ME BACK!</button>
    </section>
  );
}

export default DeleteIdea;
