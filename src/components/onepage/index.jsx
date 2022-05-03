import Header from './Header'
import Layout from '../Layout';
import Contact from './Contact';
import Exp from './exp';
import Projects from './projects';

import Skills from './skills';

// import AddExpForm from './onepage/AddExpForm'


const Home = () => {
  return (
    <Layout className='h-full'>
      <Header/>
      <div className="container flex flex-col mx-auto m-2 md:m-auto">

        <Exp />

        <div className="mx-36">
          <hr />
        </div>
        <Projects />
        <div className="mx-36">
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