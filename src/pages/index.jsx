import Home from '../components/home'
import { getExpAction, getProjectsAction, getSkillsAction, getLayoutProjectsAction} from '../redux/actions/portfolio'
import { useDispatch} from 'react-redux'
import { useEffect } from 'react'
function Index() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getExpAction())
    dispatch(getProjectsAction())
    dispatch(getSkillsAction())
    dispatch(getLayoutProjectsAction())
  })
  return <Home/>
}


export default Index


