import React from 'react'

export default function CheckOut() {
  return (
    <div className="
    dark:bg-primary bg-white ">

    <section>
    <h1 class="sr-only">Checkout</h1>
  
    <div class="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
      <div class="bg-gray-50 py-12 md:py-24">
        <div class="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
          <div class="flex items-center gap-4">
            <span class="h-10 w-10 rounded-full bg-blue-700"></span>
  
            <h2 class="font-medium text-gray-900">BambooYou</h2>
          </div>
  
          <div>
            <p class="text-2xl font-medium tracking-tight text-gray-900">
              $9.99
            </p>
  
            <p class="mt-1 text-sm text-gray-600">For the purchase of Movie</p>
          </div>
  
          <div>
           
          </div>
        </div>
      </div>
  
      <div class="bg-white py-12 md:py-24">
        <div class="mx-auto max-w-lg px-4 lg:px-8">
          <form class="grid grid-cols-6 gap-4">
            <div class="col-span-3">
              <label
                for="FirstName"
                class="block text-xs font-medium text-gray-700"
              >
                First Name
              </label>
  
              <input
                type="text"
                id="FirstName"
                class="mt-1  p-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
  
            <div class="col-span-3">
              <label
                for="LastName"
                class="block text-xs font-medium text-gray-700"
              >
                Last Name
              </label>
  
              <input
                type="text"
                id="LastName"
                class="mt-1 p-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
  
            <div class="col-span-6">
              <label for="Email" class="block text-xs font-medium text-gray-700">
                Email
              </label>
  
              <input
                type="email"
                id="Email"
                class="mt-1  p-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
  
            <div class="col-span-6">
              <label for="Phone" class="block text-xs font-medium text-gray-700">
                Phone
              </label>
  
              <input
                type="tel"
                id="Phone"
                class="mt-1  p-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
  
            <fieldset class="col-span-6">
              <legend class="block text-sm font-medium text-gray-700">
                Card Details
              </legend>
  
              <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                <div>
                  <label for="CardNumber" class="sr-only"> Card Number </label>
  
                  <input
                    type="text"
                    id="CardNumber"
                    placeholder="Card Number"
                    class="relative  p-2 mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  />
                </div>
  
                <div class="flex">
                  <div class="flex-1">
                    <label for="CardExpiry" class="sr-only"> Card Expiry </label>
  
                    <input
                      type="text"
                      id="CardExpiry"
                      placeholder="Expiry Date"
                      class="relative w-full  p-2 rounded-es-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>
  
                  <div class="-ms-px flex-1  p-2">
                    <label for="CardCVC" class="sr-only"> Card CVC </label>
  
                    <input
                      type="text"
                      id="CardCVC"
                      placeholder="CVC"
                      class="relative  p-2 w-full rounded-ee-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
  
            <fieldset class="col-span-6">
              <legend class="block text-sm font-medium text-gray-700">
                Billing Address
              </legend>
  
              <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                <div>
                  <label for="Country" class="sr-only">Country</label>
  
                  <select
                    id="Country"
                    class="relative  p-2 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  >
                    <option>England</option>
                    <option>VietNam</option>
                    <option>Scotland</option>
                    <option>France</option>
                    <option>Belgium</option>
                    <option>Japan</option>
                  </select>
                </div>
  
                <div>
                  <label class="sr-only" for="PostalCode"> ZIP/Post Code </label>
  
                  <input
                    type="text"
                    id="PostalCode"
                    placeholder="ZIP/Post Code"
                    class="relative  p-2 w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
            </fieldset>
  
            <div class="col-span-6">
              <button
                class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section></div>
  )
}
