import './FilterMenu.css';
import HoverableDropdown from '../HoverableDropdown/HoverableDropdown.js';
import { IoFilter } from 'react-icons/io5';
import { useEffect } from 'react';

//filterArray -- Array of objects:
/*obj:
{
    name: name of the filter
    options: that filters options
}
*/
export default function FilterMenu({ filterArray }) {
  const clickOutsideFilter = (click) => {
    let clickedOutsideFilter =
      !document.getElementById('filter-button').contains(click.target) &&
      !document.getElementById('filter-content').contains(click.target);

    if (clickedOutsideFilter) {
      document.getElementById('filter-content').style.display = 'none';
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutsideFilter);

    return () => {
      document.removeEventListener('mousedown', clickOutsideFilter);
    };
  }, []);

  return (
    <div id="filters">
      <button
        class="query-input"
        id="filter-button"
        onClick={() => {
          let filters = document.getElementById('filter-content');

          filters.style.display === 'grid'
            ? (filters.style.display = 'none')
            : (filters.style.display = 'grid');
        }}
      >
        Filter{<IoFilter id="filter-icon" />}
      </button>
      <div id="filter-content">
        {filterArray.map((filter) => (
          <HoverableDropdown name={filter.name} items={filter.options} />
        ))}
      </div>
    </div>
  );
}
