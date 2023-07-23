import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import './style.css';

const StorePage = () => {
  const [store, setStore] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();

  const handleEdit = () => {
    console.log(id, 'is edited');
    setIsEditing(true);
  };

  useEffect(() => {
    fetch(`https://some-data.onrender.com/stores/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStore(data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Store {store?.name}</h1>
          <p>
            Store id :<b> {store.id} </b>
          </p>
          <p>
            Address :<b> {store.cities}</b>{' '}
          </p>
        </>
      )}
      <button className="actionbutton" name="edit" onClick={handleEdit}>
        Edit
      </button>
      {isEditing && <Navigate to={PATHS.STORES.EDIT.replace(':id', id)} replace />}
    </>
  );
};

export default StorePage;
