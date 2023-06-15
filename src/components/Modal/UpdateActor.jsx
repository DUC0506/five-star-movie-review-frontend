import React, { useState } from 'react'
import { useNotification } from '../../hooks'
import ActorForm from '../form/ActorForm'
import ModalContainer from './ModalContainer'
import { updateActor } from '../../api/actor'

export default function UpdateActor({visible,onClose,initialState,onSuccess}) {
    const[busy,setBusy]=useState(false)
    const{updateNotification}=useNotification()
  
    const handleSubmit= async(data)=>{
      setBusy(true)
    const {actor,error}= await updateActor(initialState.id,data)
    setBusy(false)
    if(error) return updateNotification('error', error)
    
    onSuccess(actor)
  
    updateNotification('success', 'Actor Update successfully')
    onClose()
  
    }
    return (
      <ModalContainer visible={visible} onClose={onClose} ignoreContainer>
        <ActorForm onSubmit={!busy ? handleSubmit :null} title='Update Actor' btnTitle='Update' busy={busy}
        initialState={initialState}/>
      </ModalContainer>
    )
}
