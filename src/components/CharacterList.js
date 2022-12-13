import CharacterItem from "./CharacterItem";

function CharacterList(props) {
const renderList = props.apiList.map((character) =>{
    return <CharacterItem key={character.id} character={character}></CharacterItem>;
});
    return(
        <ul>{renderList}</ul>
    )
}
export default CharacterList;