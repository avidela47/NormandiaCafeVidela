import { Link } from "react-router-dom"

export const CartEmpty = () => {

    return (

        <div className="container my-5">
            <h2 className='h2c'> Carrito vacio</h2>
            <hr />
            <Link className='btncc btn btn-outline-success' to='/'>Ir a productos</Link>
        </div>
    )
}
