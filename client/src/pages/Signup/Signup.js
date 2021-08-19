import axios from "axios";
import React, { Component } from "react";

export default class Signup extends Component {
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
      .post("http://localhost:8080/register", this.state.formData)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        this.props.history.push("/login");
      })
      .catch((err) => console.error("Error", err));
  };

  render() {
    return (
      <section className="signup">
        <article className="signup__container">
          <form
            action=""
            method="POST"
            className="signup__form"
            onSubmit={this.handleSubmit}
          >
            <div className="signup__usernameContainer">
              <label>Username:</label>
              <input name="user_name" onChange={this.handleChange} />
            </div>
            <div className="signup__passwordContainer">
              <label>Password:</label>
              <input name="password" onChange={this.handleChange} />
            </div>
            <button type="submit" className="signup__btn">
              Signup
            </button>
          </form>
        </article>
      </section>
    );
  }
}
