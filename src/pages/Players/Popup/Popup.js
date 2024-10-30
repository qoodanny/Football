import { useState, useEffect } from 'react';
import './Popup.css';

export default function Popup({ player, x }) {
  //get latest world cup
  const [stats, setStats] = useState(
    player.worldCups.get([...player.worldCups][0][0]),
  );

  const changeWorldCup = (event) => {
    setStats(player.worldCups.get(event.target.value));
  };

  const clickOutsidePopup = (click) => {
    let clickedOnBackground = document
      .getElementById('popup-background')
      .contains(click.target);

    if (clickedOnBackground) x();
  };

  const toggleHidden = (htmlElement) => {
    htmlElement.classList.toggle('hidden');
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutsidePopup);

    return () => {
      document.removeEventListener('mousedown', clickOutsidePopup);
    };
  }, []);

  return (
    <>
      <div id="popup-background"></div>

      <div id="popup">
        <div id="popup-card">
          <select id="wc-selector" onChange={changeWorldCup}>
            {Array.from(player.worldCups).map(([year]) => (
              <option value={year}>{year}</option>
            ))}
          </select>
          <button id="close-button" onClick={() => x()}>
            X
          </button>
          <div id="player-card">
            <div id="back" class="hidden">
              <p id="blurb">{player.blurb}</p>
              <button
                id="flip-button"
                onClick={() => {
                  toggleHidden(document.getElementById('front'));
                  toggleHidden(document.getElementById('wc-selector'));
                  toggleHidden(document.getElementById('back'));
                }}
              >
                More
              </button>
            </div>
            <div id="front">
              <div id="player-info">
                <p style={{ color: 'yellow' }}>{player.rating}</p>
                <p style={{ color: 'yellow' }}>5 stars</p>
                <p style={{ color: 'white' }}>{player.position}</p>
                <img id="flag" src={player.countryPic}></img>
                <p style={{ color: 'white' }}>{player.country}</p>
              </div>
              <img id="headshot" src={player.headshotSrc}></img>
              <div id="player-stats">
                <p id="player-name">
                  {player.firstName + ' ' + player.lastName}
                </p>
                <table class="stat-table" id="stat-table-one">
                  <tbody>
                    <tr>
                      <td>Appearances</td>
                      <td>{stats.appearances}</td>
                    </tr>
                    <tr>
                      <td>Goals</td>
                      <td>{stats.goals}</td>
                    </tr>
                    <tr>
                      <td>Assists</td>
                      <td>{stats.assists}</td>
                    </tr>
                  </tbody>
                </table>
                <table class="stat-table" id="stat-table-two">
                  <tbody>
                    <tr>
                      <td>Trophies</td>
                      <td>{stats.trophies}</td>
                    </tr>
                    <tr>
                      <td>Red Cards</td>
                      <td>{stats.redCards}</td>
                    </tr>
                    <tr>
                      <td>Yellow Cards</td>
                      <td>{stats.yellowCards}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                id="flip-button"
                onClick={() => {
                  toggleHidden(document.getElementById('front'));
                  toggleHidden(document.getElementById('wc-selector'));
                  toggleHidden(document.getElementById('back'));
                }}
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
