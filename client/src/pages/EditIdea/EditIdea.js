import React, { Component } from "react";
import axios from "axios";
import "./EditIdea.scss";

class EditForm extends Component {
  state = {
    formData: null,
    idea: [],
  };
  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  getIdea = (id) => {
    axios
      .get(`http://localhost:8080/ideas/${id}`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.setState({
          idea: [res.data],
        });
      })
      .catch((err) => {
        if (err.response === undefined) {
          console.error({ message: err });
        } else {
          switch (err.response.status) {
            case 403:
              this.props.history.push("/login");
              break;
            default:
              break;
          }
        }
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8080/ideas/${this.props.match.params.id}`,
        this.state.formData,
        {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        this.props.history.goBack();
      });
  };

  handleClick = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    this.getIdea(this.props.match.params.id);
  }

  render() {
    return (
      <section className="edit">
        <article className="edit__container">
          <h2 className="edit__heading">Edit Your Idea!</h2>
          <form
            action=""
            method="POST"
            className="edit__form"
            onSubmit={this.handleSubmit}
          >
            {this.state.idea.map((idea) => (
              <article key={idea.id}>
                <div className="edit__content">
                  <label className="edit__username">
                    Your Idea:
                    <br /> {idea.idea}
                  </label>
                </div>
                <div className="">
                  <label>Description:</label> <br />
                  <textarea
                    type="text"
                    name="description"
                    onChange={this.handleChange}
                    placeholder={idea.description}
                    className="edit__description"
                  />
                </div>
              </article>
            ))}
            <button className="edit__btn" type="submit">
              Submit
            </button>
          </form>
          <button className="edit__btn" onClick={this.handleClick}>
            Back
          </button>
        </article>
      </section>
    );
  }
}

export default EditForm;
