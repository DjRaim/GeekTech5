import { useEffect, useState } from "react"
import UserLink from "../../components/userLink/UserLink"

export default function UsersPage(){
    const [users,setUsers]=useState([])
    const [preloader,setPreloader]=useState(false)
    const [error,setError]=useState('')
    const getUsers=async()=>{
        try{
            setPreloader(true)
            const response=await fetch('https://jsonplaceholder.typicode.com/users')
            if(response.status>=200 && response.status<=204){
                const usersRespons=await response.json()
                setUsers(usersRespons)
            }
            else{
                throw `error: ${response.status}`
            }
        }catch(error){
            setError(error)
            setUsers([])
        }finally{
            setPreloader(false)
        }
    }
    useEffect(()=>{
        getUsers()
    },[])

    return(
        <>
            <h1>Users Page</h1>

            {
                preloader
                    ?
                    <div>loading...</div>
                    :
                    error
                        ?
                        <h3>{error}</h3>
                        :
                        users?.map(user=><UserLink key={user.id} userInfo={user}></UserLink>)
            }
        </>
    )
}