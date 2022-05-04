import { lazy, Suspense } from 'react'

// import Exp from './Exp'
const Exp = lazy(() => import('./Item'))

import {useSelector } from 'react-redux'

const Index = () => {
  const arr = []
  arr.length  
  const exp = useSelector(e=>e.portfolio.Exp)

  return (
    <>
      <div className="container flex justify-center md:mx-auto  md:mt-16">
        <div className="md:my-12 mt-12">
          <h1 className="text-gray-50 text-5xl text-center ">Experience:</h1>
        </div>
      </div>

      <div className="md:mx-36 my-16" id="exp">
        <ol className="relative border-l-4 border-gray-200 md:px-4 mx-2">

          {exp.length > 0 ?  exp.map((i) =>
            <Suspense key={i.id} fallback={
              <svg className="animate-spin h-20 w-20 mx-auto my-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>

            }>
              {
                <Exp i={i} />
              }
            </Suspense>
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