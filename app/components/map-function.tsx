"use  client";

const products = [
  { id: 1, name: "Apple", isFruit: true },
  { id: 2, name: "Banana", isFruit: true },
  { id: 3, name: "Cabbage", isFruit: false },
  { id: 4, name: "LadyFinger", isFruit: false },
];

export function Products() {
  let listItems = products.map((item) => (
    <li
      key={item.id}
      style={{
        backgroundColor: item.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {item.name}
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}
