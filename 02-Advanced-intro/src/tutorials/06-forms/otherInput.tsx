import { useState } from "react";

const frameworks = ["react", "angular", "vue", "svelte"];

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(shipping, framework);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Other Inputs</h2>
        <div>
          <label htmlFor="shipping">Free shiping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={(e) => setShipping(e.target.checked)}
          />
        </div>
        <hr />
        <div>
          <label htmlFor="framework">Framework</label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={(e) => setFramework(e.target.value)}
          >
            {frameworks.map((i) => {
              return (
                <option value={i} key={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OtherInputs;
