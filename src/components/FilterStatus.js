function FilterStatus(props) {
  const handlechangeStatus = (ev) => {
    props.handleStatus(ev.target.value);
  };
  return (
    <>
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
    </>
  );
}
export default FilterStatus;
