import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import bike from '../../assets/bike.png';
import profile from '../../assets/profile.png';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    console.log(document.getElementsByClassName('nav-button'));
    let buttons = document.getElementsByClassName('nav-button');
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].classList.contains('on')) {
        buttons[i].classList.toggle('on');
      }
    }
    if (location.pathname.length > 1) {
      document
        .getElementById(location.pathname.split('/')[1] + '-button')
        .classList.toggle('on');
    } else {
      //home button
      document.getElementById('home-button').classList.toggle('on');
    }
  }, [location.pathname]);

  return (
    <>
      <section id="navbar">
        <Link class="nav-button" id="home-button" to="/">
          <img id="home-button-pic" src={bike}></img>
          <p>World Cups</p>
        </Link>
        <div id="nav-buttons">
          <Link class="nav-button" id="players-button" to="players">
            <a>Players</a>
          </Link>
          <Link class="nav-button" id="teams-button" to="teams">
            <a>Teams</a>
          </Link>
          <Link class="nav-button" id="custom-button" to="custom">
            <a>Custom</a>
          </Link>
        </div>

        <Link class="nav-button" id="profile-button" to="/profile">
          <img id="profile-pic" src={profile}></img>
        </Link>
      </section>
    </>
  );
}
