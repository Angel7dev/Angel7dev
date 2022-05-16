import Image from "next/image";
import { useSelector } from "react-redux";

const LayoutProjects = () => {

    const images = [...Array(5).keys()];

    const layout = useSelector(e => e.portfolio.Layout_projects)
    console.log(layout)
    return (
        <div className="mx-[4rem] my-[10rem]">
            <div className="border-b mb-4 mx-[5%]">
                <h3 className="text-center text-[3rem] font-bold mb-10 underline leading-[4rem] mx-4">
                    Layout Projects
                </h3>
            </div>

            <div class='grid grid-cols-1 md:grid-cols-2'>
                {layout.map((e, i) => (
                    <div key={i} className='group relative w-auto flex h-full items-center justify-center flex-col mx-auto rounded-3xl'>
                        <Image width={500} height={250} src={e.image} alt={`images${i}`} className="" />
                        <div className='bg-gray-800 bg-opacity-10 hover:bg-opacity-70 absolute w-full h-full p-6'>
                            <div className='opacity-0 hover:opacity-100 hover:brightness-100 flex h-full items-center justify-center '>
                                <div className="flex justify-around space-x-[4rem]">
                                        <a className="z-3 px-6 py-2 mx-1 bg-gray-900 text-gray-200 border text-xs rounded hover:bg-gray-800"
                                            href={e.gitHub} target="__blank" >GitHub</a>

                                        <a className="px-6 py-2 mx-1 bg-gray-300 text-gray-900 text-xs rounded hover:bg-gray-400"
                                            href={e.live} target="__blank">Live</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LayoutProjects