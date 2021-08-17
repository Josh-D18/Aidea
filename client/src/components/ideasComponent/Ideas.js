import React, { Component } from "react";
import axios from "axios";
import "./Ideas.scss";
import { Link } from "react-router-dom";

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
            <div className="ideas__container">
              <h2 key={idea.id}>{idea.idea}</h2>
              <p>{idea.description}</p>
              <Link to={`/ideas/${idea.id}`}>
                <span>Check out more</span>
              </Link>
            </div>
          ))}
        </article>
        <article></article>
      </section>
    );
  }
}

export default Ideas;
