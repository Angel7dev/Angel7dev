// import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Card } from "./Card"
import { useRouter } from 'next/router'

export default function S() {

    const [services, setServices] = useState()
    const route = useRouter()

    useEffect(() => {
        const fetchero = async () => {
            try {
                const resp = await fetch(`/api/${route.locale}/services/`, {

                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const apiData = await resp.json()
                setServices(apiData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchero()
    }, [])

    return ( services &&
        <div className="flex flex-col justify-center my-12">

            <h1 className="underline-offset-4 text-center mb-10">
                {services.title}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-10 mx-[7%]">
                { services.obj.map((e, i) => (
                        <Card key={i} description={e.description} name={e.name}/>
                ))}
            </div>
        </div>
    )
}

