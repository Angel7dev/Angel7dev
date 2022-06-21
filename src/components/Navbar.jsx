import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

    const display = () => {
        const navmenu = document.querySelector('#navmenu')
        navmenu.classList.toggle('hidden')
    }

    const links = [
        { name: 'Home', link: "/" },
        { name: 'Contact', link: "/contact/" },
        { name: 'services', link: "/services/" },
        // { name: 'about', link: "#" },
    ]
    return (
        <nav className='bg-slate-900 flex flex-col md:flex-row shadow-sm shadow-slate-600 md:py-2 md:px-8'>
            <div className='pr-5 md:border-r shadow shadow-white md:shadow-none'>
                <Link href='/'>
                    <a className='mx-5' > Ange
                        <span className='italic'>L
                            <strong className='font-extrabold -ml-[0.2rem] -mr-[0.0rem]'>
                                7-
                            </strong>Dv</span>
                    </a>
                </Link>
            </div>

            {/* items menu */}
            <div id='navmenu' className='flex justify-center text-md px-5 space-x-6'>
                {links.map((e, i) => (
                    <Link key={i} href={e.link} className="">
                        <a className='group'>
                            {e.name}
                            <div className='transition ease-out duration-300 -mt-1                     
                            -scale-50 group-hover:scale-x-100 group-hover:bg-indigo-700 h-2 
                            '/>
                        </a>
                    </Link>
                ))}



            </div>
            {/* items menu */}

            {/* hidden buttom */}
            {/* 
            <div className='hidden' >
             
                <button onClick={() => display()} >
                    <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <title>Menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                </button>
            </div> */}
        </nav>

    )
}

export default Navbar