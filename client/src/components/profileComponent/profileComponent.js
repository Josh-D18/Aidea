import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  state = {
    profile: [],
    token: this,
  };

  handleClick = (id) => {
    this.props.history.push(`/ideas/${id}`);
  };
  handleClickEdit = (id) => {
    this.props.history.push(`/editIdea/${id}`);
  };

  getProfile = (id) => {
    axios
      .get(`http://localhost:8080/profile/${id}`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // console.log(res);
        this.setState({
          profile: [res.data],
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
  componentDidMount() {
    this.getProfile(this.props.match.params.id);
  }

  render() {
    console.log(this.state.profile);
    return (
      <section>
        <article>
          {this.state.profile.map((profile) => (
            <article key={profile.id}>
              <h2>{profile.user_name}</h2>
              <h2>My Ideas</h2>
              <article className="idea__container">
                {profile.idea.map((idea) => (
                  <article key={idea.id}>
                    <>
                      <article>
                        {profile.idea.length < 0 ? (
                          <h2>No Ideas To Show!</h2>
                        ) : (
                          <div>
                            <h2>{idea.idea}</h2>
                            <p>{idea.description}</p>
                          </div>
                        )}
                        <article>
                          <button
                            onClick={() => this.handleClick(`${idea.id}`)}
                          >
                            Check Out My Idea
                          </button>

                          {
                            /* sessionStorage.getItem("token")*/

                            <button
                              onClick={() => this.handleClickEdit(`${idea.id}`)}
                            >
                              Edit My Idea
                            </button>
                          }
                        </article>
                      </article>
                    </>
                  </article>
                ))}
              </article>
            </article>
          ))}
        </article>
      </section>
    );
  }
}

export default Profile;
