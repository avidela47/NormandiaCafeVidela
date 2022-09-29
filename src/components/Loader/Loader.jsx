import Spinner  from "react-bootstrap/Spinner"
import './Loader.scss'


export const Loader = () => {

   return(
        <div className="loader">
           <Spinner animation="grow" variant="warning"/>
        </div>
   )
}
