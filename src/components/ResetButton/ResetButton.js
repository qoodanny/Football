import './ResetButton.css';

export default function ResetButton({ onClick }) {
  return (
    <button id="reset" onClick={onClick}>
      Reset All
    </button>
  );
}
