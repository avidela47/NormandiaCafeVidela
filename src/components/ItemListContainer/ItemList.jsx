import { List } from './List'



export const ItemList = ({ productos = [] }) => {

   return (
      <div className="row">
         <h1 className='tit'><strong>Más allá de tus expectativas.!!!</strong></h1>
         <hr className='hr' />
         {productos.map((prod) => <List producto={prod} key={prod.id} />)}
      </div>
   )
}
