const Me = () => {

    const feat = [
        {
            title: "Experience",
            sub_title: "+ 2 years practical with JavaScript and Python",
            // description: "mas de 2 Años de experiencia practiaca en el desasarrollo de aplicaciones con python y javascript",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.602 3.7c-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 3.321 0 5.97 2.117 5.97 6.167 0 3.555-1.949 6.833-2.383 7.833h-2.115c.392-1.536 2.499-4.366 2.499-7.842 0-5.153-5.867-4.985-7.369-2.458zm15.398 15.8c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z" 
            fill="#ffffff"
            /></svg>
        },
        {
            title: "Development Projects",
            sub_title: "+ 30 frontend and backend github repositories",
            // description: "",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.979 8l-.979-6h6.972c1.265 1.583 1.327 2 3.306 2h11.722l-.96 4h-2.04l.469-2h-9.191c-2.326 0-3.166-.612-4.278-2h-3.694l.694 4h-2.021zm22.021 2l-2 12h-20l-2-12h6.278l2.308-3 3.9 3h1.97l-1.429-1.097 1.465-1.903 3.9 3h5.608zm-2.331 2h-19.338l1.385 8h16.568l1.385-8z" 
            fill="#ffffff"
            /></svg>
        },
        {
            title: "Stack tegnologico",
            sub_title: "Conocimiento en mas de 15 herramientas de desarrollo",
            // description: "",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.979 8l-.979-6h6.972c1.265 1.583 1.327 2 3.306 2h11.722l-.96 4h-2.04l.469-2h-9.191c-2.326 0-3.166-.612-4.278-2h-3.694l.694 4h-2.021zm22.021 2l-2 12h-20l-2-12h6.278l2.308-3 3.9 3h1.97l-1.429-1.097 1.465-1.903 3.9 3h5.608zm-2.331 2h-19.338l1.385 8h16.568l1.385-8z" 
            fill="#ffffff"
            /></svg>
        },


    ]

    return (
        <div className='mb-24 mt-12 md:mt-24'>
            <p className='text-center mx-[10%] md:mx-[25%]' >
                I am <span className='underline'>Angel Riera</span> a FullStack web developer specialized in Django and React
            </p>

            <div className='flex justify-center w-full mx-auto px-3 sm:px-24 mt-8 w-[90%]'>
                <div className="w-full grid gap-5 md:gap-10 md:grid-cols-3">
                    {feat.map((e, i) => (
                            <div className='text-center px-2 py-5 rounded-3xl flex flex-col items-center border bg-indigo-800 w-full' >
                                <div className='w-12 h-12 border border-2 border-white bg-slate-700 flex justify-center items-center rounded-full'>
                                    {e.icon}
                                    
                                </div>
                                <span className='my-4 text-slate-300 underline underline-offset-1'>
                                    {e.title}
                                </span>
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