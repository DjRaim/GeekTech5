import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";



    export function LoginPage () {
        const navigate = useNavigate()

    const login = () => {
        setTimeout(() => {
            navigate("/", {state: "user1522"})
        }, 3000)
    }

    return (
        <>
            <input type="text" placeholder="login"/>
            <input type="password" placeholder="password"/>
            <button onClick={login}>log in</button>
        </>
    )
}