import Card from 'react-bootstrap/Card';
import { Count } from '../Count/VerMas'
import './ItemListContainer.scss'



export const List = ({ producto }) => {

   return (

      <Card className='card' style={{ width: '15rem' }}>
         <Card.Img className='cardimg' src={producto.img} />
         <Card.Body>
            <Card.Title className='cardt'>{producto.nombre}</Card.Title>
            <small className='cardo'>Origen: {producto.origen}</small>
            <Card.Text className='cardtx'>{producto.desc}</Card.Text>
            <small className="cardod">
               <strong>Stock:</strong> {producto.stock}
            </small>
            <Card.Text className='cardp'>${producto.precio2}</Card.Text>
            <small className="cardodd">
               {producto.promo}% OFF!!!
            </small>
            <hr></hr>
            {
               producto.stock > 0
                  ? <Count id={producto.id} />
                  : <p className='btns btn btn-outline-danger btn-sm'>Sin Stock</p>
            }
         </Card.Body>
      </Card>

   )
}
