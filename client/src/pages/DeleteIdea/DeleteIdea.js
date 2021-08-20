import React from "react";

function DeleteIdea(props) {
  //   this.handleSubmit = () => {};
  return (
    <section className="add">
      <h2>Are You Sure You Want To Delete This Idea?</h2>
      <form
        action=""
        method="POST"
        className="add__form"
        // onSubmit={() => this.handleSubmit()}
      >
        <div>
          <label>New Idea:</label>
          <input type="text" name="idea"></input>
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="idea"></input>
        </div>
      </form>
    </section>
  );
}

export default DeleteIdea;
