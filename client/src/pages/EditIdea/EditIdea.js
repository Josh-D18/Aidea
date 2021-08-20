import React, { Component } from "react";
import axios from "axios";

class EditForm extends Component {
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
    axios.put(`/${this.props.match.params.id}`, this.state.formData, {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
  };

  handleClick = () => {
    this.props.history.goBack();
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
            <label>Idea:</label>
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
        <button onClick={this.handleClick}>Back</button>
      </section>
    );
  }
}

export default EditForm;
