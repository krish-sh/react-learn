import { useState } from "react";
import { data } from "../../data";
import List from "./List";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const remove = people.filter((person) => person.id !== id);
    setPeople(remove);
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
      <List people={people} removePerson={removePerson} />
    </div>
  );
};

export default Memo;
