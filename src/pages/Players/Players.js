import './Players.css';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { players } from '../../data/PlayerData.js';
import { IoCloseSharp } from 'react-icons/io5';

import { playerFilter } from './tools/Filter.js';
import { fncMap } from './tools/SortFunctions.js';

import Popup from './Popup/Popup.js';
import SearchBox from '../../components/SearchBox/SearchBox.js';
import FilterMenu from '../../components/FilterMenu/FilterMenu.js';
import SortMenu from '../../components/SortMenu/SortMenu.js';
import ResetButton from '../../components/ResetButton/ResetButton.js';

export default function Players() {
  const [searchParams, setSearchParams] = useSearchParams({ search: '' }); //do not need default values

  const search = searchParams.get('search'); //?search=[search]
  const filterOptions = searchParams.getAll('fop'); //?fop=[filter]-[option] --> can be []
  const sort = searchParams.get('sort'); //?sort=[sort]

  const sortOptions = [
    { sort: 'relevance', display: 'Relevance (Default)' },
    { sort: 'position', display: 'Position' },
    { sort: 'firstNameAZ', display: 'A-Z (First Name)' },
    { sort: 'lastNameAZ', display: 'A-Z (Last Name)' },
    { sort: 'firstNameZA', display: 'Z-A (First Name)' },
    { sort: 'lastNameZA', display: 'Z-A (Last Name)' },
    { sort: 'teamAZ', display: 'A-Z (Team)' },
    { sort: 'teamZA', display: 'Z-A (Team)' },
  ];

  const [popup, setPopup] = useState({
    show: false,
    player: {},
  });

  useEffect(() => {
    filterOptions.forEach(
      (fop) => (document.getElementById(fop).checked = true),
    );
    sort !== null
      ? (document.getElementById('sort-select').value = sort)
      : (document.getElementById('sort-select').value = 'default');
    document.getElementById('search-box').value = search;
  }, []);

  const handleInputChangeSearch = (event) => {
    setSearchParams(
      (prev) => {
        prev.set('search', event.target.value);
        return prev;
      },
      { replace: true },
    );
  };

  const handleInputChangeFilterOption = (event) => {
    setSearchParams(
      (prev) => {
        let filter = event.target.id.split('-')[0];
        let option = event.target.id.split('-')[1];

        if (event.target.checked) prev.append('fop', filter + '-' + option);
        else prev.delete('fop', filter + '-' + option);

        return prev;
      },
      { replace: true },
    );
  };

  const togglePopup = () => {
    setPopup((prev) => ({
      show: false,
      player: {},
    }));
  };

  const handleClick = (player) => {
    setPopup((prev) => ({
      ...prev,
      show: true,
      player: player,
    }));
  };

  const handleInputChangeSort = (event) => {
    setSearchParams(
      (prev) => {
        prev.set('sort', event.target.value);
        return prev;
      },
      { replace: true },
    );
  };

  const displayPlayers = () => {
    let playerArray = [];
    let filteredPlayers = playerFilter(
      search !== null && search.length > 0
        ? players.filter(
            (player) =>
              player.firstName.toLowerCase().includes(search.toLowerCase()) ||
              player.lastName.toLowerCase().includes(search.toLowerCase()),
          )
        : players,
      filterOptions,
    ).sort(fncMap.get(sort));

    for (const p of filteredPlayers)
      playerArray.push(<PlayerCard player={p} onClick={handleClick} />);

    if (playerArray.length === 0)
      return (
        <div style={{ marginLeft: '15px' }}>
          <p style={{ fontWeight: 'bolder' }}>
            No results found for: "{search}"
          </p>
          <p>
            Please make sure your words are spelled correctly, use different
            keywords, or try different filters.
          </p>
        </div>
      );
    else return <div id="players">{playerArray}</div>;
  };

  const resetFilters = () => {
    //clear checkboxes
    filterOptions.forEach(
      (fop) => (document.getElementById(fop).checked = false),
    );
    //clear sort & search box
    document.getElementById('sort-select').value = 'default';
    document.getElementById('search-box').value = '';
    //clear params
    setSearchParams({ search: '', sort: 'default' }, { replace: true });
  };

  const displayChosenFilters = () => {
    return (
      <div id="chosen">
        {filterOptions.map((fop) => (
          <p>
            {fop.split('-')[0] + ': ' + fop.split('-')[1]}
            {
              <IoCloseSharp
                class="filter-x"
                onClick={() => {
                  setSearchParams(
                    (prev) => {
                      prev.delete('fop', fop);
                      return prev;
                    },
                    { replace: true },
                  );
                  document.getElementById(fop).checked = false;
                }}
              />
            }
          </p>
        ))}
      </div>
    );
  };

  const getAllPositions = () => {
    let arr = [];

    for (const player of players) {
      if (arr.filter((obj) => obj.name === player.position).length === 0) {
        arr.push({
          name: player.position,
          onClick: handleInputChangeFilterOption,
        });
      }
    }

    return arr;
  };

  const getAllTeams = () => {
    let arr = [];

    for (const player of players) {
      if (arr.filter((obj) => obj.name === player.country).length === 0) {
        arr.push({
          name: player.country,
          onClick: handleInputChangeFilterOption,
        });
      }
    }

    return arr;
  };

  return (
    <>
      <div id="player-page-content">
        {popup.show === true && <Popup player={popup.player} x={togglePopup} />}
        <div id="query-section">
          <SearchBox onChange={handleInputChangeSearch} />
          <FilterMenu
            filterArray={[
              { name: 'Position', options: getAllPositions() },
              { name: 'Team', options: getAllTeams() },
            ]}
          />
          <SortMenu onChange={handleInputChangeSort} options={sortOptions} />
          <ResetButton onClick={resetFilters} />
          {filterOptions.length > 0 && displayChosenFilters()}
        </div>
        <section id="player-section">{displayPlayers()}</section>
      </div>
    </>
  );
}

function PlayerCard({ player, onClick }) {
  return (
    <div class="player-card" onClick={() => onClick(player)}>
      <img class="player-headshot" src={player.headshotSrc}></img>
      <a class="player-name">{player.firstName + ' ' + player.lastName}</a>
      <div class="player-country">
        <img src={player.countryPic}></img>
        <p>{player.country}</p>
      </div>
      <p class="player-pos">{player.position}</p>
    </div>
  );
}
