import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export function PrivateRoute({children}){

    const auth = useSelector((state) => state.userState.session)
    
    return auth ? children : <Navigate to='/login'/>
}