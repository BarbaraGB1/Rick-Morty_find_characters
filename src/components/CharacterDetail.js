import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/Partials/CharacterDetails.scss";

function CharacterDetail(props) {
  const params = useParams();
  const characterFound = props.findCharacter(params.characterId);
  console.log(characterFound);

  if (characterFound !== undefined) {
    return (
      <>
        <NavLink to="/" className="back">
          {" "}
          Volver
        </NavLink>

        <article className="articleDetail">
          <div>
            <img
              src={characterFound.image}
              alt={characterFound.name}
              className="imgDetail"
            />
          </div>
          <div>
            <h2 className="textDetail nameDetail">{characterFound.name}</h2>
            <h3 className="textDetail">- Especie: {characterFound.species}</h3>
            <h3 className="textDetail">- Planeta: {characterFound.planet}</h3>
            <h3 className="textDetail">- Estado:{characterFound.status}</h3>
            <h3 className="textDetail">
              - Episodios:{characterFound.episodes.length}
            </h3>
          </div>
        </article>
      </>
    );
  } else {
    return <p>este personaje no existe</p>;
  }
}
export default CharacterDetail;
