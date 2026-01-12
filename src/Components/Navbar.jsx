import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/logo.png'
import { navItems } from '../constants/index'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const toggleNavbar = () => {
        setOpen(!open)
    }
    return (
        <>
            <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 '>
                <div className='container px-4 mx-auto relative text-sm'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center  shrink-0'>
                            <img src={Logo} alt="logo" className='w-10 h-10 mr-2 ' />
                            <span className='text-xl tracking-tight '>VirtualR</span>
                        </div>
                        <ul className='hidden lg:flex ml-14 space-x-12 '>
                            {
                                navItems.map((items, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={items.href}>{items.label}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className='hidden lg:flex justify-center items-center space-x-12'>
                            <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                            <a
                                href="#"
                                className="py-2 px-3 border rounded-md bg-[linear-gradient(to_right,#f97316,#c2410c)]"
                            >
                                Create an account
                            </a>

                        </div>
                        <div className='lg:hidden md:flex flex-col justify-end'>
                            <button onClick={toggleNavbar}>{open ? <X /> : <Menu />}</button>
                        </div>
                    </div>
                    {open && (
                        <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                            <ul className=''>
                                {
                                    navItems.map((items, index) => {
                                        return (
                                            <li key={index} className='py-4'>
                                                <a href={items.href}>{items.label}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className='flex space-x-6'>
                                <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                                <a
                                    href="#"
                                    className="py-2 px-3 border rounded-md bg-[linear-gradient(to_right,#f97316,#c2410c)]"
                                >
                                    Create an account
                                </a>

                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar