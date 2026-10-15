import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Krish Sharma" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h2>{user ? `Hello there, ${user.name}` : "Please login"}</h2>
      <button onClick={() => (user ? logout() : login())}>
        {user ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default UserChallenge;
