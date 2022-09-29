import './ItemDetailContainer.scss'
import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'
import { Loader } from '../Loader/Loader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Firebase/FirebaseConfig'


export const ItemDetailContainer = () => {
   
   const [producto, setProducto] = useState(null)
   const [loading, setLoading] = useState(true)

   const { itemId } = useParams ()

      useEffect(() => {
         setLoading(true)

         const docRef = doc(db, 'productos', itemId)

         getDoc(docRef)
            .then((doc) => {
               setProducto({ id: doc.id, ...doc.data() })
         })
            .finally(() => {
               setLoading(false)
            })
   }, [itemId])

   
   return (
      <div>
         {
            loading
            ? <Loader />
            : <ItemDetail producto={producto} />
         }
         
      </div>
   )
}