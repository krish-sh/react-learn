import { useEffect, useRef, useState } from "react";

const UseRefBasic = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      isMounted.current = false;
    }

    console.log(isMounted.current);
  }, [value]);

  const handleClick = (e: any) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <h2>UseRef Basic</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={refContainer} />
        </div>
        <button>Submit</button>
        <hr />
      </form>
      <h4>Value: {value}</h4>
      <button onClick={() => setValue(value + 1)}>Click</button>
    </div>
  );
};

export default UseRefBasic;
