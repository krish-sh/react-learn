import { useState } from "react";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState<string[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newUser = [...users, name.trim()];
    setUsers(newUser);
    setName("");
  };

  const handleDelete = (index: number) => {
    setUsers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Add User</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <hr />
          <button type="submit">submit</button>
        </div>
      </form>
      <hr />
      {users.length === 0 ? (
        <h4>No User</h4>
      ) : (
        <div>
          {users.map((user, index) => (
            <div key={index}>
              <h4>{user}</h4>
              <button onClick={() => handleDelete(index)}>delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
