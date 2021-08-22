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
  render() {
    return (
      <section className="form">
        <article className="form__container">
          <h1 className="form__heading">Login</h1>
          <form
            action=""
            method="POST"
            className="form"
            onSubmit={this.handleSubmit}
          >
            <div className="form__usernameContainer">
              <label>Idea:</label>
              <input
                name="user_name"
                className="form__username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form__passwordContainer">
              <label>Description:</label>
              <input
                name="password"
                className="form__password"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="form__btn">
              Submit
            </button>
          </form>
          <button onClick={this.handleClick} className="form__btn">
            Back
          </button>
        </article>
      </section>
    );
  }
}

export default AddForm;
