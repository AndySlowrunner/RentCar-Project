import { Formik } from "formik";
import makes from '../../makes.json';
import * as yup from 'yup';
import { StyledField, StyledForm } from "./FilterForm.styled";

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
          <label>Car brand</label>
          <StyledField as="select" name="carBrand">
            {makes.map(make => (
              <option value="Enter the text">{make}</option>
            ))}
          </StyledField>
        </StyledForm>
      </Formik>
    );
};

export default FilterForm;