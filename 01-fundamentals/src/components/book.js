import React from "react";
import "../App.css";
import image1 from "../asserts/image1.jpg";
import image2 from "../asserts/image2.jpg";
import image3 from "../asserts/image3.jpg";

const Book = () => {
  const books = [
    {
      id: 1,
      img: image1,
      bookName: "The Witch",
      Author: "Freida McFadden",
      price: "$48",
    },
    {
      id: 2,
      img: image2,
      bookName: "The Answer Is No: A Short Story",
      Author: "Fredrik Backman",
      price: "$4",
    },
    {
      id: 3,
      img: image3,
      bookName: "Fake it 'til",
      Author: "Laura Carten",
      price: "$8",
    },
  ];
  return (
    <div className="book-list">
      {books.map((item) => (
        <div className="book-card" key={item.id}>
          <img src={item.img} alt={item.bookName} />
          <h3>{item.bookName}</h3>
          <p>{item.Author}</p>
          <p>{item.price}</p>
          <button
            onClick={() =>
              alert(`Item added ${item.bookName}, Price: ${item.price}`)
            }
          >
            Click to Order
          </button>
        </div>
      ))}
    </div>
  );
};

export default Book;
