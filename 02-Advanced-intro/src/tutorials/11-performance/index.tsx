import { useCallback, useState } from "react";
import { data } from "../../data";
import List from "./List";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(data);

  const removePerson = useCallback((id) => {
    const remove = people.filter((person) => person.id !== id);
    setPeople(remove);
  },[people])

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <button onClick={() => handleCount()}>Click {count}</button>
      <List people={people} removePerson={removePerson} />
    </div>
  );
};

export default Memo;
