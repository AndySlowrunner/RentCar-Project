import { ErrorMessage, Formik } from "formik";
import makes from '../../makes.json';
import * as yup from 'yup';
import { BrandForm, FilterButton, MileageDiv, MileageForm, MileageLeft, MileageRight, PriceForm, StyledField, StyledForm } from "./FilterForm.styled";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

const schema = yup.object().shape({
  carBrand: yup.string().required('Required!'),
  price: yup.number().required('Required!'),
  mileage: yup.number().required('Required!'),
});

const options = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 150, 160, 170, 180, 190, 200];


const FilterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => dispatch(setFilter(values.carBrand));

    return (
      <Formik
        initialValues={{
          carBrand: '',
          price: 0,
          mileage: 0,
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange }) => (
          <StyledForm>
            <BrandForm>
              <label>Car brand</label>
              <StyledField
                as="select"
                name="carBrand"
                value={values.carBrand}
                onChange={handleChange}
              >
                {makes.map((make, index) => (
                  <option key={index} value={make}>
                    {make}
                  </option>
                ))}
              </StyledField>
              <ErrorMessage name="carBrand" component="div" />
            </BrandForm>
            <PriceForm>
              <label htmlFor="price">Price/1 hour</label>
              <StyledField
                as="select"
                name="price"
                value={values.price}
                onChange={handleChange}
              >
                {options.map(option => (
                  <option value={option}>{option}</option>
                ))}
              </StyledField>
              <ErrorMessage name="price" component="div" />
            </PriceForm>
            <MileageForm>
              <label>Car mileage/km</label>
              <MileageDiv>
                <MileageLeft type="textarea" name="left" />
                <MileageRight type="textarea" name="right" />
              </MileageDiv>
              <ErrorMessage name="mileage" component="div" />
            </MileageForm>
            <FilterButton type="submit">Search</FilterButton>
          </StyledForm>
        )}
      </Formik>
    );
};

export default FilterForm;