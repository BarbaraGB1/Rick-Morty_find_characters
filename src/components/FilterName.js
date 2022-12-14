import "../styles/Partials/Filter.scss";
import "../styles/Partials/FilterName.scss";
import { FiChevronDown } from "react-icons/fi";
function FilterName(props) {
  const handlechangeName = (ev) => {
    props.handleName(ev.target.value);
  };
  const handleClickID = (ev) => {
    props.handleClick(ev.currentTarget.id);
  };
  console.log(props.toggleSearch);
  return (
    <>
      <fieldset>
        <div id="searchName" onClick={handleClickID} className="containName">
          <FiChevronDown></FiChevronDown>{" "}
          <h2>Que crack, te acuerdas del nombre</h2>
          <FiChevronDown></FiChevronDown>
        </div>
        <div
          className={`inputName ${
            props.toggleSearch === "searchName" ? "" : "collapsed"
          }`}
        >
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Ejemplo:Morty Smith"
              id="name"
              name="name"
              onChange={handlechangeName}
              value={props.filteredName}
              className="searchName"
            />
          </label>
        </div>
      </fieldset>
    </>
  );
}
export default FilterName;
