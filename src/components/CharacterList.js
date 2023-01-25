import CharacterItem from "./CharacterItem";
import "../styles/Partials/CharacterList.scss";
import PNG from "../images/rick_and_morty_png_by_lalingla_db72d4x-fullview.png";
import SpinningText from "./SpinningText";
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
    .filter((character) => {
      return character.planet
        .toLowerCase()
        .includes(props.filteredPlanet.toLowerCase());
    })

    .map((character) => {
      return (
        <CharacterItem key={character.id} character={character}></CharacterItem>
      );
    });

  return renderList.length !== 0 ? (
    <ul className="ulList">{renderList}</ul>
  ) : (
    <SpinningText
      text={`No hay ningún personaje con el nombre -${props.filteredName}-`}
    >
      <img src={PNG} alt="Got Milk" className="PNG" />
    </SpinningText>
  );
}
export default CharacterList;
