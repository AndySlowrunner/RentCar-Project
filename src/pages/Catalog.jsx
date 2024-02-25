import FilterForm from "components/FilterForm/FilterForm";
import ItemsList from "components/ItemsList/ItemsList";

const Catalog = () => {
  return (
    <div>
      <FilterForm/>
      <ItemsList/>
    </div>
  );
};

export default Catalog;