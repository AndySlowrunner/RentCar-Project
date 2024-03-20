import { Formik } from "formik";
import makes from '../../makes.json';
import * as yup from 'yup';
import { FilterButton, FormBlock, MileageForm, StyledField, StyledForm } from "./FilterForm.styled";

const schema = yup.object().shape({
  carBrand: yup
    .string()
    .required(),
});

const FilterForm = () => {

    return (
      <Formik
        initialValues={{
          carBrand: '',
          price: '',
        }}
        validationSchema={schema}
      >
        <StyledForm>
          <FormBlock>
            <label>Car brand</label>
            <StyledField as="select" name="carBrand">
              {makes.map(make => (
                <option value="Enter the text">{make}</option>
              ))}
            </StyledField>
          </FormBlock>
          <FormBlock>
            <label htmlFor="price">Price/1 hour</label>
            <StyledField as="select" name="price" id="price" placeholder="To $">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
              <option value="">50</option>
              <option value="">60</option>
              <option value="">70</option>
              <option value="">80</option>
              <option value="">90</option>
              <option value="">100</option>
            </StyledField>
          </FormBlock>
          <FormBlock>
            <label>Car mileage/km</label>
            <MileageForm>
              <StyledField type="text" name="name" />
              <StyledField type="text" name="name" />
            </MileageForm>
          </FormBlock>
          <FilterButton>Search</FilterButton>
        </StyledForm>
      </Formik>
    );
};

export default FilterForm;