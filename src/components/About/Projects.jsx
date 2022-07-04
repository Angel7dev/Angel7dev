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
            const resp = await fetch(`/api/${route.locale}/about/projects/`, {
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
        <div className="">
            <h1 className="border-b py-5 text-center mb-6 underline leading-[4rem] mx-4 ">
                {data.title}
            </h1>

            <div className="w-full mb-16">

                <div className="flex flex-col md:space-y-24">
                    {data.obj.map((e, i) => (
                        <div key={i} className={((i / 2) % 1 === 0) === true
                            ? "flex flex-col lg:flex-row md:mx-24 lg:mx-0 justify-around items-center md:px-8 text-center lg:text-left"
                            : "flex flex-col lg:flex-row-reverse md:mx-24 lg:mx-0 justify-around items-center md:px-8 text-center lg:text-right"}
                            >
                                
                            <a href={e.live} rel="noreferrer" target="_blank" className="apsolute w-full lg:w-2/4  flex overflow-hidden ">
                                <div className="h-full  border-2">
                                    <Image width={"2000%"} height={"1000%"} className="relative w-full h-full object-center object-cover shadow " src={e.image}
                                        alt={e.name} />
                                </div>
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
                                <div className="flex justify-center xl:justify-between ">
                                    <div className="flex space-x-2 mx-4">

                                        <p className="text-gray-200 ">init date: </p>
                                        <p className="text-gray-50"> {e.date}</p>
                                    </div>

                                    <div className="flex justify-between ">

                                        {e.gitHub &&
                                            <a className="px-2 py-1 mx-1 bg-gray-900 text-gray-200 border rounded hover:bg-gray-800"
                                                href={e.gitHub} target="__blank" >GitHub</a>
                                        }

                                        {e.live &&
                                            <a className="px-2 py-1 mx-1 bg-gray-300 text-gray-900 text-xs rounded hover:bg-gray-400"
                                                href={e.live} target="__blank">Live</a>
                                        }
                                    </div>
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