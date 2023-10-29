import React, { useEffect, useState } from 'react';
import useFetch from 'hooks/useFetch';
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
  const {
    globalState: { breedId },
    setGlobalState,
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
      <Form.Group
        controlId='formGroupEmail'
        onChange={handleSelectBreed}
      >
        <Form.Label className='form__label'>{text.brandName}</Form.Label>
        <Form.Select
          aria-label='Form filter select'
          value={breedId}
          className='form__select'
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
          <StyledFormButtonWrapper hide={hideFormButton}>
            <Button
              onClick={handleLoadAdditionalData}
              disabled={!breedId}
              className='form__btn'
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
