import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <>
      <h1 id="title">World Cups</h1>

      <article id="nav-buttons-container">
        <section>
          <Link to="teams">
            <button class="home-nav-button">Teams</button>
          </Link>

          <Link to="players">
            <button class="home-nav-button">Players</button>
          </Link>
        </section>

        <section>
          <Link to="custom">
            <button class="home-nav-button">Custom</button>
          </Link>
        </section>
      </article>
    </>
  );
}
