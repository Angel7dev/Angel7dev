import Carrusel2 from './carrusel/Carrusel2'
import Layout from './Layout';



// import AddExpForm from './onepage/AddExpForm'


const Home = () => {

  const images = [
    'images/gallery/00.jpg',
    'images/gallery/01.jpg',
    'images/gallery/02.jpg',
]

  return (
    <Layout className='h-full'>
      <Carrusel2 images={images} />

    </Layout>
  )
}

export default Home