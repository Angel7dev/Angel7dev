import React from 'react'
import Header from './Header'
// import Contact from './onepage/Contact'
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Layout } from '../Layout';

// import AddExpForm from './onepage/AddExpForm'


const Home = () => {
  return (
    <Layout className='h-full'>
      <Header/>
      <div className="container flex flex-col mx-auto m-2 md:m-auto">

        {/* <Exp /> */}

        <div className="mx-36">
          <hr />
        </div>
        {/* <Projects /> */}
        <div className="mx-36">
          <hr />
        </div>
        {/* <Skills /> */}

        {/* <Knows/> */}
      </div>
      {/* <Contact /> */}
      
    </Layout>
  )
}

export default Home