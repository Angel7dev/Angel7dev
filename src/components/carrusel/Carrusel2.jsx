import React from 'react'

export default function Carrusel2({ images }) {


    return (

        // principal
        <div className='relative'>


            {/* slideShow */}
            <div className='flex relative z-1 overflow-hidden'>

                {images && images.map((e, i) => (

                    // slide
                    <div className=' 
                        min-w-full overflow-hidden z-1 relative
                        transition-all ease-out '>

                        {/* imgen */}
                        <div className='max-h-[200px] min-w-full flex items-center'>
                            <img className='w-full h-full z-1' src={e} alt="" />
                        </div>

                        {/* text */}
                        <div className='absolute bottom-0 top-0 w-full z-2
                        bg-slate-900 text-white bg-opacity-50 
                        flex justify-center px-[2%]'>

                            <p className='opacity-100'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <p className='opacity-100'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                ))}

                    
            {/* buttoms */}
                <div className='
                    pointer-events-none
                    w-full flex justify-between
                    absolute bottom-0 top-0 z-2'> {/*  */}
                    <button className='pointer-events-auto w-1/6 text-7xl '>{"<"}</button>
                    <button className='pointer-events-auto w-1/6'>{">"}</button>
                </div>

            </div>
        </div>

    )
}
