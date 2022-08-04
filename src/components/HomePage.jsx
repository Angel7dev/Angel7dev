import Contact from './Contact'
import Me from './Home/Me';
import Skills from './Home/Skills';
import Footer from './Footer';
import Navbar from './Navbar';
import Projects from './Home/Projects';
import LayoutProjects from './Home/LayoutProjects';


const Home = () => {


  return <>
    <Navbar />
    <Me />
    <Skills />
    <LayoutProjects/>
    <Projects />
    <Contact />
    <Footer />
  </>


}

export default Home