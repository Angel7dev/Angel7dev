import Image from "next/image";
import { useSelector } from "react-redux";


const Projects = () => {

    const displayContent = (e) => {
        return { __html: e }
    };
    // const integer = (num / 2) % 1 === 0
    // const [first, setfirst] = useState((num / 2) % 1 === 0)

    const projects = useSelector(e => e.portfolio.Projects)

    return (
        <div className="md:m-12" id="projects">
            <div className="border-b mx-[5%] mb-16">
                <h3 className="text-center text-[3rem] font-bold mb-6 underline leading-[4rem] mx-4">
                    Projects
                </h3>
            </div>

            <div className="w-full mb-16">

                <div className="flex flex-col md:space-y-24">

                    {projects && projects.length > 0 ? projects.map((i, index) =>

                        <div key={index} className={((index / 2) % 1 === 0) === true
                            ?
                            "flex flex-col lg:flex-row md:mx-24 lg:mx-0 justify-around items-center shadow shadow-gray-50 py-12 md:px-8 text-left"
                            :
                            "flex flex-col lg:flex-row-reverse md:mx-24 lg:mx-0 justify-around items-center shadow shadow-gray-50 py-12 md:px-8 text-right"}
                        >
                            <a href={i.live} rel="noreferrer" target="_blank" className="apsolute w-full lg:w-2/4  flex overflow-hidden ">
                                <div className="h-full  border-2">
                                    <Image width={"2000%"} height={"1000%"}  className="relative w-full h-full object-center object-cover shadow " src={i.image}
                                        alt={i.name} />
                                </div>
                            </a>
                            <div className='w-full lg:w-1/3 flex flex-col justify-center space-y-6 '>
                                <div className="mx-4">
                                    <h3 className="text-xl font-bold text-gray-100 underline-offset-2 underline">

                                        <span aria-hidden="true" className="text-3xl inset-0 text-center">
                                            {i.name}
                                        </span>


                                    </h3>

                                </div>

                                <div className="mx-auto xl:mx-4 ">
                                    <p dangerouslySetInnerHTML={displayContent(i.description)} ></p>



                                </div>


                                <div className="m-2">
                                    <hr />
                                </div>



                                <div className="flex justify-center xl:justify-between ">
                                    <div className="flex space-x-2 mx-4">

                                        <p className="text-sm font-medium text-gray-200 ">init date: </p>
                                        <p className="text-sm text-gray-50"> {i.date}</p>
                                    </div>

                                    <div className="flex justify-between ">

                                        {i.gitHub &&
                                            <a className="px-2 py-1 mx-1 bg-gray-900 text-gray-200 border text-xs rounded hover:bg-gray-800"
                                                href={i.gitHub} target="__blank" >GitHub</a>
                                        }

                                        {i.live &&
                                            <a className="px-2 py-1 mx-1 bg-gray-300 text-gray-900 text-xs rounded hover:bg-gray-400"
                                                href={i.live} target="__blank">Live</a>
                                        }

                                    </div>
                                </div>

                            </div>


                        </div>




                    ) :
                        <svg className="animate-spin h-20 w-20 mx-auto my-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }

                </div>




            </div>
        </div>
    )
}


export default Projects