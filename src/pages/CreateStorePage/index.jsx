
import React, { useState } from 'react';
import axios from 'axios';
import { H1 } from '../../components/Typography';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import StoresForm from '../../components/StoresForm';

const CreateStorePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoToListPage, setIsGoToListPage] = useState(false);

  const handleCreateStore = async (body) => {
    setIsLoading(true);
    try {
      const res = await axios.post('https://some-data.onrender.com/stores', body);
      setIsLoading(false);
      setIsGoToListPage(true);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="titlePage">
        <H1>Create Store</H1>
      </div>

        <StoresForm handleSubmit={handleCreateStore} isLoading={isLoading} />
      {isGoToListPage && <Navigate to={PATHS.STORES.ROOT} />}
    </div>
  );
};


export default CreateStorePage