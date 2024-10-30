import './SortMenu.css';

export default function SortMenu({ onChange, options }) {
  return (
    <label id="sort">
      <select class="query-input" id="sort-select" onChange={onChange}>
        <option value="default" selected disabled hidden>
          Choose sort...
        </option>
        {options.map((option) => (
          <option value={option.sort}>{option.display}</option>
        ))}
      </select>
    </label>
  );
}
