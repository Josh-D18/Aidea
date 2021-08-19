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
      });
  };

  componentDidMount() {
    this.getIdea(this.props.match.params.id);
  }

  render() {
    return (
      <section>
        <article>
          <h1>Idea</h1>
        </article>
        <article>
          {this.state.idea.map((idea) => (
            <article key={idea.id}>
              <h2>{idea.idea}</h2>
              <p>{idea.description}</p>
              <article>
                <h3>{idea.user.user_name}</h3>

                <button onClick={() => this.handleClick(idea.user.id)}>
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
