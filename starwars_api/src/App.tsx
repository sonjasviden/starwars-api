import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/App.scss'
import Layout from './components/Layout'
import Start from './pages/StartPage'
import People from './pages/PeoplePage'
import Films from './pages/FilmsPage'
import Person from './pages/PersonPage'
import Film from './pages/SingleFilmPage'
import NotFound from './pages/NotFound'
import Species from './pages/SpeciesPage'
import Specie from './pages/SingleSpeciePage'
import Planets from './pages/PlanetsPage'
import Planet from './pages/SinglePlanetPage'
import Starships from './pages/StarshipsPage'
import Starship from './pages/SingleStarship'
import Vehicles from './pages/VehiclesPage'
import Vehicle from './pages/SingleVehicle'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Start />} />
            <Route path="/films" element={<Films />} />
            <Route path="/films/:id" element={<Film />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<Person />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<Planet />} />
            <Route path="/species" element={<Species />} />
            <Route path="/species/:id" element={<Specie />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/starships/:id" element={<Starship />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<Vehicle />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
