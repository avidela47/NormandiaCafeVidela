import './ItemListContainer.scss'
import { Loader } from '../Loader/Loader'
import { useProductos } from '../Hooks/useProductos'
import { ItemList } from '../ItemListContainer/ItemList'


export const ItemListContainer = () => {

   const { productos, loading } = useProductos()


   return (

      <div>
         {
            loading
               ? <Loader />
               : <ItemList productos={productos} />
         }
      </div>
   )
}
