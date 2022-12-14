import "../styles/Partials/FilterStatus.scss";
import { FiChevronDown } from "react-icons/fi";
function FilterStatus(props) {
  const handlechangeStatus = (ev) => {
    props.handleStatus(ev.target.value);
  };
  const handleClickID = (ev) => {
    props.handleClick(ev.currentTarget.id);
  };

  return (
    <>
      <fieldset>
        <div
          id="searchStatus"
          onClick={handleClickID}
          className="containStatus"
        >
          <FiChevronDown></FiChevronDown>
          <h2>Veamos quien ha estirado la pata</h2>
          <FiChevronDown></FiChevronDown>
        </div>
        <div
          className={`selectStatus
            ${props.toggleSearch === "searchStatus" ? "" : "collapsed "}`}
        >
          <label htmlFor="status">
            <select
              name="status"
              id="status"
              onChange={handlechangeStatus}
              value={props.filteredStatus}
              className="searchstatus"
            >
              <option value="">Estado</option>
              <option value="Alive">Vivo</option>
              <option value="Dead">Muerto</option>
            </select>
          </label>
        </div>
      </fieldset>
    </>
  );
}
export default FilterStatus;
