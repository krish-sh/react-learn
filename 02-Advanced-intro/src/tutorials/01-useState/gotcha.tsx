import { useState } from "react";

const Gotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      console.log(value);

      setValue(value + 1);
    }, 3000);
  };
  return (
    <div>
      gotcha
      <button onClick={handleClick}>button Click {value}</button>
    </div>
  );
};

export default Gotcha;
