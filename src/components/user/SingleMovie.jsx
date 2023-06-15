import React, { useEffect, useState } from 'react'
import { addMovieFavorite, getMovieFavorite, getSingleMovie, removeMovieFavorite } from '../../api/movie'
import {  useNavigate, useParams } from 'react-router-dom'
import { useAuth, useNotification } from '../../hooks'
import{GrAdd} from'react-icons/gr'
import{MdRemove} from'react-icons/md'

import Container from '../Container'
import RatingStar from '../RatingStar'
import RelatedMovies from '../RelatedMovies'
import AddRatingModal from '../Modal/AddRatingModal'
import CustomButtonLink from '../CustomButtonLink'
import ProfileModal from '../Modal/ProfileModal'
import { convertReviewCount } from '../../utils/helper'
import Footer from './Footer'


const convertDate=(date='')=>{
 return  date.split("T")[0]
}
export default function SingleMovie() {
  const [ready,setReady]=useState(false)
  const [selectedFavorite,setSelectedFavorite]=useState(false)
  const [movie,setMovie]=useState({})
  
  const [showRatingModal,setShowRatingModal]=useState(false)
  const [showProfileModal,setShowProfileModal]=useState(false)
  const [selectedProfile,setSelectedProfile]=useState({})

  const {movieId}= useParams()
  const {updateNotification}=useNotification()
  const {authInfo}= useAuth()

  const {isLoggedIn,profile}=authInfo
  
  const navigate=useNavigate()

  const compareMovie=(listMovie,movieId)=>{
    if(listMovie){
      listMovie.map((m)=>{
        if(m.id===movieId){
          setSelectedFavorite(true)
        }
        
         return m;
      }
      )
    }
  }
  const fetchMovie= async()=>{
  const {error,movie}= await getSingleMovie(movieId)

  if(error) return updateNotification('error',error)
  setReady(true) 
  setMovie(movie)

  }
  const fetchListMovies= async()=>{
    const{error,movies}=  await getMovieFavorite(profile.id)
       compareMovie(movies,movieId)
      if(error) return updateNotification('error',error)

     
      
  }
  const handleOnRateMovie=()=>{
    if(!isLoggedIn) return navigate('/auth/signin')
    setShowRatingModal(true)
  }
  const hideRatingModal=()=>{
    setShowRatingModal(false)
  }
  const handleOnRatingSuccess=(reviews)=>{
    setMovie({...movie,reviews:{...reviews}})
  }
  const handleProfileClick=(profile)=>{
    setSelectedProfile(profile)
    setShowProfileModal(true)

  }
  const hideProfileModal=()=>{
   
    setShowProfileModal(false)

  }
  const handleAddMyList= async()=>{
    const {error,message} = await addMovieFavorite(movieId)
    
    if(error) return updateNotification('error',error)
    if(message){
      setSelectedFavorite(true)
      return updateNotification('success',message)
    } 
    

  }
  const handleRemoveMyList=async()=>{
    const {error,message} = await removeMovieFavorite(movieId)
    
    if(error) return updateNotification('error',error)
    if(message){
      setSelectedFavorite(false)
      navigate('/my-list/'+profile.id)
      return updateNotification('success',message)
    } 
    
   
  }
  useEffect(()=>{
    if(movieId) fetchMovie()
    if(profile) fetchListMovies()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[movieId,profile])

  if(!ready) return <div className="h-screen flex justify-center items-center 
  dark:bg-primary bg-white">
    <p className="text-light-subtle dark:text-dark-subtle animate-pulse">Please wait</p>
  </div>

  const {trailer,poster,title,id,storyLine,director={},reviews={},writers=[],cast=[],language,releaseDate,genres=[],type}=movie
  return (
    <div className='dark:bg-primary bg-white min-h-screen pb-10'>
     <Container className="xl:px-0 px-2">
     <div class="flex justify-center items-center pt-8">
      <video className='max-w-full max-h-[680px]' poster={poster} controls src={trailer}></video>
      </div>
      <div className="flex justify-between">
      <h1 className='xl:text-4xl lg:text-3xl text-2xl text-highlight dark:text-highlight-dark font-semibold py-3'>{title}</h1>
      <div className="flex flex-col items-end">
        <RatingStar rating={reviews.ratingAvg}/>
        <CustomButtonLink label= {convertReviewCount(reviews.reviewCount)+ " Reviews"}
          onClick={()=>navigate('/movie/reviews/'+ id)}/>
        
        <CustomButtonLink label= 'Rate The Movie'
          onClick={handleOnRateMovie}/>
        {selectedFavorite?(<ButtonFavorite handleAddMyList={handleRemoveMyList} btnName='Remove from My List' icon={<MdRemove/>}/>):(<ButtonFavorite handleAddMyList={handleAddMyList} btnName='Add to My List' icon={<GrAdd/>}/>)}
        
        
      </div>
      </div>
      <div className="space-y-3">
        <p className="text-light-subtle dark:text-dark-subtle">{storyLine}</p>

        {/* <div className="flex space-x-2">
          <p className="text-light-subtle dark:text-dark-subtle font-semibold">Director: </p>
          <p className="text-highlight dark:text-highlight-dark hover:underline cursor-pointer">{director.name}</p>
        </div> */}
        <ListWithLabel label='Director:'>
          <CustomButtonLink label={director.name} onClick={()=>handleProfileClick(director)}/>
        </ListWithLabel>

        <ListWithLabel label='Writer:'>
        {writers.map(w=>{
            return(
              <CustomButtonLink key={w.id} label={w.name}/>
               )
          })}
        </ListWithLabel>

        <ListWithLabel label='Cast:'>
        {cast.map(({id,profile,leadActor})=>{
            return(
               leadActor ? 
              (<CustomButtonLink label={profile.name} key={id}/>)
                :null)
          })}
        </ListWithLabel>

        <ListWithLabel label='Language:'>
          <CustomButtonLink label={language} clickable={false}/>
        </ListWithLabel>  
        
        <ListWithLabel label='ReleaseDate:'>
          <CustomButtonLink label={convertDate(releaseDate)} clickable={false}/>
        </ListWithLabel> 
        
        <ListWithLabel label='Genres:'>
        {genres.map((g)=>(
                <CustomButtonLink label={g} key={g} clickable={false}/>
          ))}
        </ListWithLabel>

        <ListWithLabel label='Type:'>
          <CustomButtonLink label={type} clickable={false}/>
        </ListWithLabel>  

          <CastProfile cast={cast}/>
       <RelatedMovies movieId={movieId}/>
        
      </div>
     
     
     </Container>
     <Footer/>
     <ProfileModal visible={showProfileModal} onClose={hideProfileModal} profileId={selectedProfile.id}/>     
     <AddRatingModal visible={showRatingModal} onClose={hideRatingModal} onSuccess={handleOnRatingSuccess}/>
    </div>
  )
}

const ListWithLabel=({label,children})=>{
  return (
    <div className="flex space-x-2">
          <p className="text-light-subtle dark:text-dark-subtle font-semibold">{label} </p>
         {children}
        </div>
  )
}

const CastProfile=({cast})=>{
  return(
    <div className="">
    <h1 className="text-light-subtle dark:text-dark-subtle font-semibold text-2xl mb-2">Cast: </h1>
    <div className="flex flex-wrap space-x-4">
      {cast.map(({profile,id,roleAs})=>{
        return <div key={id} className="basis-28 flex flex-col items-center text-center mb-4">
          <img className='w-24 h-24 aspect-square object-cover rounded-full' src={profile.avatar} alt="" />
            
            <CustomButtonLink label={profile.name}/>
          
          <span className="text-light-subtle dark:text-dark-subtle text-sm ">as</span>
          <p className="text-light-subtle dark:text-dark-subtle ">{roleAs}</p>
         
        </div>
      })}

    </div>
  </div>
  )
}

const ButtonFavorite=({btnName,icon,handleAddMyList})=>{
  return(
    <div
  class="group cursor-point mt-2 flex items-center justify-between gap-4 rounded-lg border border-current px-2 py-2 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
  onClick={handleAddMyList}
>
  <span class="font-medium transition-colors group-hover:text-white">
    {btnName}
  </span>

  <span
    class="shrink-0 rounded-full border border-indigo-600 bg-white p-1 group-active:border-indigo-500"
  >
    {icon}
  </span>
</div>
  )
}