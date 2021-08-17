import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    profile: [],
  };

  getProfile = (id) => {
    axios.get(`http://localhost:8080/profile/${id}`).then((res) => {
      this.setState({
        profile: [res.data],
      });
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
              <article>{/* <h3></h3> */}</article>
              <article>
                <h2>My Ideas</h2>
                <>
                  <article key={profile.id}>
                    <h2>{profile.idea[0].idea}</h2>
                    <p>{profile.idea[0].description}</p>
                    <article>
                      <Link to={`/ideas/${profile.idea[0].user_id}`}>
                        <span>Check Out This Idea!</span>
                      </Link>
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
