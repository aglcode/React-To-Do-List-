import { Link, Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <>
    <header className=' border-b pb-4'>
        <nav className=' flex items-center justify-between'>
            <h1 className=' font-bold text-text'>
                To-Do List App
            </h1>
            <div>
                <Link className=' px-3 py-1 rounded-md text-text hover:bg-secondary hover:text-white' 
                 to="/"> List 
                 </Link>
                 <Link className=' px-3 py-1 rounded-md text-text hover:bg-secondary hover:text-white ml-4'
                 to="/create">Add Task
                 </Link>
            </div>
        </nav>
    </header>

    <main className=' py-8 px-2'>
       <Outlet />
    </main>
    </>
  )
}

export default Layout