import React, { useEffect, useState } from 'react';
import useFetch from 'hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext, IGlobalState } from 'hooks/useGlobalContext';
import { StyledForm, StyledFormButtonWrapper } from './FormFilter.styled';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import text from 'contents/text.json';

interface IFormFilterProps {
  allDataIsLoaded?: boolean | null;
}

interface IOptions {
  id: string;
  name: string;
}

const FormFilter: React.FC<IFormFilterProps> = ({ allDataIsLoaded }) => {
  const [hideFormButton, setHideFormButton] = useState(true);
  const { data } = useFetch('breeds');
  const navigate = useNavigate();
  const {
    globalState: { breedId },
    setGlobalState,
    resetGlobalState,
  } = useGlobalContext();

  const handleSelectBreed = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGlobalState((prevState: IGlobalState) => {
      return { ...prevState, breedId: event.target.value };
    });
  };

  const handleLoadAdditionalData = () => {
    setGlobalState((prevState: IGlobalState) => {
      return { ...prevState, page: prevState.page + 1 };
    });
  };

  const handleNavigateHome = () => {
    navigate('/');
    resetGlobalState();
  };

  useEffect(() => {
    const bottomPageElement = document.querySelector('#bottom-observer');

    if (breedId && bottomPageElement) {
      const bottomObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          setHideFormButton(false);
        } else {
          setHideFormButton(true);
        }
      });

      bottomObserver.observe(bottomPageElement);
    }
  }, [breedId]);

  return (
    <StyledForm>
      <Form.Group controlId='formGroupEmail'>
        <Form.Label onClick={handleNavigateHome}>{text.brandName}</Form.Label>
        <Form.Select
          aria-label='Form filter select'
          value={breedId}
          onChange={handleSelectBreed}
        >
          <option
            value={''}
            disabled={breedId !== ''}
          >
            {text.selectDefaultValue}
          </option>
          {data?.map(({ id, name }: IOptions) => (
            <option
              key={id}
              value={id}
            >
              {name}
            </option>
          ))}
        </Form.Select>
        {!allDataIsLoaded && (
          <StyledFormButtonWrapper $hide={hideFormButton}>
            <Button
              onClick={handleLoadAdditionalData}
              disabled={!breedId}
              className='form-btn'
            >
              {text.buttonLoadMore}
            </Button>
          </StyledFormButtonWrapper>
        )}
      </Form.Group>
    </StyledForm>
  );
};

export default FormFilter;
