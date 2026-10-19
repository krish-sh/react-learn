import { useContext, useState } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  const { logout, user, login } = useContext(NavbarContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        justifyContent: "flex-end",
      }}
    >
      {user.name === null ? (
        <button
          onClick={login}
          style={{
            background: "blue",
            color: "white",
            borderRadius: "6px",
            border: "none",
            padding: "8px 14px ",
          }}
        >
          Please Login
        </button>
      ) : (
        <>
          <p>Hey there, {user.name}</p>
          <button
            onClick={logout}
            style={{
              background: "blue",
              color: "white",
              borderRadius: "6px",
              border: "none",
              padding: "8px 14px ",
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default UserContainer;
