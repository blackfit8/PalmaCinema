import React from 'react'
import { Link } from 'react-router-dom'
import { URL_API_IMAGES } from '../constants/http_constants';
const FilmList = ({films}) => {
  return (
    <div className='films-container'>
        {
            films.map(e=>
            <Link className='film-card' to={`/films/${e._id}`} key={e._id}>
            <div  >
                <img src={`${URL_API_IMAGES}/${e.img}`} alt="" />
                <h3 className="film-title">{e.title}</h3>
            </div></Link>
            )
        }
    </div>
  )
}

export default FilmList