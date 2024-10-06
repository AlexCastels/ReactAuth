import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export function AdminPrivateRoute({children}){

    const auth = useSelector((state) => state.userState.isAdmin)
    
    return auth ? children : <Navigate to='/login'/>
}