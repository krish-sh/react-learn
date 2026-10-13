const Count = () => {
  let count = 0;
  function handleClick() {
    count = count + 1;
    console.log(count);
    
  }
  return (
    <div>
      <button onClick={handleClick}>click me ${count}</button>
    </div>
  );
};

export default Count;
