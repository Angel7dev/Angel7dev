import Carrusel2 from './carrusel/Carrusel2'
import Contact from './Contact'
import Servic from './Services'
import Layout from './Layout';
import Me from './Home/Me';
import SkillsExp from './Home/Skills';


// import AddExpForm from './onepage/AddExpForm'


const Home = () => {

  const items = [
    {
      name: 'Diseño web',
      image: 'images/gallery/00.jpg',
    },
    {
      name: 'Desarrollo backend',
      image: 'images/gallery/01.jpg',
    },
    {
      name: 'Desarrollo frontend',
      image: 'images/gallery/02.jpg',
    },

  ]

  return (
    <Layout>
        <Carrusel2 items={items} />
        <Me/>
        <SkillsExp/>
        <Contact/>
    </Layout>
  )
}

export default Home