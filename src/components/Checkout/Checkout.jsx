import "./Checkout.scss";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { Navigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../Firebase/FirebaseConfig";
import { Link } from "react-router-dom"
import { useForm } from "../Hooks/useForm";



export const Checkout = () => {

  const { carrito, carritoTotal, setCarrito } = useCartContext()

  const [orderId, setOrderId] = useState(null)

  const { values, handleInputChange } = useForm({
    nombre: '',
    num_tarjeta: '',
    vencimiento: '',
    cvc: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const orden = {
      comprador: values,
      item: carrito,
      total: carritoTotal()
    }

    if (values.nombre.length < 3) {
      alert("Ingrasa tu Nombre")
      return
    }
  
    if (values.num_tarjeta.length < 16) {
      alert("Ingrasa tu numero de tarjeta")
      return
    }

    if (values.vencimiento.length < 2) {
      alert("Fecha incorrecta")
      return
    }

    if (values.cvc.length < 3) {
      alert("Codigo incorrecto")
      return
    }

    const ordenesRef = collection(db, 'ordenes')


    addDoc(ordenesRef, orden)
      .then((doc) => {
        setOrderId(doc.id)
        setCarrito([])
      })
  }

  

  if (orderId) {
    return (
      <div className="form container my-5">
        <h2 className="h2cc">Gracias por tu compra!!!</h2>
        <hr />
        <p className="po">Tu numero de orden es: <strong>{orderId}</strong></p>
        <Link className='btnccc btn btn-outline-success' to='/'>Seguir comprando</Link>
      </div>
    )
  }

  if (carrito.length === 0) {
    return <Navigate to='/' />
  }

  return (
    <div className="container my-5">
      <h2 className="h2c">Checkout</h2>
      <hr />
      <form onSubmit={handleSubmit} className="formc container py-5">
        <input
          name='nombre'
          onChange={handleInputChange}
          value={values.nombre}
          type={"text"}
          className="formcc form-contol my-2"
          placeholder="Nombre"
        />
        <input
          name='num_tarjeta'
          onChange={handleInputChange}
          value={values.num_tarjeta}
          type={"text"}
          maxLength="16"
          className="formcc form-contol my-2"
          placeholder="Numero de tarjeta"
        />
        <input
          name='vencimiento'
          onChange={handleInputChange}
          value={values.vencimiento}
          type={"date"}
          maxLength="5"
          className="formccc form-contol my-2"
          placeholder="Expiración"
        />
        <input
          name='cvc'
          onChange={handleInputChange}
          value={values.cvc}
          type={"text"}
          maxLength="3"
          className="formccc form-contol my-2"
          placeholder="CVC"
        />
        <button className=" btnf btn btn-dark btn-sm" type="submit">
          Pagar
        </button>
      </form>
    </div>
  );
};
