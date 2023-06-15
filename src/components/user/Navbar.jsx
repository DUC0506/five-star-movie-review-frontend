import React from 'react'
import{BsFillSunFill} from'react-icons/bs'
import{FaList} from'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth, useTheme } from '../../hooks'
import Container from '../Container'
import AppSearchForm from '../form/AppSearchForm'




export default function Navbar() {
  const{authInfo,handleLogout}= useAuth()
  const{isLoggedIn,profile}=authInfo
  const{toggleTheme}=useTheme()

  const navigate=useNavigate()  
 const handleSearchSubmit=(query)=>{
    navigate('/movie/search?title='+query)
 }
 
 const handleListMovie=()=>{
  navigate('/my-list/'+profile.id)
 }
  return (
    <div className="bg-secondary shadow-sm shadow-gray-500 ">
        <Container className=" p-2">

            <div className="flex justify-between items-center  ">
            <Link to='/'><img src='./logoMova1.png' alt='' className='sm:h-10 h-8'/></Link>

                <ul className='flex items-center sm:space-x-4 space-x-2'>
                    <li>
                      <button onClick={toggleTheme} className='dark:bg-white bg-dark-subtle p-1 rounded sm:text-2xl text-lg'>
                        <BsFillSunFill className='text-secondary' size={24}/>
                      </button>
                    </li>
                    <li>
                      <AppSearchForm placeholder='Search' inputClassName="h-10 rounded-lg border-gray-200 pe-10 text-sm placeholder-gray-300 focus:z-10 sm:w-56 text-white" onSubmit={handleSearchSubmit}/>
                    </li>
                    <li>
                    <button onClick={handleListMovie} className='dark:bg-white bg-dark-subtle p-1 rounded sm:text-2xl text-lg'>
                        <FaList className='text-secondary' size={20}/>
                      </button>
                    </li>
                    <li >
                    { isLoggedIn?(<LoginMenu name={profile.name} email={profile.email} handleLogout={handleLogout}/>)
                     :(<Link className='text-white font-semibold text-lg' to='/auth/signin'>Login</Link> )}
                    </li>
                </ul>
            </div>
            
        </Container>
    </div>
  )
}

const LoginMenu=({name,email,handleLogout})=>{


return(
<button   
          type="button"
          className="group flex shrink-0 items-center rounded-lg transition"
        >
          <span className="sr-only">Menu</span>
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />

          <p className="ml-2 ms-2 hidden text-left text-xs sm:block">
            <strong className="block font-medium text-white">{name}</strong>

            <span className="text-gray-500 "> {email} </span>
          </p>
          <ul
            id="dropdown"
            className=" top-10 hidden dark:bg-white bg-dark-subtle  rounded-lg shadow-md py-2 px-4 absolute mt-2 group-hover:block"
          >
            <li>
              <Link  href="/"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"> Account </Link>
            </li>
            <li>
              <Link to='/up-grade'
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"> Up grade </Link>
            </li>
            <li>
              <Link to='/'   onClick={handleLogout}
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"> Sign Out </Link>
            </li>
          </ul>
         
</button>
)
}