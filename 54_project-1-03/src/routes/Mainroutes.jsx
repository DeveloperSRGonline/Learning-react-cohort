import { Route, Routes } from 'react-router-dom'
import Recipes from '../pages/Recipes'
import Home from '../pages/Home'
import About from '../pages/About'
import Create from '../pages/Create'
import RecipeDetail from '../pages/RecipeDetail'
import Favourite from '../pages/Favourite'
import NotFound from '../pages/NotFound'



const Mainroutes = () => {
  return (
    <Routes>
        <Route path='*' element={<NotFound />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/recipes' element={<Recipes />}/>
        <Route path='/recipes/details/:id' element={<RecipeDetail />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/favourite' element={<Favourite />}/>
    </Routes>
  )
}

export default Mainroutes