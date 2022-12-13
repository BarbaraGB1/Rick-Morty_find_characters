import { Link, NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Api from '../services/Api';
import '../styles/App.scss';
import CharacterList from './CharacterList';

function App() {
  const [apiList , setApiList] = useState([]);
  const [filterName , setFilterName] = useState('');

  useEffect(() =>{
    Api().then((data)=>{
      setApiList(data);

    });
  },[]);

  const characterFiltered = apiList.filter((user) =>{
    return filterName === '' ? true : user.name === filterName;
  })
 
  return (
    <div className='container'>
 <Routes>
 <Route path='/' element={<CharacterList apiList={apiList}></CharacterList>}></Route>
 </Routes>
    </div>
  );
}


export default App;
