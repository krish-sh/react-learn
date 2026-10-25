import { useEffect, useState } from "react";

const SlowComponent = () => {
  const [item, setItem] = useState<number[]>([]);

  useEffect(() => {
    setItem(Array.from({ length: 5000 }, (_, i) => i));
  }, []);

  return (
    <div>
      {item.map((i) => (
        <div key={i}>
          <img src="/favicon.svg" alt="" />
        </div>
      ))}
    </div>
  );
};

export default SlowComponent;
