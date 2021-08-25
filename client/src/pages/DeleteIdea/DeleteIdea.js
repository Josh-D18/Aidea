import axios from "axios";
import React from "react";
import "./DeleteIdea.scss";

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
      <div className="delete__btnContainer">
        <h2 className="delete__title">
          Are You Sure You Want To Delete This Idea?
        </h2>
        <div>
          <button className="delete__btn" onClick={handleClick}>
            Yes
          </button>
          <button className="delete__btn" onClick={handleGoBack}>
            NO TAKE ME BACK!
          </button>
        </div>
      </div>
    </section>
  );
}

export default DeleteIdea;
