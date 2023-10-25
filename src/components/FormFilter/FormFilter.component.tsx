import React, { useEffect, useState } from 'react';
import useFetch from 'hooks/useFetch';
import { useGlobalContext, IBreed } from 'hooks/useGlobalContext';
import { StyledForm, StyledFormFooter } from './FormFilter.styled';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface IFormFilterProps {
  hideButton?: boolean;
}

interface IOptions {
  id: string;
  name: string;
}

const FormFilter: React.FC<IFormFilterProps> = ({ hideButton }) => {
  const [hideFormFooter, setHideFormFooter] = useState(true);
  const { data } = useFetch(`${process.env.REACT_APP_BASE_URL}breeds`);
  const {
    globalState: { breedId },
    setGlobalState,
  } = useGlobalContext();

  const handleSelectBreed = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGlobalState((prevState: IBreed) => {
      return { ...prevState, breedId: event.target.value };
    });
  };

  const handleLoadAdditionalData = () => {
    setGlobalState((prevState: IBreed) => {
      return { ...prevState, page: prevState.page + 1 };
    });
  };

  useEffect(() => {
    const bottomPageElement = document.querySelector('#bottom');

    if (breedId && bottomPageElement) {
      const bottomObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          setHideFormFooter(false);
        } else {
          setHideFormFooter(true);
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
        <Form.Label>Cat Finder</Form.Label>
        <Form.Select aria-label='Form filter select'>
          <option value={''}>Select a breed</option>
          {data.map(({ id, name }: IOptions) => (
            <option
              key={id}
              value={id}
            >
              {name}
            </option>
          ))}
        </Form.Select>
        <StyledFormFooter
          className='form-footer-wrapper'
          hideFormFooter={hideFormFooter}
        >
          {!hideButton && (
            <Button
              onClick={handleLoadAdditionalData}
              disabled={!breedId}
            >
              Load more
            </Button>
          )}
          <div className='form-footer'>
            <p>@cats footer</p>
          </div>
        </StyledFormFooter>
      </Form.Group>
    </StyledForm>
  );
};

export default FormFilter;
