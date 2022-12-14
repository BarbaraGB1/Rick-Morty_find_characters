import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/Partials/CharacterDetails.scss";
import meseks from "../images/desktop-wallpaper-rick-and-morty-x-mr-meeseeks-mr-meeseeks-aesthetic-thumbnail_preview_rev_1.png";
import { FiArrowLeft } from "react-icons/fi";
function CharacterDetail(props) {
  const params = useParams();
  const characterFound = props.findCharacter(params.characterId);
  console.log(characterFound);

  if (characterFound !== undefined) {
    return (
      <div className="continDetail">
        <NavLink to="/" className=" back">
          {" "}
          <FiArrowLeft className="arrow"></FiArrowLeft> Ve a por más
        </NavLink>

        <article className="articleDetail">
          <div>
            <img
              src={characterFound.image}
              alt={characterFound.name}
              className="imgDetail"
            />
          </div>
          <div className="text1">
            <h2 className="textDetail nameDetail">{characterFound.name}</h2>
            <h3 className="textDetail">- Especie: {characterFound.species}</h3>
            <h3 className="textDetail">- Planeta: {characterFound.planet}</h3>
            <h3 className="textDetail">- Estado:{characterFound.status}</h3>
            <h3 className="textDetail">
              - Episodios:{characterFound.episodes.length}
            </h3>
          </div>
        </article>
      </div>
    );
  } else {
    return (
      <div className="errorId">
        <p>Este personaje no existe pero que más da...</p>
        <img src={meseks} alt="meeseeks" className="imgMeseks" />
        <NavLink to="/" className="backError">
          <FiArrowLeft className="arrow"></FiArrowLeft>Intentalo de nuevo
        </NavLink>
      </div>
    );
  }
}
export default CharacterDetail;
