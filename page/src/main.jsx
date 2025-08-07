import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'
import Fourth from './pages/Fourth'
import Fifth from './pages/Fifth'
import Sixth from './pages/Sixth'
import Seventh from './pages/Seventh'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<One />}> </Route>
      <Route path='/two' element={<Two />}> </Route>
      <Route path='/three' element={<Three />}> </Route>
      <Route path='/fourth' element={<Fourth />}> </Route>
      <Route path='/fifth' element={<Fifth />}> </Route>
      <Route path='/sixth' element={<Sixth />}> </Route>
      <Route path='/seventh' element={<Seventh />}> </Route>
      </Routes> 
  </BrowserRouter>
)
