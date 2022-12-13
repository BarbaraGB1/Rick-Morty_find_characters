function CharacterItem ({character}) {
    return(
        <li >
            <article>
              <img src={character.image} alt={character.name}/> 
              <h2>{character.name}</h2>
              <h3>Especie: {character.species}</h3>
            </article>
        </li>
    )
    
}
export default CharacterItem;