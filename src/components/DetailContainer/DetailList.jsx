import { ItemDetailContainer } from './ItemDetailContainer'



export const DetailItemList = ({ productos = [] }) => {

   return (
      <div className="row">
         {productos.map((prod) => <ItemDetailContainer producto={prod} key={prod.id} />)}
      </div>
   )
}