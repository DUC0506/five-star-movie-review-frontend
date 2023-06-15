import React, { useEffect, } from 'react'
import MovieListItem from '../MovieListItem'

import { useMovies,  } from '../../hooks';
import NextAndPrevButton from '../NextAndPrevButton';


//let currentPageNo=0
export default function Movies() {

  // const[movies,setMovies]=useState([])
  // const[busy,setBusy]=useState(false)
  // const[showUpdateModal,setShowUpdateModal]=useState(false)
  // const[selectedMovie,setSelectedMovie]=useState(null)
  // const[showConfirmModal,setShowConfirmModal]=useState(false)

  // const {updateNotification}=useNotification()
  const {fetchMovies , movies:newMovies,fetchPrevPage,fetchNextPage}=useMovies()
  // const fetchMovies= async(pageNo)=>{

  // const{error,movies}=  await getMovies(pageNo,limit)

  // if(error) return updateNotification('error',error)
  // if(!movies.length){
  //   currentPageNo=pageNo-1
  //    return setReachedToEnd(true)
  // }

  // setMovies([...movies])
  // }

  // const handleOnNextClick=()=>{
  //   if(reachedToEnd) return;

  //   currentPageNo +=1
  //   fetchMovies(currentPageNo)

  // }
  // const handleOnPrevClick=()=>{
  //   if(currentPageNo<=0) return;

  //   if(reachedToEnd) setReachedToEnd(false);
  //   currentPageNo-=1
  //   fetchMovies(currentPageNo)

  // }
// const handleOnEditClick= async({id})=>{
//   const {movie,error}= await getMovieForUpdate(id)
//  if(error) return updateNotification('error',error)
//     setSelectedMovie(movie)
//     setShowUpdateModal(true)
   

//   }
// const handleOnDeleteClick= (movie)=>{
//     setSelectedMovie(movie)
//       setShowConfirmModal(true)
//  }  
// const handleOnDeleteConfirm= async()=>{
//   setBusy(true)
//  const {error,message}= await deleteMovies(selectedMovie.id)
//   setBusy(false)
// if(error) return updateNotification('error',error)

// updateNotification('success',message)
// hideConfirmModal()
// fetchMovies(currentPageNo)
// } 
// const handleAfterUpdate=(movie)=>{
//  const updateMovies = movies.map((m) => {
//     if( m.id===movie.id) return movie

//     return m
//   })

//   setMovies([...updateMovies])
// }

// const hideUpdateForm=()=> setShowUpdateModal(false)
// const hideConfirmModal=()=> setShowConfirmModal(false)

const handleUIUpdate=()=>fetchMovies()
  useEffect(()=>{
    fetchMovies()
 // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
    
    <div className='space-y-3 p-5'>
      {newMovies.map(movie=>{
        return <MovieListItem movie={movie} key={movie.id} afterDelete={handleUIUpdate} afterUpdate={handleUIUpdate}
        // onEditClick={()=>handleOnEditClick(movie)} onDeleteClick={()=>handleOnDeleteClick(movie)}
        />
      })}
      <NextAndPrevButton className='mt-5' 
      onNextClick={fetchNextPage} 
      onPrevClick={fetchPrevPage}
      />
    </div>
    {/* <ConfirmModal visible={showConfirmModal} 
    onConfirm={handleOnDeleteConfirm} onCancel={hideConfirmModal}
    title='Are you sure'
    subtitle='This movie will remove this movie permanently'
    busy={busy}
    />
    <UpdateMovie visible={showUpdateModal} initialState={selectedMovie} onSuccess={handleOnUpdate} onClose={hideUpdateForm}/> */}
    </>
  )
}
