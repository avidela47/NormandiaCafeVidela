import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../Firebase/FirebaseConfig"

export const useProductos = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
 
    const { origenId } = useParams()
 
    useEffect(() => {
       setLoading(true)
 
       const productosRef = collection(db, 'productos')
       const q = origenId
          ? query(productosRef, where('org', '==', origenId))
          : productosRef
       getDocs(q)
          .then((resp) => {
             const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
             setProductos(productosDB)
          })
          .finally(() => {
             setLoading(false)
          })
    }, [origenId])

    return({
        productos, loading
    })
}
