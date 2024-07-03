import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const useAuth = (code) => {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    const navigate=useNavigate();

    useEffect(() => {
        axios
            .post("http://localhost:8080/login", {
                code,
            })
            .then(r => {
                console.log(r.data);
                setAccessToken(r.data.accessToken)
                setRefreshToken(r.data.refreshToken)
                setExpiresIn(r.data.expiresIn)
                window.history.pushState({}, null, "/"); //remove code from url
            })
            .catch((e) => {
                console.log(e);
                navigate('/login')
            })
    }, [code])

    // useEffect(() => {
    //     if (!refreshToken || !expiresIn) return
    //     const interval = setInterval(() => {
    //       axios
    //         .post("http://localhost:8080/refresh", {
    //           refreshToken,
    //         })
    //         .then(res => {
    //           setAccessToken(res.data.accessToken)
    //           setExpiresIn(res.data.expiresIn)
    //         })
    //         .catch(() => {
    //           window.location = "/"
    //         })
    //     }, (expiresIn - 60) * 1000)
    
    //     return () => clearInterval(interval)
    //   }, [refreshToken, expiresIn])
    
      return accessToken;
}

export default useAuth