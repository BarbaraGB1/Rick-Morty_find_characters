import { Link } from "react-router-dom";
import "../styles/Partials/CharacterItem.scss";
function CharacterItem({ character }) {
  return (
    <li className="list">
      <Link to={`/character/${character.id}`} className="link">
        <div className="fadeOut grow">
          <article className="article">
            <img
              className="imgList"
              src={character.image}
              alt={character.name}
            />

            <div className="text ">
              <h2 className="name">{character.name}</h2>
              <h3> {character.species}</h3>
            </div>
          </article>
        </div>
      </Link>
    </li>
  );
}
export default CharacterItem;
