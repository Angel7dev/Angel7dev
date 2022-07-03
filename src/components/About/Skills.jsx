import { useRef, useEffect, useState } from 'react'
import Image from 'next/image';

const SkillsExp = () => {
    const slider = useRef()
    const [skills, setSkills] = useState()

   

  


    useEffect(() => {
        const fetchero = async () => {
            const resp = await fetch(`/api/localdata/skills/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const apiData = await resp.json()
            setSkills(apiData.success
            )
        }
        fetchero()

    }, [])



    // useEffect(() => {
    //     slider.current.scrollLeft += 50
    // }, [50])

    return (
        <div id='#skills' className="mb-12 mx-auto lg:m-24 text-center">
            <div className='mb-24'>
                <div className="border-b mx-[5%] mb-16">
                    <h3 className="text-center mb-6 underline mx-4">
                        Technical skills
                    </h3>
                </div>
                <div className='my-16'>
                    <div className='flex items-center justify-center w-full h-full '>
                        <button className='bg-gray-500 mx-2' onClick={() => slider.current.scrollLeft -= slider.current.children[0].offsetWidth}>
                            <svg className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fillRule='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path></svg>
                        </button>
                        <div ref={slider} className='overflow-hidden scroll-smooth h-full flex items-start justify-start'>
                            {skills && skills.map((e, i) => (
                                <div key={i} className='flex flex-col justify-center items-center snapt-start flex-shrink-0 mx-4 w-full md:w-1/3'>
                                    <div style={{borderColor: `#${e.color}`}}
                                    className={`bg-gray-700 p-2 h-24 w-24 rounded-full flex justify-center items-center border-8 `}>
                                        <Image fillRule={`#${e.color}`} width={80} height={80} src={`/images/skills/${e.name}.svg`} alt={`images${i}`} className='object-cover object-center w-full' />
                                    </div>

                                    <h5>{e.name}</h5>
                                    <p className="">
                                        {e.description}</p>
                                </div>
                            ))}
                        </div>
                        <button className='bg-gray-500 mx-2' onClick={() => slider.current.scrollLeft += slider.current.children[0].offsetWidth}>
                            <svg className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fillRule='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path></svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default SkillsExp