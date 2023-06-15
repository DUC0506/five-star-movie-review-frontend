import React, {  useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import { useAuth, useNotification } from '../../hooks'
//import { isValidEmail } from '../../utils/helper'
// import { commonModalClasses } from '../../utils/theme'


import Container from '../Container'
import CustomLink from '../CustomLink'
import FormContainer from '../form/FormContainer'
// import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
// import Title from '../form/Title'


const validateUserInfo=({email,password})=>{
 //eslint-disable-next-line
 //const isValidEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  

  
  if(!email.trim()) return {ok:false, error:"Email is missing"}
  //if(isValidEmail(email)) return {ok:false, error:"Invalid email!"}
  if(!password.trim()) return {ok:false, error:"Password is missing"}
  if(password.length < 8) return {ok:false, error:"Password must be 8 characters long!"}

  return {ok:true}
}
export default function Signin() {
  const [userInfo,setUserInfo]= useState({
   
    email:"",
    password:"",
    })
    //const navigate=useNavigate()

    const{updateNotification}=useNotification()
    const{handleLogin,authInfo }=useAuth()
    //const{isPending,isLoggedIn}=authInfo
    const{isPending}=authInfo
    


    const handleChange=({target})=>{
      const{value,name}=target;
      
      setUserInfo({...userInfo,[name]:value})
      
    }

    const handleSubmit= async(e)=>{
      e.preventDefault()
      const{ok,error} =validateUserInfo(userInfo)
       
       if(!ok) return updateNotification('error',error)

       handleLogin(userInfo.email,userInfo.password)

    }
    //useEffect(()=>{
     // if(isLoggedIn) navigate('/')
       // eslint-disable-next-line react-hooks/exhaustive-deps
   // },[isLoggedIn])

  return (
    <FormContainer >
        <Container>
      

        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl dark:text-white text-secondary ">Get started today!</h1>

    <p class="mt-4  dark:text-white text-secondary ">
    Welcome to our movie app, where your entertainment journey begins! Discover a world of captivating stories, thrilling adventures, and unforgettable moments.
    </p>
  </div>

  <form onSubmit={handleSubmit}  class="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label class="sr-only">Email</label>

      <div class="relative">
        <input
        value={userInfo.email} 
        onChange={handleChange}
        id='email'
        name='email'
          type="email"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter email"
        />

        <span class="absolute inset-y-0 right-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label class="sr-only">Password</label>

      <div class="relative">
        <input
        id='password'
        name='password'
        value={userInfo.password} 
        onChange={handleChange}
          type="password"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter password"
        />

        <span class="absolute inset-y-0 right-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <p class="text-sm text-gray-500">
            <div><CustomLink to="/auth/forget-password">Forget password</CustomLink></div>
           <div> <CustomLink to="/auth/signup">Sign up</CustomLink></div> 
      </p>

      <button
        type="submit"
        class="inline-block rounded-lg dark:bg-white bg-secondary px-5 py-2 text-sm font-medium text-white"
      >
       <Submit value="Sign In" busy={isPending}/>
      </button>
    </div>
  </form>
</div>
            {/* <form onSubmit={handleSubmit} className={commonModalClasses + "w-72"} >
                <Title>Sign in</Title>
                <FormInput value={userInfo.email} onChange={handleChange} label="Email" placeholder="duc@gmail.com" name="email"/>
                <FormInput value={userInfo.password} onChange={handleChange} label="Password" placeholder="********" name="password" type="password"/>
                <Submit value="Sign In" busy={isPending}/>
                <div className="flex justify-between">
                    <CustomLink to="/auth/forget-password">Forget password</CustomLink>
                    <CustomLink to="/auth/signup">Sign up</CustomLink>
                </div>
            </form> */}
        </Container>
    </FormContainer>
  )
}
