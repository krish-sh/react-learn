import { lazy, useState, useTransition, Suspense } from "react";
const SlowComponent = lazy(() => import("./SlowComponent"));
// import SlowComponent from "./SlowComponent";

const Index = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState<React.ReactNode[]>([]);
  const [isPending, startTransition] = useTransition();
  const [show, setShow] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    startTransition(() => {
      setItems(Array.from({ length: 5000 }, (_, i) => i));
    });
  };

  return (
    <section>
      <form>
        <input type="text" value={text} onChange={handleChange} />
      </form>

      <div>
        <h4>Item Below</h4>
      </div>

      {isPending ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          {items.map((i) => (
            <div key={i}>
              <img src="/favicon.svg" alt="" />
            </div>
          ))}
        </div>
      )}

      <button onClick={() => setShow(!show)}>toogle</button>

      <Suspense fallback={<h4>Loading...</h4>}>
        {show && <SlowComponent />}
      </Suspense>
    </section>
  );
};

export default Index;
