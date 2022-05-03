import Image from 'next/image'

const Header = () => {
    return (
        <div className="mb-26 " id="about">
            <div className="
            bg-gradient-to-b from-teal-900 to-sky-900 bg-left-top bg-auto 
            bg-repeat-x h-[10cm] md:h-[8cm] -mb-[8cm] md:-mb-[4cm]  lg:-mb-[6cm]">
            </div>

            <div className="
            flex flex-col justify-center items-center
            lg:flex-row md:mx-16 lg:mx-24 ">

                <div className="flex justify-start items-start md:mx-4 ">
                    <div className='md:w-[15rem]'>
                        <Image src="/images/Angel_Riera.jpg" alt="perfil.svg" width={250} height={400}
                            className="object-cover rounded-lg overflow-hidden"
                            fill="none" stroke="currentColor" />
                    </div>
                </div>

                <div className="
                flex flex-col justify-center lg:items-start text-center
                lg:justify-end lg:mt-24 lg:text-left
                ">
                    <h1 className='font-bold text-5xl'>Angel Riera</h1>
                    <p className="underline underline-offset-8 font-medium text-gray-100 my-2 md:mt-0">
                        Desarrollador web Full Stack Django React</p>
                    <p className="mt-2 md:mt-5 text-lg">
                        I have experience in teamwork with scrum, agile methodologies, and workflow in GitHub, I specialize in developing web apps with Django and React, I also have knowledge in Python, JavaScript, HTML, CSS, tailwind, Bootstrap, Docker, SQL, also in the use of applications, database design, web layout, UX and UI
                    </p>
                    <p className="my-2 text-lg hidden lg:flex">
                        I am passionate about learning, and inspiring people to pursue their goals because I believe that the only way to improve the world is to improve ourselves by pursuing our goals and that in one way or another it becomes an achievement for the common good of humanity

                    </p>
                </div>
            </div>








        </div>
    )
}

export default Header