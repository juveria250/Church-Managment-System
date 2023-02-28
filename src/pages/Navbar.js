import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './user/Dropdown'



function Navbar() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
        <div className="w-ful h-18 flex items-center justify-between px-4 py-4 bg-teal-600">
            <Link to={"/"} className="text-3xl text-teal-200 font-semibold font-Montesarrat">⛪Church Managment</Link>
            <div className="inline-flex text-white shadow-lg shadow-teal-600 bg-teal-500 border-0 py-1 px-2 focus:outline-none hover:bg-gray-600 rounded text-lg">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-teal-500 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
        ≣
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-80 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  
                  <div className="mt-0">
                    <Dropdown />
                  </div>

                  <div className="mt-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                       <path fillRule="evenodd" d="M7.22 3.22A.75.75 0 017.75 3h9A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17h-9a.75.75 0 01-.53-.22L.97 10.53a.75.75 0 010-1.06l6.25-6.25zm3.06 4a.75.75 0 10-1.06 1.06L10.94 10l-1.72 1.72a.75.75 0 101.06 1.06L12 11.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L12 8.94l-1.72-1.72z" clipRule="evenodd" />
                      </svg>

                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

        {/* <a href="/dialog" class="inline-flex text-white shadow-lg shadow-gray-800 bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</a> */}
      
  
        </div>
    </>
  )
}

export default Navbar