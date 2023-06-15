import React, { useEffect, useState } from 'react'
import Container from '../Container'
import MovieList from './MovieList'
import { useNotification } from '../../hooks'
import { getMovieFavorite } from '../../api/movie'
import { useParams } from 'react-router-dom'

export default function MyList() {
    const[movies,setMovies]=useState([])
    const{updateNotification}=useNotification()
    const {userId}= useParams()
 
    const fetchMovies= async()=>{
        const{error,movies}=  await getMovieFavorite(userId)
           
          if(error) return updateNotification('error',error)
  
          setMovies([...movies])
      }
    useEffect(()=>{
         if(userId) fetchMovies()
       // eslint-disable-next-line react-hooks/exhaustive-deps
      },[userId])
  return (
    <div className='dark:bg-primary bg-white min-h-screen pb-10'>
         <Container className="xl:px-0 px-2 py-8">
         <div className='flex justify-between items-center'>
                <h1 className='text-2xl  font-semibold dark:text-white text-secondary'>
                    
                </h1>

                <MovieList movies={movies} title='My List'/>
            </div>
         </Container>
    </div>
  )
}
