import React, { Component } from "react";
import axios from "axios";
import "./profileComponent.scss";

class Profile extends Component {
  state = {
    profile: [],
    token: null,
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

  getToken = () => {
    axios
      .get(`http://localhost:8080/profile/user/1`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.setState({
          token: [res.data],
        });
      });
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
    this.getToken();
    this.getProfile(this.props.match.params.id);
  }

  render() {
    return (
      <section>
        <article>
          {this.state.profile.map((profile) => (
            <article key={profile.id}>
              <h2 className="profile__username">{profile.user_name}</h2>
              <h2 className="profile__title">Ideas</h2>
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
                              <h2>{idea.idea}</h2>
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
                                  user.username === profile.user_name ? (
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
