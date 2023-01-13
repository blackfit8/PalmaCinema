import React from "react";
import {Link} from 'react-router-dom'
import {FaUser} from 'react-icons/fa'

const Header = ({user, login, setLogin, setUser}) => {

  
  const logout = ()=>{
    setLogin(false)
    setUser("")
  }
  return (
    <header>
      <img className="logo" src="/assets/img/logo.png" alt="" />
      <nav>
        <table>
          <thead>
            <tr>
              <th>
                <Link className="Link" to={"/"}>
                  Inicio
                </Link>
              </th>
              <th>
                <Link className="Link" to={"/films"}>
                  Cartelera
                </Link>
              </th>{
                user.rol==="ADMIN" ?
                <th>
                <Link className="Link" to={"/manage"}>
                  Mantenimiento de Cartelera
                </Link>
              </th>:""
              }
              
            </tr>
          </thead>
        </table>
      </nav>
      <div>
        {login ? (
          <div className="login-grid">
            <Link className="Link" to="/"><div className="logoutbtn" onClick={e=>logout()}>Cerrar sesión</div></Link>
            <div className="Userbtn"><FaUser className="FaUser"/> {user.username}</div>
          </div>
        ) : (
          <Link className="goLogin Link" to={"/login"}>
            Quieres iniciar sesión?
          </Link>
        )}
      </div>

      <div></div>
    </header>
  );
};

export default Header;
