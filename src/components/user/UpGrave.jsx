import React from 'react'
import {MdOutlineShoppingCartCheckout} from'react-icons/md'
import { useNavigate } from 'react-router-dom'
export default function UpGrave() {
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate('/check-out')
    }

  return (
    <div  className="h-screen flex justify-center 
    dark:bg-primary bg-white ">
        <fieldset className="space-y-4">
    <legend className="sr-only">Delivery</legend>
  
    <div className='w-40 sm:w-80'>
      <input
        type="radio"
        name="DeliveryOption"
        value="DeliveryStandard"
        id="DeliveryStandard"
        className="peer hidden"
        checked
      />
  
      <label
        for="DeliveryStandard"
        className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
      >
        <p className="text-gray-700">7days</p>
  
        <p className="text-gray-900">Free</p>
      </label>
    </div>
  
    <div>
      <input
        type="radio"
        name="DeliveryOption"
        value="DeliveryPriority"
        id="DeliveryPriority"
        className="peer hidden"
      />
  
      <label
        for="DeliveryPriority"
        className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
      >
        <p className="text-gray-700">30 Day</p>
  
        <p className="text-gray-900">£9.99</p>
      </label>
    </div>
    <div>
      <input
        type="radio"
        name="SixMonthOptions"
        value="SixMonthOptions"
        id="SixMonthOptions"
        className="peer hidden"
      />
  
      <label
        for="SixMonthOptions"
        className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
      >
        <p className="text-gray-700">6 Months</p>
  
        <p className="text-gray-900">£19.99</p>
      </label>
    </div>
    <div className='flex items-center justify-center cursor-pointer'>
    <ButtonFavorite  handleNavigate={handleNavigate} btnName='Check out' icon={<MdOutlineShoppingCartCheckout/>}/>
    </div>
  </fieldset>
       
  </div>
  )
}
const ButtonFavorite=({btnName,icon,handleNavigate})=>{
    return(
      <div
    class=" w-40 sm:w-60 group cursor-point mt-2 flex items-center justify-between gap-4 rounded-lg border border-current px-2 py-2 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
    onClick={handleNavigate}
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