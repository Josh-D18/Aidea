import "./Home.scss";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/ideas");
  }
  return (
    <section className="background">
      <header className="home">
        <nav className="home__navbar">
          <ul className="home__navbarList">
            <Link to="/" className="home__navbarItem">
              <li>Home</li>
            </Link>
            <Link to="/about" className="home__navbarItem">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </header>
      <main>
        <article className="home__textContainer">
          <h1 className="home__text">Aidea</h1>
          <p>Where ideas are born</p>
          <article>
            <button className="home__btn" onClick={() => handleClick()}>
              Take ME TO THE IDEAS
            </button>
          </article>
        </article>
      </main>
    </section>
  );
}

export default Home;
