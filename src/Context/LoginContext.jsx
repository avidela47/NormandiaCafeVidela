import { createContext, useContext, useState } from "react";



export const LoginContext = createContext()

const usuarios = [
    {
        email: 'avidela@gmail.com',
        password: '1234',
        nombre: 'Ariel'
    },
    {
        email: 'clanusse@gmail.com',
        password: '1357',
        nombre: 'Conrrado'
    },
    {
        email: 'ldias@gmail.com',
        password: '2468',
        nombre: 'Lucia'
    },

]

export const LoginProvider = ({ children }) => {

    const [user, setUser] = useState({
        user:'',
        logged: '',
        error: ''
    })

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)

        if (match) {
            if (match.password === values.pass) {
                setUser({
                    user: match.email,
                    logged: true,
                    error: ''
                })
            } else {
                setUser({
                    user: '',
                    logged: false,
                    error: "Password incorrecto"
                })
            }
        } else {
            setUser({
                user: '',
                logged: false,
                error: "Email incorrecto"
            })
        }
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false,
            error: ''
        })
    }

    return (
        <LoginContext.Provider value={{ user, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}