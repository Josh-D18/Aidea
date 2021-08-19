import React, { Component } from "react";
import axios from "axios";
import "./Ideas.scss";
import { Link } from "react-router-dom";

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
      });
  };

  componentDidMount() {
    this.getIdeas();
  }

  render() {
    const { match } = this.props;
    console.log(this.state.ideas);
    return (
      <section>
        <article>
          <h1>Ideas</h1>
        </article>
        <article>
          {this.state.ideas.map((idea) => (
            <div key={idea.id} className="ideas__container">
              <h2>{idea.idea}</h2>
              <p>{idea.description}</p>
              <Link to={`${match.url}/${idea.id}`}>
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
