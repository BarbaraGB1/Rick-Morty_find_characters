import { Link, NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Api from '../services/Api';
import '../styles/App.scss';

function App() {
  const [characterList , setCharacterList] = useState([]);
  useEffect(() =>{
    Api().then((data)=>{
      setCharacterList(data);

    });
  },[]);
  console.log(characterList);
  return (
    <div className='container'>
 
    </div>
  );
}

export default App;
