import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteBook } from '../api/bookData';

export default function BookCard({ bookObj, onUpdate }) {
  const deleteThisBook = () => {
    if (window.confirm(`Are you sure you wanna delete ${bookObj.title}?`)) {
      deleteBook(bookObj.firebaseKey).then(() => {
        onUpdate();
      });
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={bookObj.image} alt={bookObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{bookObj.title}</Card.Title>
        <p className="card-text bold">{bookObj.sale && <span>SALE<br /></span> } ${bookObj.price.toFixed(2)}</p>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        <Link href={`/book/${bookObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/book/edit/${bookObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisBook} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

BookCard.propTypes = {
  bookObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    sale: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
