import React from "react";

const Form = () => {
  const handleForm = () => {
    console.log("Handle form change");
  };

  const handleClick = () => {
    alert("Handle button click");
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Handle submit");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Typical form</h2>
        <input type="text" onChange={handleForm} />
      </form>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default Form;
