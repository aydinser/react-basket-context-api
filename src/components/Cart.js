import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BooksContext } from '../App';

const Cart = () => {
  const context = useContext(BooksContext);

  //total funktionen på varukorgen
  const totalCartAmount = context.state.cart.reduce(
    (total, book) => (total = total + book.price * book.count),
    0
  );

  //varukorg räknaren som visar antal böcker på varukorgen
  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  return (
    <div>
      <h2>
        <Link to="/">Böcker</Link> <span>Varukorg({totalCartCount})</span>
      </h2>

      <h3>Total: {totalCartAmount}:-</h3>
      {context.state.cart.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Författare: {book.author}</p>
            <p>Pris: {book.price}:-</p>
            <p>Total: {book.price * book.count}:-</p>
            <p>Ni har {book.count} stycken av denna bok i varukorgen!</p>
            <button onClick={() => context.decrease(book.id)}>-</button>
            <button onClick={() => context.removeFromCart(book.id)}>
              Tabort från varukorgen
            </button>
            <button onClick={() => context.increase(book.id)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
