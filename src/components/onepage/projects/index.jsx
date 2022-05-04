import { lazy, Suspense } from "react";
// import Card from "./Card";
const Card = lazy(() => import('./Card'))

import { useSelector } from 'react-redux'

const Projects = () => {
    const projects = useSelector(e => e.portfolio.Projects)

    return (
        <div className="md:m-12" id="projects">
            <div className="md:my-12 mt-12">
                <h1 className="text-gray-50 text-5xl text-center ">My Projects:</h1>
            </div>

            <div className="w-full mb-16">

                <div className="flex flex-col md:space-y-24">

                    {projects.length > 0 ? projects.map((i, index) =>
                        <Suspense key={i.id} fallback={
                            <svg className="animate-spin h-20 w-20 mx-auto my-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        }>
                            {
                                (
                                    <Card i={i} num={index} />)
                            }
                        </Suspense>



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