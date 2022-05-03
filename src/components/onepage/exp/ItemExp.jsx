import React from 'react'

const ItemExp = ({ i }) => {
  const displayContent = (e) => {
    return { __html: e }
  };

  return (
    <li className="mb-5" >
      <div className="flex group items-center ">
        <div className="bg-gray-800 group-hover:bg-sky-700 z-10 rounded-full border-4 border-black  h-5 w-5">
          <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
        </div>

        <div className="ml-4 font-medium">
          <div className="order-1 space-y-2 rounded-lg shadow-only transition-ease px-6 py-4">
            <h3 className=" mb-0 font-bold text-white text-2xl"> {i.title}</h3>
            <p className="pb-0  text-sm text-gray-300">
              <a className='hover:underline' href="#" target="_blank" >{i.team} </a>
              ( {i.init_date} - Present )</p>
            <hr />
            <p dangerouslySetInnerHTML={displayContent(i.description)} className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100"/>

          </div>
        </div>
      </div>
    </li>

  )
}

export default ItemExp