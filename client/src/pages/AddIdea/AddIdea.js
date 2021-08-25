import React, { Component } from "react";
import axios from "axios";
import "./AddIdea.scss";

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

  handleClick = () => {
    this.props.history.push(`/profile/${this.props.match.params.id}`);
  };
  render() {
    return (
      <section className="add">
        <article className="add__container">
          <h1 className="add__heading">Add Your Brillant Idea</h1>
          <form
            action=""
            method="POST"
            className="add"
            onSubmit={this.handleSubmit}
          >
            <div className="add__usernameContainer">
              <label>Idea:</label>
              <input
                name="idea"
                className="add__username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form__passwordContainer">
              <label>Description:</label>
              <textarea
                name="description"
                className="add__password"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="add__btn">
              Submit
            </button>
          </form>
          <button onClick={this.handleClick} className="add__btn">
            Back
          </button>
        </article>
      </section>
    );
  }
}

export default AddForm;
