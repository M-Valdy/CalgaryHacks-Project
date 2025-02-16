import React from 'react'

export const Header = () => {
  return (
    <div className="grid h-screen place-content-center bg-neutral-100">
      <SlideTabs/>
    </div>
  )
}

const SlideTabs= ()=>{
  return(
    <ul className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1">
      <Tab>Home</Tab>
      <Tab>About</Tab>
      <Tab>Tracker</Tab>
      <Tab>Reccomendation</Tab>
      <Tab>Contact</Tab>

    </ul>
  )
}

const Tab = ({children}) =>{
  return(
    <li className="relative z-10 block cursor-pointer px-3 py-1.5 text-x5 uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base">
      {children}
    </li>
  )
}

const Cursor = () => {
  return ( 
    <li className="absolute z-0 h-7 rounded-full w-36 bg-black md:h-12">

    </li>
  )
}


export default Header;