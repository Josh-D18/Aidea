import React, { Component } from "react";
import axios from "axios";
import "./Idea.scss";

class Idea extends Component {
  state = {
    idea: [],
  };

  handleClick = (id) => {
    this.props.history.push(`/profile/${id}`);
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
        } else if (err === "TypeError") {
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

  componentDidMount() {
    this.getIdea(this.props.match.params.id);
  }

  render() {
    return (
      <section className="idea">
        <article className="idea__headingContainer">
          <h1 className="idea__heading">Idea</h1>
        </article>
        <article className="idea__container">
          {this.state.idea.map((idea) => (
            <article key={idea.id} className="idea__content">
              <h2 className="idea__title">{idea.idea.toUpperCase()}</h2>
              <p className="idea__description">
                <span>{idea.description}</span>
              </p>
              <article>
                <h3>{idea.user.user_name}'s Idea</h3>

                <button
                  className="ideas__btn"
                  onClick={() => this.handleClick(idea.user.id)}
                >
                  {idea.user.user_name}'s Profile
                </button>
              </article>
            </article>
          ))}
        </article>
      </section>
    );
  }
}

export default Idea;
