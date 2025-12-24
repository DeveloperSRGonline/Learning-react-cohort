import MainRoutes from "./routes/MainRoutes"
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { currentUser } from "./store/userActions"
import { asyncGetAllProducts } from "./store/productActions"
import { syncCartWithUser } from "./store/cartActions"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentUser())
    dispatch(asyncGetAllProducts())
    dispatch(syncCartWithUser())
  }, [])

  return (
    <div className='app'>
      <Navbar />
      <main>
        <MainRoutes />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
      />
    </div>
  )
}



export default App