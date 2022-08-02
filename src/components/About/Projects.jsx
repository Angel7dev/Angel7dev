import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



const Projects = () => {

    const displayContent = (e) => {
        return { __html: e }
    };

    const route = useRouter()
    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`/api/es/about/projects/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const apiData = await resp.json()
            setData(apiData)

        }
        fetchData()
    }, [route])


    return (data &&
        <div className="border-b">
            <h1 className=" py-5 text-center mb-6 underline leading-[4rem] mx-4 ">
                {data.title}
            </h1>

            <div className="w-full mb-16">

                <div className="flex flex-col space-y-24">
                    {data.obj.map((e, i) => (
                        <div key={i} 
                        className={`flex flex-col md:mx-24 lg:mx-0 justify-around
                         items-center md:px-8 text-center 
                         ${((i / 2) % 1 === 0) === true ? "lg:flex-row lg:text-left" :  "lg:flex-row-reverse lg:text-right"}`}
                        >

                            <a href={e.live} rel="noreferrer" target="_blank" 
                            className={`w-full lg:w-2/4  flex overflow-hidden shaodw shadow-md rounded-xl shadow-indigo-500`}>
                                    <Image width={"2000%"} height={"1000%"} className="relative w-full h-full object-center object-cover" src={e.image}
                                        alt={e.name} />
                            </a>
                            <div className='w-full lg:w-1/3 flex flex-col justify-center space-y-6 '>
                                <div className="mx-4">
                                    <h3 className="text-gray-100 underline-offset-2 underline">
                                        <span aria-hidden="true" className="inset-0 text-center">
                                            {e.name}
                                        </span>
                                    </h3>
                                </div>
                                <div className="mx-auto xl:mx-4 ">
                                    <p dangerouslySetInnerHTML={displayContent(e.description)} ></p>
                                </div>
                                <div className="m-2">
                                    <hr />
                                </div>


                                <div className="flex justify-between w-1/2 mx-auto">

                                    {e.gitHub &&
                                        <a className="px-2 py-1 mx-1 bg-gray-900 text-gray-200 border rounded hover:bg-gray-800"
                                            href={e.gitHub} target="__blank" >GitHub</a>
                                    }

                                    {e.live &&
                                        <a className="px-2 py-1 mx-1 bg-gray-200 text-gray-900 border rounded hover:bg-gray-400"
                                            href={e.live} target="__blank">Live</a>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}


export default Projects