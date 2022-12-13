import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../services/Api";
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
function App() {
  const [apiList, setApiList] = useState([]);
  const [filteredName, setFilteredName] = useState("");

  useEffect(() => {
    Api().then((data) => {
      setApiList(data);
    });
  }, []);

  const handleValue = (value) => {
    setFilteredName(value);
  };
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                handleValue={handleValue}
                filteredName={filteredName}
              ></Filter>
              <CharacterList
                apiList={apiList}
                filteredName={filteredName}
              ></CharacterList>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
