import { useState } from "react";

const ToggleChallenge = () => {
  const [alert, setAlert] = useState(false);

  const toogleAlert = () => {
    if (alert) {
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  return (
    <div>
      <button onClick={toogleAlert}>toogle</button>
      {alert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
};

export default ToggleChallenge;
