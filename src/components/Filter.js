import FilterName from "./FilterName";

const Filter = (props) => {
  const handlesubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <FilterName
          handleValue={props.handleValue}
          filteredName={props.filteredName}
        ></FilterName>
      </form>
    </>
  );
};
export default Filter;
