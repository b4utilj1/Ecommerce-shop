import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar } from '../components/Navbar.jsx'
import { useState } from 'react'
//Images
import logo from '../assets/dc-logo.png'
import { MdClose, MdMenu } from 'react-icons/md'
import { FaOpencart } from 'react-icons/fa'
import Logout from '../assets/Logoutt.svg'
import User from '../assets/user.png'
import { ShopContext } from '../Context/ShopContext.jsx'


export const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const toggleMenu = () => setMenuOpened(!menuOpened)

  const {getTotalItems} = useContext(ShopContext)
  

  return (
    <header className='fixed top-0 left-0 m-auto
    w-full bg-white ring-1 ring-slate-900/5 z-10 px-6 lg:px-20'>
        <div className='px-4 flexBetween py-3 max-xs:px-2'>
          {/* Login */}
          <div>
            <Link><img src={logo} width={110} height={66} alt="" /></Link>
          </div>
          {/* navbar Desktop*/}
          <Navbar containerStyles={'hidden md:flex gap-x-5 xl:gap-x-10 medium-15'} />
          {/* navbar mobile*/}
          <Navbar containerStyles={`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300" 
          : 
          "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`} />
          {/* buttons */}
          <div className='flexBetween sm:gap-x-4 bold-16'>
            {!menuOpened? (
            <MdMenu className='md:hidden cursor-pointer
            hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30
            h-8 w-8 rounded-full' onClick={toggleMenu}/>
            ) : (
             <MdClose className='md:hidden cursor-pointer
             hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30
             h-8 w-8 rounded-full' onClick={toggleMenu}/>)}
             <div className='flexBetween sm:gap-x-6'>
                <NavLink to={"cart-page"} className={"flex"}><FaOpencart className='p-1 h-8 w-8 ring-offset-slate-900/30 ring-1 rounded-full'/><span className='relative flexCenter w-5 h-5 
                rounded-full bg-secondary text-white medium-14 -top-2'>{getTotalItems()} </span></NavLink>
                {/* <NavLink to={"logout"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}><img src={Logout} alt='logout' height={19} width={19}/> Logout</NavLink> */}
                 <NavLink to={"login"} className={"btn_secondary_rounded flexCenter medium-16 gap-x-2"}>
                  <img onClick={window.scrollTo(0, 0)} src={User} alt="login" width={19} height={19} />
                  Iniciar Sesion
                 </NavLink>
             </div>
          </div>

        </div>
    </header>
  )
}
