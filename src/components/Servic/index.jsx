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

            <h1 className="text-4xl underline-offset-4 font-bold text-center mb-10">
                Services</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-10 mx-[7%]">
                {services && services.map((e, i) => (
                        <Card key={i} description={e.description} name={e.name}/>
                ))}
            </div>
        </div>
    )
}

