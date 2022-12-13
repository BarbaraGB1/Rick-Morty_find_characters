import FilterName from "./FilterName";
import FilterStatus from "./FilterStatus";
const Filter = (props) => {
  const handlesubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <FilterName
          handleName={props.handleName}
          filteredName={props.filteredName}
        ></FilterName>
        <FilterStatus
          handleStatus={props.handleStatus}
          filteredStatus={props.filteredStatus}
        ></FilterStatus>
      </form>
    </>
  );
};
export default Filter;
