import Projects from './Projects'
import LayoutProjects from './LayoutProjects'
import Skills from './Skills'
import Contact from '../Contact'

const Index = () => {
  return (
    <div>

      <p className='text-center mt-24 text-4xl mx-[25%]' >
        I am <span className='underline'>Angel Riera</span> I am a FullStack web developer specialized in Django and React
      </p>

      <Skills />
      <Projects />
      <LayoutProjects />

      <Contact/>

    </div>
  )
}
export default Index