import './ItemCount.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const Count = ( {id} ) => {

  const [verMas, setVerMas] = useState(false)


  const handleVerMas = () => {
    setVerMas(!verMas)
  }


  return (
    <>
      <Link to={`/item/${id}`}>
        <button onClick={handleVerMas} className='btnt btn btn-outline-primary btn-sm'>{verMas}   Ver mas...
        </button>
      </Link>
    </>
  )
}
