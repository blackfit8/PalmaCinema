import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = ({checkLogin, inputPassword, inputUsername}) => {
  return (
    <main>
    <div className='login-container'>
        <form onSubmit={e => checkLogin(e)}>
            <label>Usuario: <input type="text" ref={inputUsername} /></label>
            <label>Contraseña: <input type="password" ref={inputPassword}/></label>
            <div className='notRegistered'>Aun no te has registrado? <Link to="/register">Hazlo ahora</Link></div>
            <button className='loginbtn' type='submit'>Iniciar Sesión</button>
        </form>
        
    </div>
    </main>
  )
}

export default LoginPage