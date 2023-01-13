import React from 'react'
import CategoryService from '../services/CategoryService';
import FilmService from '../services/FilmService';
import { useState, useEffect } from 'react';
import {FaSearch} from 'react-icons/fa'

import FilmList from '../components/FilmList';

const FilmsPage = () => {
    const [films, setFilms] = useState([]);
    const [categories, setCategories] = useState([]);
    const [film, setFilm] = useState([]);
    const [query, setQuery] = useState('');
    const [queryCategory, setQueryCategory] = useState('');

    const listFilms = films.filter(e=> e.title.toLowerCase().includes(query.toLowerCase())).filter(e=> e.category._id.includes(queryCategory))
    useEffect(()=>{
        FilmService.getFilms().then(data=>setFilms(data))
        CategoryService.getCategories().then(data=>setCategories(data))
    },[films])

  return (
    <section>
      <div className='search-container'>
        <FaSearch className='FaSearch'/>
        
        <input className='search-field' value={query} type="text" placeholder='Buscar' onChange={(e)=>{setQuery(e.target.value)}}/>
        <select name="categoriesFilter" id="categoriesFilter" onChange={(e)=>{setQueryCategory(e.target.value)}}>
          <option value="">Todas</option>
          {
            categories.map(e=><option key={e._id} value={e._id}>{e.name}</option>)
          }
        </select>
      </div>
      <div>
        <FilmList films={listFilms} film={film} setFilm={setFilm} categories={categories} setCategories={setCategories}/>
      </div>
      </section>
  )
}

export default FilmsPage