import { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("krish");
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <h2>{name || "No data"}</h2>
      {text && (
        <div>
          <h2>{name}</h2>
        </div>
      )}
      <hr />
      {loading ? <h2>Loading...</h2> : <h2>Welocome</h2>}
      <button onClick={() => setLoading(false)}>
        {loading ? "Submit" : "Submitted"}
      </button>
    </div>
  );
};

export default ShortCircuit;
