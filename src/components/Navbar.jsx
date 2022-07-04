import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import lang from '../lang'


const Navbar = () => {
    const route = useRouter()
    const [links, setLinks] = useState()
    async function get_data() {
        const a = await lang(route.locale, "globals")
        setLinks(a.default.links)
    }
    get_data()




    // async function data (){
    //     const res = await lang(route.locale, "globals")
    //     return res
    // }
    // console.log(data)
    // language

    const selectLang = (e) => {
        console.log(e.target.value)
        route.push(route.pathname, route.pathname, {
            locale: e.target.value
        })
    }




    // async function  response (){
    //     const algo = await import(`../lang/${route.locale}/globals.json`)
    //     console.log(algo.default.links)
    // } 
    // response()


    return (
        <nav className='relative bg-slate-900 flex flex-col md:flex-row shadow-sm shadow-slate-600 md:py-2 md:px-8'>
            <div className='pr-5 md:border-r shadow shadow-white md:shadow-none text-center'>
                <Link href='/'>
                    <a className='mx-5' >
                        <strong className='logo-text italic -ml-[0.2rem] -mr-[0.0rem]'>
                            Angel Riera
                        </strong>
                    </a>
                </Link>

                <div className='font-bold absolute top-0 md:top-2 right-0 md:mr-6 flex'>
                    <select onChange={selectLang} className='rounded-full  bg-transparent  focus:outline-none' >
                        <option className='bg-slate-900 text-white ' value="es">es</option>
                        <option className='bg-slate-900 text-white ' value="en">en</option>
                    </select>
                </div>
            </div>

            {/* items menu */}
            <div className='flex justify-center px-5 space-x-2 sm:space-x-6'>
                {links && links.map((e, i) => (
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
