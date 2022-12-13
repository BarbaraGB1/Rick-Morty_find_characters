import FilterName from "./FilterName";

const Filter = (props) => {
  return (
    <>
      <form>
        <FilterName
          handleValue={props.handleValue}
          filteredName={props.filteredName}
        ></FilterName>
      </form>
    </>
  );
};
export default Filter;
