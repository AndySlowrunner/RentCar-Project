import { Formik } from "formik";
import makes from '../../makes.json';
import * as yup from 'yup';
import { BrandForm, FilterButton, MileageDiv, MileageForm, MileageLeft, MileageRight, PriceForm, StyledField, StyledForm } from "./FilterForm.styled";

const schema = yup.object().shape({
  carBrand: yup
    .string()
    .required(),
});

const options = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 150, 160, 170, 180, 190, 200];

const FilterForm = () => {

    return (
      <Formik
        initialValues={{
          carBrand: '',
          price: 'To $',
        }}
        validationSchema={schema}
      >
        <StyledForm>
          <BrandForm>
            <label>Car brand</label>
            <StyledField as="select" name="carBrand">
              {makes.map(make => (
                <option value="Enter the text">{make}</option>
              ))}
            </StyledField>
          </BrandForm>
          <PriceForm>
            <label htmlFor="price">Price/1 hour</label>
            <StyledField as="select" name="price" id="price">
              {options.map(option => (
                <option key={option.length} value={option}>
                  {option}
                </option>
              ))}
            </StyledField>
          </PriceForm>
          <MileageForm>
            <label>Car mileage/km</label>
            <MileageDiv>
              <MileageLeft type="textarea" name="left" />
              <MileageRight type="textarea" name="right" />
            </MileageDiv>
          </MileageForm>
          <FilterButton>Search</FilterButton>
        </StyledForm>
      </Formik>
    );
};

export default FilterForm;