import { useState } from 'react'
import Link from 'next/link'

export const Card = ({ description, name }) => {

    const [current, setCurrent] = useState(0)

    // const nextCurrent = () => {
    //     console.log(current, description.length)
    //     const interval = setInterval(() => {
    //         if (current < description.length) {
    //             console.log("here")
    //             setCurrent(current + 1)
    //             console.log(current)
    //         } else if (current == description.length) {
    //             console.log("here2")

    //             setCurrent(0)
    //         }
    //     }, 1000)
    //     clearInterval(interval)
    // }

    return (

        <div className='relative group overflow-hidden my-5' >
            <div style={{ backgroundImage: `url("${description[current].img}")` }}
                className="rotation-1 h-[10rem] sm:h-[15rem]  md:h-[20rem] w-full
            bg-cover bg-center bg-no-repeat
             static "
            />


            {/* <div className='flex justify-center items-center w-full h-[25rem]'>
                <img className='rotation-1 w-full'
                    src={description[current].img} alt="" />
            </div> */}
            <div className='bg-black bg-opacity-40 text-white  absolute top-0 bottom-0 right-0 left-0'>
                <div className='flex justify-center items-center h-full'>
                    <Link href="/contact">
                            <a className='hover:p-6 border border-white p-5 rounded-md'>
                                {name}
                            </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
