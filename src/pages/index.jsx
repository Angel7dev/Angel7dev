import Onepage from '../components/onepage'
import { getExpAction, getProjectsAction, getSkillsAction, getLayoutProjectsAction} from '../redux/actions/portfolio'
import { useDispatch} from 'react-redux'
import { useEffect } from 'react'


function Home() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getExpAction())
    dispatch(getProjectsAction())
    dispatch(getSkillsAction())
    dispatch(getLayoutProjectsAction())


    
  })


  return <Onepage/>
}


export default Home


