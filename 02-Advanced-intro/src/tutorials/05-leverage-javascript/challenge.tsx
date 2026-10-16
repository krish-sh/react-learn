import { people } from "../../data";
import { useState } from "react";

const Chanllenge = () => {
  const [data, setData] = useState(people);
  const [index, setIndex] = useState(0);

  const user = data[index];
  const img = user.images?.[0].small?.url;

  const Next = () => {
    if (index >= 0) {
      setIndex(index + 1);
    }
  };
  const Previous = () => {
    if (index >= 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      {img ? (
        <img src={img} alt={user.name} style={{ width: "50px" }} />
      ) : (
        <p>No image</p>
      )}
      <h2>{user.name}</h2>
      <h3>Nickname: {user.nickName}</h3>
      <button onClick={Previous} disabled={index === 0}>
        Previous
      </button>
      <button onClick={Next} disabled={index === data.length - 1}>
        Next
      </button>
    </div>
  );
};

export default Chanllenge;
