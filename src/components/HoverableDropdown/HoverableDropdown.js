import './HoverableDropdown.css';

/*
item:
{
    name: [string]
    onClick: [function]
}
*/
export default function HoverableDropdown({ name, items }) {
  const onMouseOver = () => {
    document.getElementsByName('content-' + name)[0].style.display = 'flex';
    document.getElementsByName('content-' + name)[0].style.flexDirection =
      'column';
  };

  const onMouseOut = () => {
    document.getElementsByName('content-' + name)[0].style.display = 'none';
  };

  return (
    <div class="dropdown" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <button id="dropbtn">{name}</button>
      <div id="content" name={'content-' + name}>
        {items.map((i) => (
          <label for={name + '-' + i.name}>
            <input
              name={name + '-' + i.name}
              id={name + '-' + i.name}
              type="checkbox"
              onClick={i.onClick}
            ></input>
            {i.name}
          </label>
        ))}
      </div>
    </div>
  );
}
