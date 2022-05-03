import React from 'react'

const Header = () => {
    return (
        <div className="mb-26 " id="about">

            <div className="
            bg-gradient-to-b from-teal-900 to-sky-900 bg-left-top bg-auto 
            bg-repeat-x mt-12 xl:mt-0 h-52 xl:h-80 -mb-48 md:-mb-52">
            </div>

            <div className="sm:mx-24 mx-auto flex flex-col xl:flex-row justijy-center ">

                <div className="flex justify-center md:justify-end">

                    <div className='mt-8 xl:mt-0 w-1/2 xl:w-full mx-auto xl:mx-12'>
                        <img src="/RagAndRoll/images/Angel_Riera.jpg" alt="perfil.svg"
                            className="object-cover rounded-lg overflow-hidden"
                            fill="none" stroke="currentColor" />
                    </div>
                </div>

                <div className="
                flex justify-center items-start 
                w-full p-1 sm:p-2 mt-0 md:mt-16
                mb-2cursor-pointer text-center xl:text-left"

                >
                    <div className="w-full">
                        <h1 className="font-bold text-5xl xl:text-7xl tracking-widest mb-2 ">
                            Angel Riera
                        </h1>


                        <div className='flex flex-col xl:flex-row xl:items-center  text-center xl:text-left'>
                            <p className="underline underline-offset-8 font-medium text-gray-100 ">
                                Desarrollador web Full Stack Django React</p>

                        </div>

                        <p className="mt-2 md:mt-10 xl:mt-12 text-lg tracking-widest">
                            I have experience in teamwork with scrum, agile methodologies, and workflow in GitHub, I specialize in developing web apps with Django and React, I also have knowledge in Python, JavaScript, HTML, CSS, tailwind, Bootstrap, Docker, SQL, also in the use of applications, database design, web layout, UX and UI

                        </p>

                        <p className="my-2 text-lg tracking-widest">
                            I am passionate about learning, and inspiring people to pursue their goals because I believe that the only way to improve the world is to improve ourselves by pursuing our goals and that in one way or another it becomes an achievement for the common good of humanity

                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header