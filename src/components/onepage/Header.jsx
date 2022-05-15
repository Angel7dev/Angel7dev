
const Header = () => {

    return (
        <div className="mb-26 " id="about">
            <div className="
            bg-gradient-to-b from-teal-900 to-sky-900 bg-left-top bg-auto bg-repeat-x 
            h-[22rem] md:h-[8cm] 
            -mb-[17rem] md:-mb-[4cm] lg:-mb-[6cm]">
            </div>
            <div className='mx-auto md:m-24'>
                <div className="my-5 text-center">
                    <h1 className="text-[5rem] font-bold mb-5 md:mb-12 leading-[5rem]">Angel Riera</h1>
                    <h2 className="text-[2rem] underline font-bold mb-10 leading-[2rem]">Full Stack Django React Web Developer</h2>
                </div>
                <div className="mb-12 text-center">
                    <h3 className="text-[3rem] font-bold mb-10 underline leading-[2rem]">who am I?</h3>
                    <div className="text-left mx-6 flex flex-col space-y-6">
                        <p>
                            - I am a full-stack web developer specialized in Django and React, <span className="underline font-semibold">with 2 years of experience in developing multiple web applications.</span>
                        </p>
                        <p>
                            - I am passionate about devising solutions of minimum effort and maximum result, self-sustainable and durable over time, for the problems I face or to improve my social environment following the design principles of permaculture adopted as a philosophy of life.
                        </p>    
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Header