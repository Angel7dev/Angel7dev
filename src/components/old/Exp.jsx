import { useSelector } from 'react-redux'

const Index = () => {
  const exp = useSelector(e => e.portfolio.Exp)
  const displayContent = (e) => {
    return { __html: e }
  }

  return (
    <>
      <div className="container flex justify-center md:mx-auto  md:mt-16">
        <div className="md:my-12 mt-12">
          <h1 className="text-gray-50 text-5xl text-center ">Experience:</h1>
        </div>
      </div>

      <div className="md:mx-36 my-16" id="exp">
        <ol className="relative border-l-4 border-gray-200 md:px-4 mx-2">

          {exp ? exp.map((i) =>
            <li className="mb-10 ml-4 group">
              <div className="absolute w-5 h-5 bg-gray-200 rounded-full mt-1.5 -left-1 border-2 border-gray-900  group-hover:bg-sky-700"></div>
              <h3 className="text-xl font-semibold ">{i.my_title}</h3>
              <a href={i.web} target="_blank" rel="noreferrer" className="underline mb-1 text-lg font-normal leading-none ">
                <p>
                  {i.place}
                </p>
              </a>
              <time className="mb-1 text-sm font-normal leading-none ">( {i.init_date} - {i.end_date !== null ? i.end_date : "present"} )</time>
              <p dangerouslySetInnerHTML={displayContent(i.description)} className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400" />

              {/* <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
            </li>
          )
            :
            <svg className="animate-spin h-20 w-20 mx-auto my-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          }


        </ol>


      </div>

    </>

  )
}

export default Index
