import React, { Component } from "react";
import axios from "axios";

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
    axios.put(
      `http://localhost:8080/ideas/${this.props.match.params.id}`,
      this.state.formData,
      {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
  };

  handleClick = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    this.getIdea(this.props.match.params.id);
  }

  render() {
    return (
      <section className="add">
        <h2>Edit Your Idea!</h2>
        <form
          action=""
          method="POST"
          className="add__form"
          onSubmit={this.handleSubmit}
        >
          {this.state.idea.map((idea) => (
            <article key={idea.id}>
              <div className="">
                <label>Idea: {idea.idea}</label>
              </div>
              <div className="">
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  onChange={this.handleChange}
                  placeholder={idea.description}
                />
              </div>
            </article>
          ))}
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.handleClick}>Back</button>
      </section>
    );
  }
}

export default EditForm;
