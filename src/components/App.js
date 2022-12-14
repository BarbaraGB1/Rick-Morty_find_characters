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

function App() {
  const [apiList, setApiList] = useState([]);
  const [filteredName, setFilteredName] = useState(ls.get("search", ""));
  const [filteredStatus, setFilteredStatus] = useState("");
  const [toggleSearch, setToggleSearch] = useState("");
  console.log({ toggleSearch });
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
  const handleReset = () => {
    setFilteredName("");
    setFilteredStatus("");
    setToggleSearch("");
    ls.clear("search");
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
                  toggleSearch={toggleSearch}
                  setToggleSearch={setToggleSearch}
                  handleReset={handleReset}
                ></Filter>
                <CharacterList
                  apiList={apiList}
                  filteredName={filteredName}
                  filteredStatus={filteredStatus}
                  toggleSearch={toggleSearch}
                  setToggleSearch={setToggleSearch}
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
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
