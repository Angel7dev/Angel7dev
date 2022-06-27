import Image from "next/image";
import { useEffect, useState } from "react";

const LayoutProjects = () => {

    // const images = [...Array(5).keys()];

    const [layout, setLayout] = useState()
    useEffect(() => {
        const fetchero = async () => {
            const resp = await fetch(`/api/localdata/LayoutProjects/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const apiData = await resp.json()
            setLayout(apiData.success
            )
        }
        fetchero()
    }, [])

    return (
        <div className="md:mx-[4rem] my-[4rem]">
            <div className="border-b mx-[5%] mb-16">
                <h3 className="text-center text-[3rem] font-bold mb-6 underline leading-[4rem] mx-4">
                    Layout Projects
                </h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 mx-[2%]'>
                {layout && layout.map((e, i) => (
                    <div key={i} className='relative group overflow-hidden my-5'  >
                        <div style={{ backgroundImage: `url("${e.image}")` }}
                            className="rotation-1 h-[10rem] md:h-[12rem] w-auto min-w-full
                                    bg-cover bg-center bg-no-repeat
                                    static "/>
                        {/* <div className='flex justify-center items-center w-full h-full'>
                                <img className='rotation-1 w-full'
                                    src={e.image} alt="" />
                            </div> */}
                        <div className='absolute bg-black bg-opacity-40 text-white h-full top-0 bottom-0 right-0 left-0 flex items-center justify-around space-x-[4rem] opacity-0 group-hover:opacity-100 group-hover:brightness-100'>
                            <a className="z-3 px-6 py-2 mx-1 bg-gray-900 text-gray-200 border text-xs rounded group-hover:bg-gray-800"
                                href={e.gitHub} target="__blank" >GitHub</a>

                            <a className="px-6 py-2 mx-1 bg-gray-300 text-gray-900 text-xs rounded group-hover:bg-gray-400"
                                href={e.live} target="__blank">Live</a>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}

export default LayoutProjects