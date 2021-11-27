import "./Home.scss";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/ideas");
  }
  return (
    <section className="background">
      <main>
        <article className="home__textContainer">
          <h1 className="home__text">Dogeia</h1>
          <p className="home__description">Where ideas are born</p>
          <article>
            <button className="home__btn" onClick={() => handleClick()}>
              Take ME TO THE IDEAS
            </button>
          </article>
          <article className="background__moveableImage"></article>
        </article>
        <article className="background__image"></article>
      </main>
    </section>
  );
}

export default Home;
