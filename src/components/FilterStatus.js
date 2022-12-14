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
        <div id="searchStatus" onClick={handleClickID}>
          Buscar por nombre
        </div>
        <div
          className={props.toggleSearch === "searchStatus" ? "" : "collapsed"}
        >
          <label htmlFor="status">
            ¿Quién esta vivo?
            <select
              name="status"
              id="status"
              onChange={handlechangeStatus}
              value={props.filteredStatus}
            >
              <option value="">Status</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
            </select>
          </label>
        </div>
      </fieldset>
    </>
  );
}
export default FilterStatus;
