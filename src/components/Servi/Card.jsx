import { useState } from 'react'

export const Card = ({ description }) => {

    const [current, setCurrent] = useState(0)

    const nextCurrent = () => {
        console.log(current, description.length)

        const interval = setInterval(() => {
            if (current < description.length) {
                console.log("here")
                setCurrent(current + 1)
                console.log(current)
            } else if (current == description.length) {
                console.log("here2")

                setCurrent(0)
            }
        }, 1000)

        clearInterval(interval)

    }



    return (

        <div onMouseOver={() => nextCurrent()}>
            {current}
            <img src={description[current].img} alt="" />

        </div>
    )
}
