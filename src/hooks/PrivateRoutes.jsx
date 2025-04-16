import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom";


const useAuth = ()=>{
    const [authstate, setauthstate] = useState({ isLoggedin: false, role: "" })
    const [loading, setloading] = useState(true)

    useEffect(()=>{
        const id = localStorage.getItem("id")
        const role = localStorage.getItem("role")

        if(id){
            setauthstate({ isLoggedin: true, role })
        }
        setloading(false);

    },[]);

    return{...authstate,loading}
} 

const PrivateRoutes = ()=>{
    const auth = useAuth();

    if(auth.loading){
        return <h1>loading..</h1>;
    }

    return auth.isLoggedin ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>
}
export default PrivateRoutes;