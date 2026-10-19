import UserContainer from "./UserContainer";

const NavLink = () => {
  const link = ["Home", "About", "ContactUs"];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        justifyContent: "space-evenly",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "16px",
          listStyle: "none",
          color: "blue",
          margin: 0,
          padding: 0,
        }}
      >
        {link.map((l) => (
          <li key={l}>
            <a href="#">{l}</a>
          </li>
        ))}
      </ul>
      <div style={{ justifySelf: "end" }}>
        <UserContainer />
      </div>{" "}
    </div>
  );
};

export default NavLink;
