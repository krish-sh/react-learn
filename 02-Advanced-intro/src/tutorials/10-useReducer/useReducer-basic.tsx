import { useState } from "react";
import { data } from "../../data";

interface People {
  id: number;
  name: string;
}

const UseReducerBasic = () => {
  const [people, setPeople] = useState<People[]>(data);

  const handleRemove = (id: number) => {
    const remove = people.filter((person) => person.id !== id);
    setPeople(remove);
  };

  const handleClear = () => {
    setPeople([]);
  };

  const handleReset = () => {
    setPeople(data);
  };

  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <button onClick={() => handleRemove(person.id)}>remove</button>
        </div>
      ))}
      <button
        onClick={
          people.length === 0 ? () => handleReset() : () => handleClear()
        }
      >
        {people.length === 0 ? "Reset" : "Clear"}
      </button>
    </div>
  );
};

export default UseReducerBasic;
