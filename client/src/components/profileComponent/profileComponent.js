import React, { Component } from "react";
import axios from "axios";
import "./profileComponent.scss";

class Profile extends Component {
  state = {
    profile: [],
    token: [],
  };

  handleClick = (id) => {
    this.props.history.push(`/ideas/${id}`);
  };
  handleClickEdit = (id) => {
    this.props.history.push(`/editIdea/${id}`);
  };
  handleClickDelete = (id) => {
    this.props.history.push(`/deleteIdea/${id}`);
  };

  getProfile = (id) => {
    axios
      .get(`http://localhost:8080/profile/${id}`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.setState({
          profile: [res.data],
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

  handleClickAdd = () => {
    this.props.history.push(`/addIdea/${this.props.match.params.id}`);
  };

  componentDidMount() {
    return axios
      .get(`http://localhost:8080/profile/user/1`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.setState({
          token: [res.data],
        });
        this.getProfile(this.props.match.params.id);
      })
      .catch((err) => console.error({ message: err }));
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getProfile(this.props.match.params.id);
    }
  }

  render() {
    return (
      <section className="profile">
        <article>
          {this.state.profile.map((profile) => (
            <article key={profile.id}>
              <article className="profile__headingContainer">
                <h2 className="profile__username">
                  {this.state.token[0].user_name &&
                  profile.user_name === this.state.token[0].user_name
                    ? "My Profile"
                    : `${profile.user_name}'s Profile`}
                </h2>
                <h2 className="profile__title">Ideas</h2>
              </article>
              {profile.user_name === this.state.token[0].user_name ? (
                <div className="profile__btnContainer">
                  <button
                    onClick={this.handleClickAdd}
                    className="profile__btn--add"
                  >
                    Add An Idea
                  </button>
                </div>
              ) : (
                <></>
              )}

              <article className="profile__container">
                {profile.idea.map((idea) => (
                  <article key={idea.id}>
                    <>
                      <article key={idea.id} className="profile__content">
                        {profile.idea.length < 0 ? (
                          <h2>No Ideas To Show!</h2>
                        ) : (
                          <>
                            <div>
                              <h2>{idea.idea.toUpperCase()}</h2>
                              <p className="profile__description">
                                {idea.description}
                              </p>
                            </div>
                            <article key={profile.id}>
                              <button
                                className="profile__btn"
                                onClick={() => this.handleClick(`${idea.id}`)}
                              >
                                Check Out My Idea
                              </button>
                              <span>
                                {this.state.token.map((user) =>
                                  user.user_name === profile.user_name ? (
                                    <div key={idea.id}>
                                      <button
                                        className="profile__btn"
                                        onClick={() =>
                                          this.handleClickEdit(`${idea.id}`)
                                        }
                                      >
                                        Edit My Idea
                                      </button>
                                      <button
                                        className="profile__btn"
                                        onClick={() =>
                                          this.handleClickDelete(`${idea.id}`)
                                        }
                                      >
                                        Delete My Idea
                                      </button>
                                    </div>
                                  ) : (
                                    <span key={idea.id}></span>
                                  )
                                )}
                              </span>
                            </article>
                          </>
                        )}
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
