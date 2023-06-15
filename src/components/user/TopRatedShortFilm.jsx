import React, { useEffect, useState } from 'react'

import { getTopRatedMovies } from '../../api/movie'
import { useNotification } from '../../hooks'
import MovieList from './MovieList'

export default function TopRatedShortFilm() {
    const[movies,setMovies]=useState([])
    const{updateNotification}=useNotification()
    const fetchMovies= async(signal)=>{
      const{error,movies}=  await getTopRatedMovies('Short Film',signal)
        if(error) return updateNotification('error',error)

        setMovies([...movies])
    }
    
    useEffect(()=>{
      const ac= new AbortController()
        fetchMovies(ac.signal)
        return ()=>{
          ac.abort()
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(<MovieList movies={movies} title='Viewers choice (Short Film Series) '/>)
 
}
