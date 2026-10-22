import { useState } from "react";
import { data } from "../../../data";
import List from "./List";
import Count from "./count";

const LowerState = () => {
  const [people, setPeople] = useState(data);

  return (
    <div>
      <Count />
      <List people={people} />
    </div>
  );
};

export default LowerState;
