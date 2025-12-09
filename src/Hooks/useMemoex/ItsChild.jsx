export default function ItsChild({ handleClick }) {
  console.log("Child rendered");

  return (
    <button onClick={handleClick}>Child Button</button>
  );
}