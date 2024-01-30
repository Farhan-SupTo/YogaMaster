import { CiLight } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../Custom Hooks/useCart';
import logo from '../../../assets/img/logo.png'

const Header = () => {
    const [header,setHeader] =useState(false)


    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 36 ? setHeader(true) : setHeader(false)
      })
    })

    // const mode = JSON.parse(localStorage.getItem("dark-mode"))
    // const [dark, setDark] = useState(false)

    // if (dark) {
    //     localStorage.setItem('dark-mode', true)
    // }
    // else {
    //     localStorage.setItem('dark-mode', false)
    // }

    // // console.log(mode)
    // useEffect(() => {
    //     if (!mode) {
    //         document.querySelector("html").setAttribute("data-theme", "night")
    //     } else {
    //         document.querySelector("html").setAttribute("data-theme", "light")
    //     }
    // }, [mode])


    const { user, logOut } = useContext(AuthContext)
    const [userName, setUserName] = useState('');
    const [ClassCart] = useCart();
    // console.log("Class len",ClassCart);

    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error.message);
            });
    }

    const onMouseOver = () => {
        console.log(user.displayName);
        setUserName(user.displayName)
    }

    return (

        <div className={`${
            header? 'top-0' : 'top-0'
          } fixed bg-white w-full max-w-[1370px] mx-auto rounded-md h-[90px] shadow-md px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}>

            {/* <div className="navbar bg-lime-400 px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Home</NavLink></li>
                            <li><NavLink to='/instructors' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Instructors</NavLink></li>
                            <li><NavLink to='/classes' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Classes</NavLink></li>

                            {
                                user ?
                                    <>

                                        <li className='cursor-pointer'><NavLink to='/dashboard/mycart' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}><FaShoppingCart></FaShoppingCart>Dashboard +{ClassCart?.length || 0}</NavLink>

                                        </li>




                                    </>
                                    : <></>
                            }

                        </ul>
                    </div>
                    <a className="text-xl">Yogastic.</a>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Home</NavLink></li>
                        <li><NavLink to='/instructors' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Instructors</NavLink></li>
                        <li><NavLink to='/classes' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Classes</NavLink></li>


                    </ul>

                </div>

                <div >
                    {
                        user ?
                            <>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1">

                                        <li className='cursor-pointer'><NavLink to='/dashboard/mycart' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}><FaShoppingCart></FaShoppingCart>Dashboard +{ClassCart?.length || 0}</NavLink>

                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown dropdown-end navbar-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div onMouseOver={onMouseOver} className="w-10 rounded-full">
                                            <img src={user?.photoURL} title={userName} />

                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                                        <li><Link onClick={handleLogout}>Logout</Link></li>
                                    </ul>
                                </div>
                            </> :
                            <>
                                <Link to='/signIn'><button className="btn btn-accent btn-success">Sign in</button></Link>
                            </>
                    }



                </div>
            <div>
                <button>ahs</button>
            </div>
            </div> */}


            <div className="navbar bg-base-100 ">
                <div className="flex-none">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu font-bold text-base menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Home</NavLink></li>
                            <li><NavLink to='/instructors' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Instructors</NavLink></li>
                            <li><NavLink to='/classes' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Classes</NavLink></li>

                            {
                                user ?
                                    <>

                                        <li className='cursor-pointer'><NavLink to='/dashboard/mycart' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}><FaShoppingCart></FaShoppingCart>Dashboard +{ClassCart?.length || 0}</NavLink>

                                        </li>




                                    </>
                                    : <></>
                            }

                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                <img src={logo} alt="" />
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-base">
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Home</NavLink></li>
                        <li><NavLink to='/instructors' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Instructors</NavLink></li>
                        <li><NavLink to='/classes' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Classes</NavLink></li>


                    </ul>

                </div>
                <div >
                    {
                        user ?
                            <>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1">

                                        <li className='cursor-pointer'><NavLink to='/dashboard/mycart' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}><FaShoppingCart></FaShoppingCart>Dashboard +{ClassCart?.length || 0}</NavLink>

                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown dropdown-end navbar-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div onMouseOver={onMouseOver} className="w-10 rounded-full">
                                            <img src={user?.photoURL} title={userName} />

                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                                        <li><Link onClick={handleLogout}>Logout</Link></li>
                                    </ul>
                                </div>
                            </> :
                            <>
                                <Link to='/signIn'><button className='lg:px-[30px] bg-orange-100 border shadow-xl border-orange text-paragraph  font-semibold text-sm lg:text-base hover:bg-orange-200 hover:text-white transition'>Sign in</button></Link>
                            </>
                    }



                </div>

                {/* <div className="flex-none">
                    <div onClick={() => setDark(!dark)} className='text-2xl p-2 cursor-pointer'>{dark ? <span><MdDarkMode /></span> :
                        <span><CiLight className='text-white' /></span>}</div>
                </div> */}
            </div>

        </div>



    );
};

export default Header;