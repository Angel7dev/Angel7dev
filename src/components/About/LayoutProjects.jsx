import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

const LayoutProjects = () => {

    const route = useRouter()
    const [layout, setLayout] = useState()
    useEffect(() => {
        const fetchero = async () => {
            const resp = await fetch(`/api/es/about/layout/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const apiData = await resp.json()
            setLayout(apiData)
        }
        fetchero()
    }, [route])

    console.log(layout)

    return (layout &&
        <div className="border-b pb-5">
            <h1 className="py-5 text-center mb-6 underline leading-[4rem] mx-4 ">
                {layout.title}
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mx-[5%] h-[45rem]'>
                {layout && layout.obj.map((e, i) => (
                    <div key={i} className='relative group overflow-hidden'  >
                        <div style={{ backgroundImage: `url("${e.image}")` }}
                            className="rotation-1 h-full w-auto min-w-full
                                    bg-cover bg-center bg-no-repeat
                                    static "/>
                        {/* <div className='flex justify-center items-center w-full h-full'>
                                <img className='rotation-1 w-full'
                                    src={e.image} alt="" />
                            </div> */}
                        <div className='absolute  top-0 bottom-0 right-0 left-0
                        flex items-center justify-around 
                        
                        bg-black text-white
                        bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:brightness-100'>
                           
                           
                           
                            {/* <a className="px-6 py-2 bg-gray-900 text-gray-200 border rounded group-hover:bg-gray-800"
                                href={e.gitHub} target="__blank" >GitHub</a> */}

                            <a className="px-6 py-2 text-xl bg-gray-300 text-white rounded group-hover:bg-transparent border border-white"
                                href={e.live} target="__blank">
                                {route.locale == 'en' ?
                                    "Live"
                                    :
                                    "ver"
                                }
                            </a>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}

export default LayoutProjects