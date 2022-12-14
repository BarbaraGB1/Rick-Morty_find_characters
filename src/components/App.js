import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../services/Api";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";
import Footer from "./Footer";
import ls from "../services/LocalStorage";
import "../styles/App.scss";
import PNG from "../images/rick_and_morty_png_by_lalingla_db72d4x-fullview.png";

function App() {
  const [apiList, setApiList] = useState([]);
  const [filteredName, setFilteredName] = useState(ls.get("search", ""));
  const [filteredStatus, setFilteredStatus] = useState("");
  const [toggleSearch, setToggleSearch] = useState(false);

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
  const handleClick = (e) => {
    e.preventDefault();
    setToggleSearch(true);
  };

  const findCharacter = (id) => {
    return apiList.find((oneMovie) => oneMovie.id === parseInt(id));
  };
  return (
    <div className="container">
      <Header></Header>
      <main className="main">
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
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
                  ToggleSearch={toggleSearch}
                  handleClick={handleClick}
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
        <img src={PNG} alt="Rick and Morty" className="png" />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
