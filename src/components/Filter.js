import FilterName from "./FilterName";
import FilterStatus from "./FilterStatus";
const Filter = (props) => {
  const handlesubmit = (event) => {
    event.preventDefault();
  };
  const renderSearch = () => {
    if (props.toggleSearch === true) {
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
    }
  };
  return (
    <>
      <button className="search" id="search" onClick={props.handleClick}>
        Buscador
      </button>

      {renderSearch()}
    </>
  );
};
export default Filter;
