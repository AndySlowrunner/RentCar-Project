import { ErrorMessage, Formik } from "formik";
import makes from '../../makes.json';
import * as yup from 'yup';
import { BrandForm, FilterButton, MileageDiv, MileageForm, MileageLeft, MileageRight, PriceForm, StyledField, StyledForm } from "./FilterForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";

const schema = yup.object().shape({
  carBrand: yup
    .string()
    .required(),
  price: yup
    .string()
    .required(),
  mileage: yup
    .number()
    .required()
});

const options = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 150, 160, 170, 180, 190, 200];


const FilterForm = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const hundleSubmit = value => dispatch(setFilter(value));

    return (
      <Formik
        initialValues={{
          carBrand: '',
          price: '',
          mileage: ''
        }}
        validationSchema={schema}
        onSubmit={hundleSubmit}
      >
        <StyledForm>
          <BrandForm>
            <label>Car brand</label>
            <StyledField as="select" name="carBrand" value={value}>
              <option value="">Enter the text</option>
              {makes.map(make => (
                <option value={make}>{make}</option>
              ))}
            </StyledField>
            <ErrorMessage name="carBrand" />
          </BrandForm>
          <PriceForm>
            <label htmlFor="price">Price/1 hour</label>
            <StyledField as="select" name="price">
              {options.map(option => (
                <option value={`To ${option}$`}>{option}</option>
              ))}
            </StyledField>
            <ErrorMessage name="price" />
          </PriceForm>
          <MileageForm>
            <label>Car mileage/km</label>
            <MileageDiv>
              <MileageLeft type="textarea" name="left" />
              <MileageRight type="textarea" name="right" />
            </MileageDiv>
            <ErrorMessage name="mileage" />
          </MileageForm>
          <FilterButton type="submit">Search</FilterButton>
        </StyledForm>
      </Formik>
    );
};

export default FilterForm;