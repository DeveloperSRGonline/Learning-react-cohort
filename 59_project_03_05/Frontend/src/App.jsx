import MainRoutes from "./routes/MainRoutes"
import Navbar from '../src/components/Navbar'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { currentUser } from "./store/userActions"
import { asyncGetAllProducts } from "./store/productActions"
const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentUser())
    dispatch(asyncGetAllProducts())
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