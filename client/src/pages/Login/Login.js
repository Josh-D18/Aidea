import axios from "axios";
import React, { Component } from "react";
// import axios from "axios";

export default class Login extends Component {
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
      .post("http://localhost:8080/login", this.state.formData)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        this.props.history.push({ pathname: "/ideas" });
      })
      .catch((err) => console.error("Error", err));
  };

  render() {
    return (
      <section className="login">
        <h1>Login</h1>
        <article className="login__container">
          <form
            action=""
            method="POST"
            className="login__form"
            onSubmit={this.handleSubmit}
          >
            <div className="login__usernameContainer">
              <label>Username:</label>
              <input name="user_name" onChange={this.handleChange} />
            </div>
            <div className="login__passwordContainer">
              <label>Password:</label>
              <input name="password" onChange={this.handleChange} />
            </div>
            <button type="submit" className="login__btn">
              Login
            </button>
          </form>
        </article>
      </section>
    );
  }
}
