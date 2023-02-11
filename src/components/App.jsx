import { useRef } from 'react';
import AboveFold from './AboveFold'
import Divider from './Divider.jsx'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  const formRef = useRef(null)

  return (
    <div className="app">
      <AboveFold formRef={formRef}/>
      <Divider />
      <Skills />
      <Projects />
      <Contact formRef={formRef}/>
      <Footer />
    </div>
  )
}

export default App
