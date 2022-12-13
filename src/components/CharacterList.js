import CharacterItem from "./CharacterItem";

function CharacterList(props) {
  const renderList = props.apiList
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(props.filteredName.toLowerCase());
    })
    .filter(
      (character) =>
        props.filteredStatus === "" || character.status === props.filteredStatus
    )

    .map((character) => {
      return (
        <CharacterItem key={character.id} character={character}></CharacterItem>
      );
    });
  return renderList.length !== 0 ? (
    <ul>{renderList}</ul>
  ) : (
    <p>No hay ningún personaje que se llame {props.filteredName}</p>
  );
}
export default CharacterList;
