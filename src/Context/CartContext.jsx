import { createContext, useContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const eliminarProducto = (id) => {
        setCarrito(carrito.filter((producto) => producto.id !== id));
    };

    const estaEnCarrito = (id) => {
        return carrito.some((producto) => producto.id === id);
    };

    const carritoCantidad = () => {
        return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    };

    const carritoTotal = () => {
        return carrito.reduce(
            (acc, producto) => acc + producto.cantidad * producto.precio,
            0
        );
    };

    const vaciarCarrito = () => {
        Swal.fire({
            title: "Estas seguro?",
            text: "Estas a punto de vaciar el carrito!",
            icon: "warning",
            showCancelButton: true,
            background: "url(../assets/img/fondoPago.jpg)",
            confirmButtonColor: "rgba(255, 255, 255, 0.4)",
            cancelButtonColor: "rgba(255, 255, 255, 0.4)",
            confirmButtonText: "Si, vaciar!",
            cancelButtonText: "No, cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                setCarrito([])
            }
        })
    }

    const terminarCompra = () => {
       setCarrito([])
    }

    
    return (
        <CartContext.Provider
            value={{
                carrito,
                setCarrito,
                estaEnCarrito,
                agregarAlCarrito,
                carritoCantidad,
                carritoTotal,
                eliminarProducto,
                terminarCompra,
                vaciarCarrito,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
};
