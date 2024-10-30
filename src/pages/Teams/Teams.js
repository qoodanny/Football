import './Teams.css';

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IoCloseSharp } from 'react-icons/io5';

import { teams } from '../../data/TeamData.js';

import { teamFilter } from './tools/Filter.js';
import { fncMap } from './tools/SortFunctions.js';

import SearchBox from '../../components/SearchBox/SearchBox.js';
import FilterMenu from '../../components/FilterMenu/FilterMenu.js';
import SortMenu from '../../components/SortMenu/SortMenu.js';
import ResetButton from '../../components/ResetButton/ResetButton.js';

export default function Teams() {
  const [searchParams, setSearchParams] = useSearchParams({ search: '' }); //do not need default values

  const search = searchParams.get('search'); //?search=[search]
  const filterOptions = searchParams.getAll('fop'); //?fop=[filter]-[option] --> can be []
  const sort = searchParams.get('sort'); //?sort=[sort]

  const sortOptions = [
    { sort: 'nameAZ', display: 'A-Z Alphabetical' },
    { sort: 'nameZA', display: 'Z-A Alphabetical' },
  ];

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

  const handleInputChangeSort = (event) => {
    setSearchParams(
      (prev) => {
        prev.set('sort', event.target.value);
        return prev;
      },
      { replace: true },
    );
  };

  const displayTeams = () => {
    let teamArray = [];
    let filteredTeams = teamFilter(
      search !== null && search.length > 0
        ? teams.filter((team) =>
            team.name.toLowerCase().includes(search.toLowerCase()),
          )
        : teams,
      filterOptions,
    ).sort(fncMap.get(sort));

    for (const t of filteredTeams) teamArray.push(<TeamCard team={t} />);

    if (teamArray.length === 0)
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
    else return <div id="teams">{teamArray}</div>;
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

  const getAllContinents = () => {
    let arr = [];

    for (const team of teams) {
      if (arr.filter((obj) => obj.name === team.continent).length === 0) {
        arr.push({
          name: team.continent,
          onClick: handleInputChangeFilterOption,
        });
      }
    }

    return arr;
  };

  return (
    <>
      <div id="team-page-content">
        <div id="query-section">
          <SearchBox onChange={handleInputChangeSearch} />
          <FilterMenu
            filterArray={[{ name: 'Continent', options: getAllContinents() }]}
          />
          <SortMenu onChange={handleInputChangeSort} options={sortOptions} />
          <ResetButton onClick={resetFilters} />
          {filterOptions.length > 0 && displayChosenFilters()}
        </div>
        <section id="team-section">{displayTeams()}</section>
      </div>
    </>
  );
}

function TeamCard({ team }) {
  return (
    <div class="team-card">
      <img class="team-flag" src={team.countryPic}></img>
      <div class="team-name">{team.name}</div>
      <p class="team-trigram">{'(' + team.trigram + ')'}</p>
    </div>
  );
}
