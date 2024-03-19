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
        }}
        validationSchema={schema}
      >
        <StyledForm>
          <FormBlock>
            <label>Car brand</label>
            <StyledField as="select" placeholder="carBrand">
              {makes.map(make => (
                <option value="Enter the text">{make}</option>
              ))}
            </StyledField>
          </FormBlock>
          <FormBlock>
            <label>Price/1 hour</label>
            <StyledField as="select" name="price">
              <option value="To $">10</option>
              <option value="To $">20</option>
              <option value="To $">30</option>
              <option value="To $">40</option>
              <option value="To $">50</option>
              <option value="To $">60</option>
              <option value="To $">70</option>
              <option value="To $">80</option>
              <option value="To $">90</option>
              <option value="To $">100</option>
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