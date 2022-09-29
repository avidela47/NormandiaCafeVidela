import { NavbarContainer } from '../components/Navbar/Navbar';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { Footer } from '../components/Footer/Footer';
import { ItemDetailContainer } from '../components/DetailContainer/ItemDetailContainer';
import { Newsletter } from '../components/Newsletter/Newsletter';
import { Cart } from '../components/Cart/Cart';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Checkout } from '../components/Checkout/Checkout';

export const PrivateRoutes = () => {

    return (
        <>
            <NavbarContainer />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/newsletter' element={<Newsletter />} />
                <Route path='/origen/:origenId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/carrito' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>
    )
}
