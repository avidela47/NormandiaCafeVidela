import './Cart.scss'
import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import { FaTrashAlt } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartEmpty } from './CartEmpty';
import { Link } from 'react-router-dom'

export const Cart = () => {

  const { carrito, carritoTotal, vaciarCarrito, eliminarProducto } = useCartContext()

  if (carrito.length === 0) {
    return (
          <>
          <CartEmpty />
          </>
    )
  }

  return (

    <div className=' carritoc container my-5'>
      <h2 className='h2c'>Tu compra</h2>
      <hr />
      { carrito.map((producto) => (
          <div className='carrito' key={producto.id}>
            <Card.Img variant="top" src={producto.img} className="cardimgc" alt="React Bootstrap logo" />
            <Card.Body className='cardb'>
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text>Origen: {producto.origen}</Card.Text>
              <Card.Text>Grano: {producto.grano}</Card.Text>
              <Card.Text>Tratamiento: {producto.tipo}</Card.Text>
              <Card.Text>Cantidad: {producto.cantidad}</Card.Text>
              <Card.Text>Precio x unidad: $ {producto.precio}</Card.Text>
              <Button onClick={() => eliminarProducto(producto.id)} className='btnr btn btn-outline-light'><FaTrashAlt /></Button>
              <hr></hr>
            </Card.Body>
          </div>
        ))}
      <h4 className='h4t'>Total compra: ${carritoTotal()}</h4>
      <Link className='btnp btn btn-outline-primary' to='/checkout'>Checkout</Link>
      <button onClick={vaciarCarrito} className='btnc btn btn-outline-primary'>Vaciar carrito</button>
    </div>
  )
}

