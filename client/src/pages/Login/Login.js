import axios from "axios";
import React, { Component } from "react";
import "./Login.scss";

export default class Login extends Component {
  state = {
    formData: null,
    errors: false,
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
        console.log(e.target);
        sessionStorage.setItem("token", res.data.token);
        this.props.history.push({ pathname: "/ideas" });
      })
      .catch((err) => {
        this.setState({
          errors: true,
        });
        console.log(err);
      });
  };

  handleClick = () => {
    this.props.history.push("/register");
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
              <label>Username:</label>
              <input
                name="user_name"
                className={
                  this.state.errors
                    ? "form__username form__errors"
                    : "form__username"
                }
                onChange={this.handleChange}
              />
            </div>
            <div className="form__passwordContainer">
              <label>Password:</label>
              <input
                name="password"
                className={
                  this.state.errors
                    ? "form__password form__errors"
                    : "form__password"
                }
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="form__btn">
              Login
            </button>
          </form>
          <span>Don't have an account? Regsiter here:</span>
          <button onClick={this.handleClick} className="form__btn">
            Register
          </button>
        </article>
      </section>
    );
  }
}
