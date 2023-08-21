import AddUser from './pages/AddUser'
import AllUsers from './pages/AllUsers'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import UpdateUser from './pages/UpdateUser'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllUsers/>}></Route>
          <Route path='/create' element={<AddUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
