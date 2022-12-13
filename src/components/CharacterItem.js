import { Link } from "react-router-dom";
function CharacterItem({ character }) {
  return (
    <li>
      <Link to={`/character/${character.id}`}>
        <article>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <h3>Especie: {character.species}</h3>
        </article>
      </Link>
    </li>
  );
}
export default CharacterItem;
