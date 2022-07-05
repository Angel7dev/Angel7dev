import { useEffect, useState } from 'react'

const Header = ({images}) => {

    //trae imagenes aleatorias
    //const ramdon = () => `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/1000/1000`

  

    const [current, setCurrent] = useState(0)
    console.log(current)

    const set_Current = (boolean) => {
        if (boolean == true) { // next
            console.log(current)
            console.log(images.length - 1)
            if (current == images.length - 1) {
                console.log(current == images.length - 1, "here1")
                setCurrent(0)
            } else {
                console.log(current, "== ", images.length - 1, "here2")
                setCurrent(current + 1)
            }
        } else if (boolean == false) { // previus
            if (current == 0) {
                setCurrent(images.length - 1)
            } else {
                setCurrent(current - 1)
            }
        }
    }
    useEffect(() => {
        if (true) {
            const i = setInterval(() => {
                setTimeout(() => {
                    console.log(current)
                }, 2500);
            }, 5000);
            return () => clearInterval(i)
        }
    }, [])
    return (
        <div style={{ backgroundImage: `url("${images[current]}")` }}
            className={`h-[100vh] w-full 
            bg-cover bg-center bg-no-repeat bg-fixed 
            min-w-screen min-w-full static 
            `}>
            <div className='flex flex-col  bg-black bg-opacity-40  absolute w-full h-full '>
                <div className='flex justify-between items-center h-full'>

                    <button onClick={() => set_Current(false)} className='bg-slate-700 mx-4'>{"<"}</button>
                    <div className='text-center w-1/2'>
                        <h1 className=''>title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa recusandae quasi tempore iure placeat cupiditate facilis aperiam quae a eligendi, porro doloribus numquam voluptatibus neque enim error non unde?</p>
                    </div>
                    <button onClick={() => set_Current(true)} className='bg-slate-700 mx-4'>{">"}</button>
                </div>

                <div className='py-5 h-1/5 flex justify-center items-center space-x-4'>
                    {images.map((e, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            className="
                            bg-white rounded-full h-2 w-2 underline-offset-4
                            hover:cursor-pointer hover:bg-slate-700"
                        />
                    )
                    )}
                </div>
            </div>
        </div >
    )
}

export default Header