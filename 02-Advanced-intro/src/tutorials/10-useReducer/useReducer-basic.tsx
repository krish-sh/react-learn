import { useReducer, useState } from "react";
import { data } from "../../data";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./action";
import reducer from "./reducer";

interface People {
  id: number;
  name: string;
}

interface State {
  people: People[];
}

const DefaultState: State = {
  people: data,
};

const UseReducerBasic = () => {
  const [state, dispatch] = useReducer(reducer, DefaultState);

  const handleRemove = (id: number) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const handleClear = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const handleReset = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {state.people.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <button onClick={() => handleRemove(person.id)}>remove</button>
        </div>
      ))}
      <button
        onClick={
          state.people.length === 0 ? () => handleReset() : () => handleClear()
        }
      >
        {state.people.length === 0 ? "Reset" : "Clear"}
      </button>
    </div>
  );
};

export default UseReducerBasic;
