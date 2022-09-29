import { Routes, Route, Navigate } from "react-router-dom"
import { Ingresa } from '../components/Ingresa/Ingresa';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { NavbarContainer } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';


export const PublicRoutes = () => {

   return (
      <>
         <NavbarContainer />
         <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/login' element={<Ingresa />} />
            <Route path='*' element={<Navigate to="/login" />} />
         </Routes>
         <Footer />
      </>
   )
}
