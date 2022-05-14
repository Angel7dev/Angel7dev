import { lazy, Suspense } from 'react'

import { useSelector } from 'react-redux'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Image from 'next/image'

const Card = lazy(() => import('./Card'))

const Skills = () => {
    const skills = useSelector(e => e.portfolio.Skills)
    const handleOnDragStart = (e) => e.preventDefault()

    return (
        <div id="skills" className='mb-12'>
            <div className="container flex justify-center mx-auto mt-32" >
                <div className="my-12">
                    <h1 className="text-gray-50 text-5xl text-center pb-3">description of my skills:</h1>
                    <p className="xl:text-3xl text-2xl text-center text-gray-300 pb-6 sm:w-4/6 w-5/6 mx-auto">
                    </p>
                </div>
            </div>

            <AliceCarousel
                mouseTrackingEnabled
                infinite={true}
                playButtonEnabled={true}
                dotsDisabled={true}
                buttonsDisabled={true}
            >

                {skills.length ? skills.map((i) =>
                    <Suspense key={i.id} fallback={
                        <svg className="animate-spin h-20 w-20 mx-auto my-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>

                    }>
                        {
                            //  <img src={i.image}  className="yours-custom-class" />
                            <div onDragStart={handleOnDragStart} className='flex flex-col justify-center'>
                                <div className='mx-auto bg-slate-400 p-6 rounded-full fill-white'>
                                    <img src={i.image} alt={i.name} />
                                </div>
                                <h1 className="font-bold text-3xl text-center mb-1">{i.name}</h1>
                                <p className="text-center text-gray-100 text-base pt-3 font-normal">
                                    {i.description}
                                </p>
                            </div>
                        }
                    </Suspense>
                ) :
                    <svg className="animate-spin h-20 w-20 mx-auto my-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                }

            </AliceCarousel >

            <div className="w-full px-10 pt-10">
                <div className="container mx-auto">
                    <div role="list" aria-label="Behind the scenes Skills "
                        className="flex flex-wrap items-center justify-center md:space-x-4 ">



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills