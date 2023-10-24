import React from 'react';
import useFetch from 'hooks/useFetch';
import { useGlobalContext } from 'hooks/useGlobalContext';
import { StyledForm } from './FormFilter.styled';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface IOptions {
  id: string;
  name: string;
}

const FormFilter: React.FC = () => {
  const { data } = useFetch(`${process.env.REACT_APP_BASE_URL}breeds`);
  const { setGlobalState } = useGlobalContext();

  const handleSelectBreed = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGlobalState((prevState) => {
      return { ...prevState, breedId: event.target.value };
    });
  };

  const handleLoadMoreData = () => {
    setGlobalState((prevState) => {
      return { ...prevState, page: prevState.page + 1 };
    });
  };

  return (
    <StyledForm>
      <Form.Group
        controlId='formGroupEmail'
        onChange={handleSelectBreed}
      >
        <Form.Label>Cat Breeds</Form.Label>
        <Form.Select aria-label='Form filter select'>
          <option value={undefined}>Select a breed</option>
          {data.map(({ id, name }: IOptions) => (
            <option
              key={id}
              value={id}
            >
              {name}
            </option>
          ))}
        </Form.Select>
        <Button
          variant='primary'
          onClick={() => handleLoadMoreData()}
        >
          Load more
        </Button>
      </Form.Group>
    </StyledForm>
  );
};

export default FormFilter;
