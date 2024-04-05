import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const { isLoggedIn } = useSelector(store => store.login)
    const navigate = useNavigate();

    useEffect(() => {
     if(!isLoggedIn){
        toast.error('Please login to view cart details.')
        navigate('/login')
     }
    }, [isLoggedIn, navigate])

  return isLoggedIn ? children : null;
}

export default ProtectedRoute
