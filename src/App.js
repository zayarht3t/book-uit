import './App.css';

import {Routes,Route} from 'react-router-dom';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import Popular from './pages/popular/Popular';
import Signup from './pages/login/Signup';
import Latest from './pages/latest/Latest';
import Favourite from './pages/favourite/Favourite';
import Search from './pages/search/Search';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Logup from './pages/login/Logup';

function App() {
  const {user} = useContext(AuthContext);
  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/latest' element={<Latest/>}/>
      <Route path='/favourite' element={user ? <Favourite/>: <Signup/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='/*' element={<Home/>} />
      <Route path="/signup" element={<Logup/>}/>
    </Routes>
  );
}

export default App;
