import React from 'react'
import Image from 'next/image'
const Navbar = () => {

    const display = () => {
        const navmenu = document.querySelector('#navmenu')
        navmenu.classList.toggle('hidden')
    }

    const btns = [
        { name: 'contact', link: "#" },
        { name: 'about', link: "#" },
        { name: 'services', link: "#" },
    ]
    return (
        <nav className='flex px-[10%] shadow-sm shadow-slate-600'>
            <div>
                <a className='hover:font-semibold' href='#about'> Angel7dev</a>
            </div>


            {/* items menu */}
            <div id='navmenu'>
            </div>
            {/* items menu */}

            {/* hidden buttom */}

            <div >
                <button onClick={() => display()} >
                    <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <title>Menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                </button>
            </div>
        </nav>

    )
}

export default Navbar