import useToggle from "./toogle";

const Toogle = () => {
  const { value, toggle } = useToggle(true);

  return (
    <div>
      <button onClick={toggle}>Toogle</button>
      {value && <h4>show value</h4>}
    </div>
  );
};

export default Toogle;
