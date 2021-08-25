import React from "react";
import "./NotFound.scss";

function NotFound404(props) {
  const handleClick = () => {
    props.history.goBack();
  };
  return (
    <section className="notFound">
      <div>
        <h2 className="notFound__heading">Page Not Found!</h2>
      </div>
      <button onClick={handleClick} className="notFound__btn">
        Go Back
      </button>
    </section>
  );
}

export default NotFound404;
