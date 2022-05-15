import Header from './Header'
import Layout from '../Layout';
import Contact from './Contact';
import Exp from './Exp';
import Projects from './Projects';

import Skills from './Skills';

// import AddExpForm from './onepage/AddExpForm'


const Home = () => {
  return (
    <Layout className='h-full'>
      <Header/>
      <div className="container flex flex-col mx-0 md:m-auto">

        <Exp />

        <div className="md:mx-36 mx-4">
          <hr />
        </div>
        <Projects />
        <div className="md:mx-36 mx-4">
          <hr />
        </div>
        <Skills />

        {/* <Knows/> */}
      </div>
      <Contact />
      
    </Layout>
  )
}

export default Home