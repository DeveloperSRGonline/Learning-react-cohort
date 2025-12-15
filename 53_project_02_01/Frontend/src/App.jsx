import MainRoutes from "./routes/MainRoutes"
import Navbar from '../src/components/Navbar'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { asyncLogoutUser } from "./store/userActions"
const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncLogoutUser())
  },[])
  return (
    <div className='app'>
      <Navbar />
      <main>
        <MainRoutes />
      </main>
    </div>
  )
}

export default App