import React from "react";

function AddForm(props) {
  //   this.handleSubmit = () => {};
  return (
    <section className="add">
      <h2>Create A New Idea!</h2>
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

export default AddForm;
