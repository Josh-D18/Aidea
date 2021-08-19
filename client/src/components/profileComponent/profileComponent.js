import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  state = {
    profile: [],
  };

  handleClick = (id) => {
    this.props.history.push(`/ideas/${id}`);
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
      });
  };
  componentDidMount() {
    this.getProfile(this.props.match.params.id);
  }

  render() {
    return (
      <section>
        <article>
          {this.state.profile.map((profile) => (
            <article key={profile.id}>
              <h2>{profile.user_name}</h2>
              <article>{/* <h3></h3> */}</article>
              <article>
                <h2>My Ideas</h2>
                <>
                  <article key={profile.id}>
                    <h2>{profile.idea[0].idea}</h2>
                    <p>{profile.idea[0].description}</p>
                    <article>
                      <button
                        onClick={() =>
                          this.handleClick(`${profile.idea[0].user_id}`)
                        }
                      >
                        Check Out My Idea
                      </button>
                    </article>
                  </article>
                </>
              </article>
            </article>
          ))}
        </article>
      </section>
    );
  }
}

export default Profile;
