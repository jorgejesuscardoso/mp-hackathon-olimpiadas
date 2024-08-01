import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import LayOut from './components/layout/LayOut'
import EventsCards from './pages/events/Events'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LayOut />} >
        <Route index element={<Home />} />
        <Route path="/events" element={<EventsCards />} />
      </Route>
    </Routes>
  )
}

export default App
