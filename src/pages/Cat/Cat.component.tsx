import React from 'react';
import useFetch from 'hooks/useFetch';
import { useNavigate, createSearchParams, useParams } from 'react-router-dom';

const Cat: React.FC = () => {
  const { id } = useParams();
  console.log('id', id);
  const navigate = useNavigate();
  const {
    data: { url, breeds },
  } = useFetch(`https://api.thecatapi.com/v1/images/${id}`);
  console.log('data', breeds);
  const handleBack = () => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        breed: breeds[0].id,
      }).toString(),
    });
  };

  return (
    <React.Fragment>
      <button onClick={handleBack}>BACK</button>
      {breeds && (
        <div>
          <img
            src={url}
            alt=''
          />
          <p>{breeds[0].name}</p>
          <p>{breeds[0].origin}</p>
          <p>{breeds[0].description}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default Cat;
