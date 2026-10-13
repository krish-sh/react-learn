import { useState } from "react";
const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

const people = [
  { id: 1, name: "bob", nickName: "Stud Muffin" },
  { id: 2, name: "peter" },
  {
    id: 3,
    name: "oliver",
    images: [
      {
        small: {
          url: "https://res.cloudinary.com/diqqf3eq2/image/upload/ar_1:1,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1595959121/person-1_aufeoq.jpg",
        },
      },
    ],
  },
  { id: 4, name: "david" },
];

const UseStateArray = () => {
  const [peoples, setPeoples] = useState(data);

  const remove = (id: number) => {
    const rm = peoples.filter((person) => person.id !== id);
    setPeoples(rm);
  };

  const clearAllData = () => {
    setPeoples([]);
  };
  return (
    <>
      <div>UseStateArray</div>
      {peoples.map((people) => (
        <div key={people.id}>
          <h3>{people.name}</h3>
          <button onClick={() => remove(people.id)}>remove</button>
        </div>
      ))}
      <button onClick={clearAllData}>Clear all items</button>
    </>
  );
};

export default UseStateArray;
