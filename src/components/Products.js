import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BooksContext } from '../App';

const Products = (props) => {
  //För att få hela boks listan
  const context = useContext(BooksContext);

  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  return (
    <div>
      <h2>
        <span>Böcker</span>
        <Link to="/cart">Varukorg ({totalCartCount})</Link>
      </h2>

      {/* för att mappa på böcker och få ut alla element på div */}
      {context.state.bookList.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Författare: {book.author}</p>
            <p>Pris: {book.price}:-</p>
            <button onClick={() => context.addToCart(book)}>Lägg till</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
