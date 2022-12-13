import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../services/Api";
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";
import ls from "../services/LocalStorage";

function App() {
  const [apiList, setApiList] = useState([]);
  const [filteredName, setFilteredName] = useState(ls.get("search", ""));
  const [filteredStatus, setFilteredStatus] = useState("");

  useEffect(() => {
    Api().then((data) => {
      setApiList(data);
    });
  }, []);

  const handleName = (value) => {
    setFilteredName(value);
    ls.set("search", filteredName);
  };
  const handleStatus = (value) => {
    setFilteredStatus(value);
  };
  const findCharacter = (id) => {
    return apiList.find((oneMovie) => oneMovie.id === parseInt(id));
  };
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                handleName={handleName}
                filteredName={filteredName}
                handleStatus={handleStatus}
                filteredStatus={filteredStatus}
              ></Filter>
              <CharacterList
                apiList={apiList}
                filteredName={filteredName}
                filteredStatus={filteredStatus}
              ></CharacterList>
            </>
          }
        ></Route>
        <Route
          path="/character/:characterId"
          element={
            <CharacterDetail findCharacter={findCharacter}></CharacterDetail>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
