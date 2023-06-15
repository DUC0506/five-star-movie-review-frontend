import React from 'react'

export default function NextAndPrevButton({onPrevClick,onNextClick,className=''}) {

    const getClasses=()=>{
        return(
            "flex justify-end items-centers space-x-3 "
        )
    }
  return (
    <div className={getClasses()+ className}>
      <Button onClick={onPrevClick} title='Prev'/>
      <Button onClick={onNextClick} title='Next'/>
       
    </div>    
  )
}

const  Button=({title,onClick})=>{
    return (
        <button  
        onClick={onClick} type='button' 
        className='text-primary dark:text-white hover:underline'>{title}</button>
    )
}
