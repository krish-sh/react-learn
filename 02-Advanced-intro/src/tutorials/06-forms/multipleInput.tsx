import { useState } from "react";

interface User {
  name: string;
  email: string;
  password: string;
}

const MultipleInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUser] = useState<User[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(password);
    setUser((prev) => [...prev, { name, email, password }]);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Multiple Froms</h2>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <hr />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <hr />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <hr />
        <button type="submit">Submit</button>
      </form>
      <div>
        {users.map((user, i) => (
          <div key={i}>
            <h2>name: {user.name}</h2>
            <p>email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleInputs;
