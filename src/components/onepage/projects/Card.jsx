import React, { useState } from 'react'

const Card = ({ i, num }) => {

    const displayContent = (e) => {
        return { __html: e }
    };
    const integer = (num / 2) % 1 === 0
    const [first, setfirst] = useState((num / 2) % 1 === 0)
    console.log(first)
    return (
        <div className={integer === true 
            ?
            "flex flex-col lg:flex-row mx-24 lg:mx-0 justify-around items-center shadow shadow-gray-50 py-12 px-8"   
            : 
            "flex flex-col lg:flex-row-reverse mx-24 lg:mx-0 justify-around items-center shadow shadow-gray-50 py-12 px-8"}


        >
            <a href={i.live} rel="noreferrer" target="_blank" className="w-full lg:w-2/4  flex overflow-hidden ">
                <div className="h-full  border-2">
                    <img className="w-full h-full object-center object-cover shadow " src={i.image}
                        alt={i.name} />
                </div>
            </a>
            <div className='w-full lg:w-1/3 flex flex-col justify-center space-y-6 text-center'>
                <div className="mx-4">
                    <h3 className="text-xl font-bold text-gray-100 underline-offset-2 underline">

                        <span aria-hidden="true" className="text-3xl inset-0">

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
    )
}

export default Card