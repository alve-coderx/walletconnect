import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu,AiFillCloseCircle} from 'react-icons/ai'
import { Disclosure } from '@headlessui/react'
const Navbar = () => {
  const navigation = [
    { name: 'For Creators', href: '#', current: true },
    { name: 'For Collectors', href: '#', current: false },
    { name: 'Login', href: '/login', current: false },
    { name: 'Get Started', href: '/login', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const style = {
    navLink: 'text-gray-400 mx-4 p-4 rounded-lg  hover:bg-[#2CBBDB] hover:text-white'
  }
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="px-4 py-4 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiFillCloseCircle/>
                  ) : (
                    <AiOutlineMenu/>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to='/'><img src='https://www.premint.xyz/static/identity/images/wordmark.9fbb71b4fd0b.svg' className='w-44' /></NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavLink to='/' className={style.navLink}>For Creators</NavLink>
                    <NavLink to='/' className={style.navLink}>For Collectors</NavLink>
                  </div>
                </div>
              </div>
              <div className='hidden sm:ml-6 sm:block'>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <NavLink to='/login' className={style.navLink}>Login</NavLink>
                  <NavLink to='/login' className={style.navLink}>Get Started</NavLink>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 bg-[#051620]">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar