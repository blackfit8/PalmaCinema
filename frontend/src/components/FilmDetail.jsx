import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FilmService from '../services/FilmService';
import {format} from 'date-fns'
import CategoryService from '../services/CategoryService';
import { URL_API_IMAGES } from '../constants/http_constants';
import { FaArrowLeft, FaArrowDown } from 'react-icons/fa';
import {MdEventSeat} from 'react-icons/md';

const FilmDetail = () => {
  const [film, setFilm] = useState(null);
  const [category, setCategory] = useState([]);
  const { idFilm } = useParams();
  const navigate = useNavigate();

  const [entradas, setEntradas] = useState(0);
  const precio = 8.50
  const precioPremium = 9.50

  const getFilm = async(idFilm)=>{
    try{
      const res = await FilmService.getFilmById(idFilm)
      const cat = await CategoryService.getCategoryById(res.category)
      setFilm(res)
      setCategory(cat)
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getFilm(idFilm)
  }, [])
  
  const selector = (e)=>{
    if(e.currentTarget.classList=="seat"){
      e.currentTarget.classList="seat active"
      setEntradas(entradas+1)
    }else{
      e.currentTarget.classList="seat";
      setEntradas(entradas-1)
    }
  }

  const buyTickets = (entradas)=>{
    alert('Has comprado '+entradas+' por '+entradas*precio+"€")
  }

  const buyTicketsPremium = (entradas)=>{
    alert('Has comprado '+entradas+' por '+entradas*precioPremium+"€")
  }
  return (
    <div>
      {
        film  &&
        <div className='main-detail'>
        <FaArrowLeft className='FaArrowLeft' onClick={()=> navigate(-1)}/>
        <div className='article-container'>
          <article key={film._id}>
          <div className='film-info'>
            <img src={`${URL_API_IMAGES}/${film.img}`} alt="" />
            {category && <p>Category: {category.name}</p>}
            <p>Release date: {format(new Date(film.release), 'dd/MM/yyyy')}</p>
            <p>Director: {film.director}</p>
          </div>
          <div className='film-info'>
            <h2>{film.title}</h2>
            <div>{film.synapsis}</div>
          </div>
          
        </article><div>
            <div className='grid-seats'>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
              <MdEventSeat className='seat' onClick={e=>selector(e)}/>
            </div>
            <h3 className='pantalla'>Pantalla</h3>
            <div className='FaArrowDown'><FaArrowDown /></div>
            <hr />
            <div>
              {
                entradas == 0 ? <div className='comprarbtn off'>Comprar</div>:
                <div>
                  {entradas==1 ?
                    <div className='comprar-grid'>
                      <button className='comprarbtn' onClick={e=>buyTickets(entradas)}>Comprar {entradas} entrada por {entradas*precio}€</button>
                      <button className='comprarbtn' onClick={e=>buyTicketsPremium(entradas)}>Comprar  entrada premium por {entradas*precioPremium}€</button>
                    </div>
                  :
                    <div className='comprar-grid'>
                      <button className='comprarbtn' onClick={e=>buyTickets(entradas)}>Comprar {entradas} entradas por {entradas*precio}€</button>
                      <button className='comprarbtn' onClick={e=>buyTicketsPremium(entradas)}>Comprar {entradas} entradas premium por {entradas*precioPremium}€</button>
                    </div>
                  }
                </div>
              }
              
            </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default FilmDetail