import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchMoviesForAdmin } from '../../api/movie'
import { useNotification } from '../../hooks'
import MovieListItem from '../MovieListItem'
import NotFoundText from '../NotFoundText'

export default function SearchMovies() {

    const{updateNotification}=useNotification()
  const[searchParams] = useSearchParams()
  const[movies,setMovies]=useState([])
  const[resultNotFound,setResultNotFound]=useState(false)


  const query=searchParams.get('title')
    const searchMovies=async(val)=>{
    const{error,results}  = await searchMoviesForAdmin(val)
    if(error) return updateNotification('error',error)
     if(!results.length){
        setResultNotFound(true)
        return setMovies([])
     }   

     setResultNotFound(false)
    setMovies([...results])
    }
const handleAfterDelete=(movie)=>{
const updatedMovies=  movies.filter((m)=>m.id !== movie.id)
  setMovies([...updatedMovies])
}
const handleAfterUpdate=(movie)=>{
  const updatedMovies=  movies.map((m)=>
  {
    if(m.id === movie.id) return movie
    else return m
  })
  setMovies([...updatedMovies])
}

  useEffect(()=>{
    if(query.trim()) searchMovies(query)

         // eslint-disable-next-line react-hooks/exhaustive-deps
  },[query])
  return (
    <div className='p-5 space-y-3'>
        <NotFoundText text='Record not found' visible={resultNotFound}/>
    {!resultNotFound && movies.map(movie=>{
        return <MovieListItem movie={movie} key={movie.id} afterDelete={handleAfterDelete} afterUpdate={handleAfterUpdate}/>
    })}
  </div> )
}
