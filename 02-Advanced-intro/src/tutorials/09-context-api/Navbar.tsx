import { createContext, useState } from "react";
import NavLink from "./NavLink";

interface User {
  name: string | null;
}

export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState<User>({ name: "Krish" });

  const logout = () => {
    setUser({ name: null });
  };
  const login = () => {
    setUser({ name: "Krish" });
  };

  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <nav
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "0 24px",
        }}
      >
        <h3>Context-Api</h3>
        <NavLink />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
