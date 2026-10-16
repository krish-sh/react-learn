import { useState } from "react";

const ControlledInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e: any) => {
    e.preventDefault();
    setEmail("");
    setName("");
  };

  return (
    <form onSubmit={submit}>
      <h3>Controlled Forms</h3>
      <label htmlFor="Name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <hr />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <hr />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledInput;
