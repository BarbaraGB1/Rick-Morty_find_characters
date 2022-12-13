function FilterName(props) {
  const handlechange = (ev) => {
    props.handleValue(ev.target.value);
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
          onChange={handlechange}
          value={props.filteredName}
        />
      </label>
    </>
  );
}
export default FilterName;
