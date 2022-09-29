import { useContext, useState } from "react";
import { LoginContext } from "../../Context/LoginContext";
import "./Ingresa.scss";
export const Ingresa = () => {

  const { login, user } = useContext(LoginContext)
  
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePassChange = (e) => {
    setPass(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    login({
      email, pass
    })

  }

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit} className="form container py-5">
      <h3 className='h3n'>¡Registrate y comenzá a disfrutar!</h3>
        <input type={'email'}
          className="form form-contol my-2"
          value={email}
          onChange={handleEmailChange}
          placeholder='Ingresa tu email' />
        <input type={"password"}
          className="form form-contol my-2"
          value={pass}
          onChange={handlePassChange}
          placeholder='Ingresa tu password' />
        {user.error && <small>{user.error}</small>}
        <button className=" btnf btn btn-outline-success" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  )
}
