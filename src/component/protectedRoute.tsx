import { ReactNode } from "react"
import { Navigate } from "react-router"

type ButtonProps = {
    children: ReactNode;

}
const ProtectedRoute = ({ children, ...user }: ButtonProps) => {
    return user ? children : <Navigate to="/"></Navigate>





}

export default ProtectedRoute