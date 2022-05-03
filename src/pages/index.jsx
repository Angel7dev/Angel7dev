import Onepage from '../components/onepage'
import { getExpAction, getProjectsAction, getSkillsAction } from '../redux/actions/portfolio'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


function Home() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getExpAction())
    dispatch(getProjectsAction())
    dispatch(getSkillsAction())
  })

  return <Onepage/>
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   // const res = await fetch(`https://.../data`)

//   const data = "await res.json()"

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default Home