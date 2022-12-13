import CharacterItem from "./CharacterItem";

function CharacterList(props) {
  const renderList = props.apiList
    .filter((character) => {
      return character.name.toLowerCase().includes(props.filteredName);
    })
    .map((character) => {
      return (
        <CharacterItem key={character.id} character={character}></CharacterItem>
      );
    });
  return <ul>{renderList}</ul>;
}
export default CharacterList;
