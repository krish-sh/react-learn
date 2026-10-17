const FormDataExample = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Form Data</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <hr />
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>
        <hr />
        <div>
          <label htmlFor="Password">Password:</label>
          <input type="text" id="Password" />
        </div>
        <hr />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormDataExample;
