import { useState } from "react";

const Object = () => {
  const [person, setPerson] = useState({
    name: "krish",
    age: "19"
  })

  const changeValue = () => {
   setPerson({...person, name: "Harish"})
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      
      <button onClick={changeValue}>Show john details</button>
    </>
  );
};

export default Object;
