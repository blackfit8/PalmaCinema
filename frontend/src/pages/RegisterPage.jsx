import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <main>
    <div className='register-container'>
        <form>
            <label>Usuario: <input type="text" /></label>
            <label>Email: <input type="text" /></label>
            <label>Contraseña: <input type="password" /></label>
            <label>Confirmar Contraseña: <input type="password" /></label>
            <div className='notRegistered'> Ya tienes una cuenta? <Link to="/login">Pulsa aquí</Link></div>
            <button>Registrarse</button>
        </form>
        
    </div>
    </main>
  )
}

export default RegisterPage