import './SearchBox.css';
import { IoSearch } from 'react-icons/io5';

export default function SearchBox({ onChange }) {
  return (
    <div id="search-input-container">
      <IoSearch id="mag" />
      <input
        class="query-input"
        id="search-box"
        type="text"
        onChange={onChange}
        placeholder="Type to search"
      />
    </div>
  );
}
