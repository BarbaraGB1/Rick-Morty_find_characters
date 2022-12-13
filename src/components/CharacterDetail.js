import { useParams } from "react-router-dom";
function CharacterDetail(props) {
  const params = useParams();
  const characterFound = props.findCharacter(params.characterId);
  console.log(characterFound);
  return (
    <div>
      <img src={characterFound.image} alt={characterFound.name} />
      <h2>{characterFound.name}</h2>
      <h3>Especie: {characterFound.species}</h3>
      <h3>Planeta: {characterFound.planet}</h3>
      <h3>{characterFound.status}</h3>
      <h3>Episodios:{characterFound.episodes.length}</h3>
    </div>
  );
}
export default CharacterDetail;
