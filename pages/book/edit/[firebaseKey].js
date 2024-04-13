import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleBook } from '../../../api/bookData';
import BookForm from '../../../components/forms/BookForm';

export default function EditBook() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleBook(firebaseKey).then(setEditItem);
  }, []);

  return (<BookForm obj={editItem} />);
}
