import './App.css';
import { useRef, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/commons/Header';
import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import ManageFilmsPage from './pages/ManageFilmsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FilmDetail from './components/FilmDetail';
import Footer from './components/commons/Footer';

function App() {
  const [user, setUser] = useState('')
  const [login, setLogin] = useState(false)

  const users=[
    {
      id:1,
      username:"admin",
      password:"1234",
      rol:"ADMIN"
    },
    {
      id:2,
      username:"guest",
      password:"abcd",
      rol:"GUEST"
    }
  ]
  const inputUsername = useRef(null)
  const inputPassword = useRef(null)

  const checkLogin = async(e)=>{
    e.preventDefault();
    const username = inputUsername.current.value;
    const password = inputPassword.current.value;

    if(username!=="" && password!==""){
      if(users.find(e=>e.username===username && e.password===password)!==""){
        setUser(users.find(e=>e.username===username && e.password===password))
        setLogin(true)
      }else{
        console.log("invalid username or password");
      }
    }else{
      alert('invalid parameters');
    }
    console.log(user);
  }
  return (
    <div>
      <BrowserRouter>
        <Header user={user} login={login} setLogin={setLogin} setUser={setUser}/>
        
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/films' element={<FilmsPage/>}/>
          <Route path='/films/:idFilm' element={<FilmDetail user={user}/>}/>
          <Route path='/manage' element={<ManageFilmsPage/>}/>
          <Route path='/login' element={<LoginPage checkLogin={checkLogin} inputPassword={inputPassword} inputUsername={inputUsername}/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
