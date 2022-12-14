import FilterName from "./FilterName";
import FilterStatus from "./FilterStatus";
import "../styles/Partials/Filter.scss";
const Filter = (props) => {
  const handlesubmit = (event) => {
    event.preventDefault();
  };
  const handleClick = (value) => {
    props.setToggleSearch(value);
  };

  return (
    <div className="containForm">
      <form onSubmit={handlesubmit}>
        <FilterName
          handleName={props.handleName}
          filteredName={props.filteredName}
          toggleSearch={props.toggleSearch}
          handleClick={handleClick}
        ></FilterName>
        <FilterStatus
          handleStatus={props.handleStatus}
          filteredStatus={props.filteredStatus}
          toggleSearch={props.toggleSearch}
          handleClick={handleClick}
        ></FilterStatus>
      </form>
      <button className="reset" onClick={props.handleReset}>
        Resetealo, nena
      </button>
    </div>
  );
};
export default Filter;
