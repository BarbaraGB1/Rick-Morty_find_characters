function FilterName(props) {
  const handlechangeName = (ev) => {
    props.handleName(ev.target.value);
  };
  return (
    <>
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
    </>
  );
}
export default FilterName;
