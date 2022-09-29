import "./ItemDetailContainer.scss";
import Card from "react-bootstrap/Card";
import { DetailCount } from "../Count/DetailCount";
import { useState } from "react";
import { Select } from "../Select/Select"
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";



export const ItemDetail = ({ producto }) => {

  const { agregarAlCarrito, estaEnCarrito } = useCartContext()
 
  const [cantidad, setCantidad] = useState(1)
 
  const [tipo, setTipo] = useState(producto.tipos[0])

  if (producto.stock === 0) return <Navigate to='/'/>

  const handlerAgregar = () => {

    const productoEnCarrito = {

      id: producto.id,
      img: producto.img,
      nombre: producto.nombre,
      precio: producto.precio,
      origen: producto.origen,
      grano: producto.grano,
      tipo,
      cantidad
    }

    agregarAlCarrito(productoEnCarrito)
  }


  return (
    producto && (
      <div className="det">
        <Card.Img className="cardimgd" src={producto.img} />
        <Card className="cardd" style={{ width: "23rem" }}>
          <Card.Body className="dett">
            <Card.Title className="cardtd">{producto.nombre}</Card.Title>
            <br></br>
            <small className="cardod">
              <strong>Origen:</strong> {producto.origen}
            </small>
            <Card.Text className="cardtxd">{producto.desc}</Card.Text>
            <Card.Text className="cardtxd">
              <strong>Grano:</strong> {producto.grano}
            </Card.Text>
            <small className="cardod">
              <strong>Stock:</strong> {producto.stock}
            </small>
            <hr />
            {tipo && <Select options={producto.tipos} onSelect={setTipo} />}
            <small className="cardod">
              <strong><del>${producto.precio2}</del></strong>
            </small>
            <Card.Text className="cardpd">${producto.precio} x 1kg</Card.Text>
            {
              estaEnCarrito(producto.id)
                ? <Link to='/carrito' className="btn btn-outline-primary my-2">Terminar mi compra</Link>
                :
                <DetailCount
                  max={producto.stock}
                  counter={cantidad}
                  setCounter={setCantidad}
                  handleAgregar={handlerAgregar}
                />
            }
            <hr />
          </Card.Body>
        </Card>
        {producto.promo && <div className="promo"><Card.Text className="cardpp"><span>{producto.promo}%</span><br /><span>-</span><br /><span>OFF !!</span><br /></Card.Text></div>}
      </div>
    )
  );
};
