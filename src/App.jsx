import './App.css'
import { Informacion } from './components/Informacion'
import { Titulo } from './components/Titulo'
import { Footer } from './components/Footer'

function App() {
  return (
    <article className="componentes">
      <Informacion />
      <Titulo />
      <Footer />
    </article>
  )
}
export default App