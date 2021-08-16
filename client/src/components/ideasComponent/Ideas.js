import React, { Component } from "react";
import axios from "axios";
import "./Ideas.scss";

class Ideas extends Component {
  state = {
    ideas: [],
  };

  getIdeas = () => {
    axios.get("http://localhost:8080/ideas").then((res) => {
      this.setState({
        ideas: res.data,
      });
    });
  };

  componentDidMount() {
    this.getIdeas();
  }

  render() {
    return (
      <section>
        <article>
          <h1>Ideas</h1>
        </article>
        <article>
          {this.state.ideas.map((idea) => (
            <div>
              <h2 key={idea.id}>{idea.idea}</h2>
              <p>{idea.description}</p>
              <button>Check out more</button>
            </div>
          ))}
        </article>
        <article></article>
      </section>
    );
  }
}

export default Ideas;
