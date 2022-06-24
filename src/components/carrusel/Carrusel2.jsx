import React from 'react'
import { useRef } from 'react'

export default function Carrusel2({ images }) {


    const sliderBar = useRef()

    const handlers = (bool) => {
        const slider = sliderBar.current
        const lenSlider = slider.children.length
        const widthSlider = slider.children[0].offsetWidth

        const first = slider.children[0]
        const last = slider.children[lenSlider - 1]

        console.log(bool)
        const toTheLast = () => {
            
            console.log("to last")
            slider.style.transition = `none`
            slider.style.transform = `translateX(0px)`
            slider.appendChild(first)
            
        }
        if (lenSlider > 0) {
            if (bool == true) { //next
                slider.style.transition = `1000ms ease-out all`
                slider.style.transform = `translateX(-${widthSlider}px)`
                slider.addEventListener('transitionend', toTheLast)
            } else {
                slider.insertBefore(last, slider.firstChild)
                slider.style.transition = `none`
                slider.style.transform = `translateX(-${widthSlider}px)`

                setTimeout(()=>{
                    slider.style.transition = `1000ms ease-out all`
                    slider.style.transform = `translateX(0)`
                },10)                
            }
        }


    }

    return (

        // principal
        <div className='relative overflow-hidden'>
            {/* slideShow */}
            <div ref={sliderBar} className='flex relative z-1 '>
                {images && images.map((e, i) => (
                    // slide
                    <div key={i} className=' 
                        min-w-full overflow-hidden z-1 relative
                        transition-all ease-out '>
                        {/* imgen */}
                        <div className='max-h-[500px] min-w-full flex items-center'>
                            <img className='w-full h-full z-1' src={e} alt="" />
                        </div>
                        {/* text */}
                        <div className='absolute bottom-0 top-0 w-full z-2
                            bg-slate-900 text-white bg-opacity-50  
                            flex flex-col justify-center items-center text-center px-[2%]'>
                            <p className='w-4/6 text-2xl font-bold  mb-10'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <button className='border px-2 rounded-md'>ver mas</button>
                        </div>
                    </div>
                ))}
                {/* buttoms */}

            </div>
            <div className='
                    pointer-events-none
                    w-full flex justify-between
                    absolute bottom-0 top-0 z-2'> {/*  */}
                <button onClick={() => handlers(false)} className='pointer-events-auto w-1/6'>{"<"}</button>
                <button onClick={() => handlers(true)} className='pointer-events-auto w-1/6'>{">"}</button>
            </div>
        </div>
    )
}
