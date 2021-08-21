import React, { Component } from "react";
import axios from "axios";
import "./Ideas.scss";

class Ideas extends Component {
  state = {
    ideas: [],
  };

  getIdeas = () => {
    axios
      .get("http://localhost:8080/ideas", {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.setState({
          ideas: res.data,
        });
      })
      .catch((err) => {
        switch (err.response.status) {
          case 403:
            this.props.history.push("/login");
            break;
          default:
            break;
        }
      });
  };
  handleClick = (id) => {
    this.props.history.push(`/ideas/${id}`);
  };

  componentDidMount() {
    this.getIdeas();
  }

  render() {
    return (
      <section className="ideas">
        <article className="ideas__headingContainer">
          <h1 className="ideas__heading">Ideas</h1>
        </article>
        <section>
          <article className="ideas__container">
            {this.state.ideas.map((idea) => (
              <div className="ideas__content" key={idea.id}>
                <h2 className="ideas__title">{idea.idea.toUpperCase()}</h2>
                <p className="ideas__description">{idea.description}</p>
                <button
                  className="ideas__btn"
                  onClick={() => this.handleClick(`${idea.id}`)}
                >
                  Check out more
                </button>
              </div>
            ))}
          </article>
        </section>

        <article></article>
      </section>
    );
  }
}

export default Ideas;
