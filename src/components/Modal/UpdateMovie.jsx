import React, { useEffect, useState } from 'react'

import ModalContainer from './ModalContainer'
import MovieForm from '../admin/MovieForm'
import { getMovieForUpdate, updateMovie } from '../../api/movie'
import { useNotification } from '../../hooks'
export default function UpdateMovie({visible,onSuccess,movieId}) {
  const [busy,setBusy]=useState(false)
  const [ready,setReady]=useState(false)
  const [selectedMovie,setSelectedMovie]=useState(null)
  const{updateNotification}=useNotification()

  const handleSubmit=async(data)=>{
    setBusy(true)
  const{error,movie,message} = await updateMovie(movieId,data)
    setBusy(false)
    if(error) return updateNotification('error',error)

    updateNotification('success',message)
    onSuccess(movie)

  }
  const fetchMovieToUpdate= async()=>{
  const {movie,error}= await getMovieForUpdate(movieId)
    if(error) return updateNotification('error',error)
   
    setSelectedMovie(movie)
     setReady(true)
   
  }
  useEffect(()=>{
    if(movieId)  fetchMovieToUpdate()

     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[movieId])
  return (
    <ModalContainer visible={visible} >
      {ready ? <MovieForm initialState={selectedMovie} btnTitle='Update' onSubmit={!busy ? handleSubmit:null} busy={busy}/>:
      <div className='w-full flex h-full justify-center items-center'>
        <p className='text-light-subtle dark:text-dark-subtle animate-pulse text-xl'>Please wait...</p>
        </div>}
       
    </ModalContainer>
  )
}
