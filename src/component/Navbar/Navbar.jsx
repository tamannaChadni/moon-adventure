import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);
 
  // const handleLogout = () =>{
  //   logOut()
  //   .then(result =>{
  //     console.log(result);
  //   })
  //   .catch(error =>{
  //     console.log(error);
  //   })
  // }

  return (
    <div className="container navbar bg-base-100 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-bold" : "font-normal"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-bold" : "font-normal"
              }
              to="/all-spots"
            >
              All Tourists Spot
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-bold" : "font-normal"
              }
              to="/add-spots"
            >
              Add Tourist Spot
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-bold" : "font-normal"
              }
              to="/my-list"
            >
              My List
            </NavLink>
            
            
          </ul>
        </div>

        <Link
          to="/"
          className="btn btn-ghost text-3xl font-boldtext-2xl font-bold bg-gradient-to-r from-yellow-300 via-red-500 to-green-400 text-transparent bg-clip-text animate-gradient"
        >
          Moon Adventure
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "font-normal"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "font-normal"
            }
            to="/all-spots"
          >
           All Tourists Spot
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "font-normal"
            }
            to="/add-spots"
          >
            Add Tourists Spot
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "font-normal"
            }
            to="/my-list"
          >
            My List
          </NavLink>
          
          
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {/* {
          user ?<button onClick={handleLogout} className="btn bg-lime-500 text-white hidden lg:block">
          Logout
        </button>:<Link to="/login"><button className="btn bg-lime-500 text-white hidden lg:block">
          Login
        </button></Link>
        } */}
        {
                        user? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://i.ibb.co/6y60rJ3/use.jpg" } />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName||'user name not found'}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={logOut}
                                        className="btn btn-sm bg-green-600 text-white">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm bg-lime-400 text-white">Login</button>
                            </Link>
                    }
        
        <Link to="/register"><button className="btn btn-sm bg-yellow-400 text-white">Registration</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
