import React from "react";

const Form = () => {
  const handleForm = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle submit");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Typical form</h2>
        <input type="text" onChange={handleForm} />
        <button type="submit">Click me</button>
      </form>
    </>
  );
};

export default Form;
