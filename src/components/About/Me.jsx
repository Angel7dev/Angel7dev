import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Image from 'next/image'

const Me = () => {
    const route = useRouter()
    const [data, setData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`/api/${route.locale}/about`, {
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

 
    


    return ( data &&
        <div className='mb-24 mt-12 md:mt-24'>

            <h1 className='text-center mx-[10%] md:mx-[25%]' >
                {data.me}
            </h1>

            <div className='flex justify-center  mx-auto px-3 sm:px-24 mt-8 w-[90%]'>
                <div className="w-full grid gap-5 md:gap-10 md:grid-cols-3">

                    {data.feat.map((e, i) => (
                        <div key={i} className='text-center px-2 py-5 rounded-3xl flex flex-col items-center border bg-indigo-800 w-full' >
                            <div className='w-12 h-12  border-2 border-white bg-slate-700 flex justify-center items-center rounded-full'>

                            <Image width={25} height={25} src={e.icon} alt={e.title} />
                           
                            {/* {e.icon} */}

                            </div>
                            <div>
                                <span className='my-4 text-slate-300 h-3 underline underline-offset-1'>
                                    {e.title}
                                </span>
                            </div>
                            <span className='text-slate-400 '>
                                {e.sub_title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>


        </div >
    )
}

export default Me