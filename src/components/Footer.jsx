import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-blue-700 to-sky-700  flex-grap w-full p-0 ">
            <div className="max-w-screen-xl px-4 pb-6 mx-auto space-y-4 overflow-hidden sm:px-6 lg:px-8">
                {/* <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <a href="#"
                                className="text-base leading-6 text-gray-400 hover:text-gray-50 hover:bg-sky-800 px-3 py-1 hover:border border-sky-700 rounded">
                                Terms
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#"
                                className="text-base leading-6 text-gray-400 hover:text-gray-50 hover:bg-sky-800 px-3 py-1 hover:border border-sky-700 rounded">
                                Terms
                            </a>
                        </div>
                    </nav> */}


                <div className="flex justify-center mt-4 space-x-6">

                    {/* <!-- twitter --> */}
                    <div className='hover:bg-blue-300 hover:text-sky-900 p-2 rounded-full'>
                        <a href="https://twitter.com/RagnAndRoll" target="__blank">
                            <Image width={25} height={25} src="/images/social/twitter.svg"
                                className="h-6 w-6 fill-gray-50"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" alt="" />
                        </a>
                    </div>

                    {/* <!-- linkedin --> */}
                    <div className='hover:bg-blue-300 hover:text-sky-900 p-2 rounded-full'>
                        <a href="https://www.linkedin.com/in/angelriera/" target="__blank">
                            <Image width={25} height={25} src="/images/social/linkedin.svg"
                                className="h-6 w-6 fill-gray-50"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" alt="" />
                        </a>
                    </div>


                    {/* <!-- gitHub --> */}
                    <div className='hover:bg-blue-300 hover:text-sky-900 p-2 rounded-full'>
                        <a href="https://github.com/RagAndRoll" target="__blank">
                            <Image width={25} height={25} src="/images/social/GitH.svg"
                                className="h-6 w-6 fill-gray-50"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" alt="" />
                        </a>
                    </div>



                </div>
                <a href="https://github.com/RagAndRoll" target="__blank">
                    <div className='flex justify-center mx-auto'>

                        <div className="
                            hover:bg-blue-300 hover:text-sky-900 rounded-full
                            mt-8 text-base leading-6 text-center font-bold 
                            underline underline-offset-8">
                            ©2022 Ragnarok. All rights reserved.
                        </div>
                    </div>

                </a>
            </div>
        </footer>

    )
}

export default Footer