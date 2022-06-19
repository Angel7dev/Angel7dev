import Image from "next/image"

const Header = () => {

    return (
        <div className="mb-26 " id="about">
            <div className="bg-gradient-to-b from-teal-900 to-sky-900 bg-left-top bg-auto bg-repeat-x 
            h-[22rem] sm:h-[28rem] md:h-[30rem] 
            -mb-[20rem] sm:-mb-[25rem] md:-mb-[27rem]">

               
            </div>
            <div className='mx-auto lg:mx-24 my-16'>
                {/* <div className="flex justify-center h-auto w-32">
                    <Image className="rounded-full" width={400} height={600} src={"/images/Angel_Riera.jpg"} />
                </div> */}

                <div className="my-5 text-center mb-6 md:mb-10">
                    <h1 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-bold mb-5 md:mb-4 md:leading-[5rem]">Angel Riera</h1>
                    <div>
                        <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2rem] mb-5 font-bold  leading-[2rem]">Full Stack <span className="underline shadow-black font-extrabold text-teal-600">Django</span> <span className="underline shadow-black font-extrabold text-sky-600">React</span>  Web Developer</h2>
                        <div className="mx-auto border-b w-1/2" />
                    </div>
                </div>
                <div className="md:mb-12 text-center">
                    {/* <h3 className="text-[2rem] lg:text-[2rem] md:text-[3rem] font-bold mb-10 underline leading-[2rem]">who am I?</h3> */}
                    <div className="text-center mx-6 flex flex-col space-y-6">
                        <p className="underline font-semibold">
                            I have 2 years of experience in developing multiple web applications
                        </p>
                        <p>
                            I am passionate about devising solutions of minimum effort and maximum result, self-sustainable and durable over time, for the problems I face or to improve my social environment following the design principles of permaculture adopted as a philosophy of life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header