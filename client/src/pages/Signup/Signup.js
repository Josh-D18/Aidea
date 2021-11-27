import axios from "axios";
import React, { Component } from "react";
import "./Signup.scss";

export default class Signup extends Component {
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
      .post("http://localhost:8080/register", this.state.formData)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("token", res.data.token);
        this.props.history.push("/login");
      })
      .catch((err) =>
        this.setState({
          errors: true,
        })
      );
  };

  handleClick = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <section className="signup">
        <article className="signup__container">
          <h1 className="signup__heading">Sign Up</h1>
          <form
            action=""
            method="POST"
            className="signup__form"
            onSubmit={this.handleSubmit}
          >
            <div className="signup__usernameContainer">
              <label>Username:</label>
              <input
                className={
                  this.state.errors
                    ? "signup__username signup__errors"
                    : "signup__username"
                }
                name="user_name"
                onChange={this.handleChange}
              />
            </div>
            <div className="signup__passwordContainer">
              <label>Password:</label>
              <input
                className={
                  this.state.errors
                    ? "signup__password signup__errors"
                    : "signup__password"
                }
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="signup__btn">
              Submit
            </button>
          </form>
          <span>Have an account already? Login here:</span>
          <button className="signup__btn" onClick={this.handleClick}>
            Login
          </button>
        </article>
      </section>
    );
  }
}
