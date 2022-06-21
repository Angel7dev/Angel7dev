import { useEffect, useState } from "react"
import { Card } from "./Card"

export default function S() {

    const [services, setServices] = useState(false)
    useEffect(() => {
        const fetchero = async () => {
            try {
                const resp = await fetch('api/localdata/services/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const apiData = await resp.json()
                setServices(
                    apiData.success
                )

            } catch (error) {
                console.log(error)
            }
        }
        fetchero()
    }, [])
    return (
        <div className="flex flex-col justify-center my-12">

            <h1 className="text-4xl underline-offset-4 font-bold text-center">
                Services</h1>

            <div className="grid sm:grid-cols-2 gap-2 md:gap-5 mx-[2%] md:mx-[5%]">
                {services && services.map((e, i) => (
                    <div key={i}>
                        {e.name}
                        <Card description={e.description}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

