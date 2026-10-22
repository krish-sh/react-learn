import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

const LowerState = () => {
  const [user, setUser] = useState<string[]>([]);

  const addUser = (name: string) => {
    setUser((prev) => [...prev, name]);
  };

  return (
    <div>
      <Input onAdd={addUser} />
      <List users={user} />
    </div>
  );
};

export default LowerState;
