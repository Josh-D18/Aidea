import React, { Component } from "react";
import axios from "axios";

class AddForm extends Component {
  state = {
    formData: null,
  };
  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `/ideas/profile/${this.props.match.params.id}`,
        this.state.formData,
        {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        this.props.history.push(`/profile/${res.data.user_id}`);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <section className="add">
        <h2>Create A New Idea!</h2>
        <form
          action=""
          method="POST"
          className="add__form"
          onSubmit={this.handleSubmit}
        >
          <div className="">
            <label>New Idea:</label>
            <input type="text" name="idea" onChange={this.handleChange}></input>
          </div>
          <div className="">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              onChange={this.handleChange}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default AddForm;
