import { useContext } from 'react'
import { FaTruck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {

    const { carritoCantidad } = useContext(CartContext)

   return(
       <Link className='truck' to='/carrito'>
        <FaTruck />
        <span>{carritoCantidad()}</span>
       </Link>
   )
}
