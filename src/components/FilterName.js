import "../styles/Partials/Filter.scss";
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
        <div id="searchName" onClick={handleClickID}>
          <h2>Buscar por nombre</h2>
        </div>
        <div className={props.toggleSearch === "searchName" ? "" : "collapsed"}>
          <label htmlFor="name">
            Encuentra por nombre
            <input
              type="text"
              placeholder="Ejemplo:Morty Smith"
              id="name"
              name="name"
              onChange={handlechangeName}
              value={props.filteredName}
            />
          </label>
        </div>
      </fieldset>
    </>
  );
}
export default FilterName;
