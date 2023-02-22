import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


export default function UserMoreInfo() {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [preloader, setPreloader] = useState(false);
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const getUserMoreInfo = async () => {
        try {
            setPreloader(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (response.status >= 200 && response.status <= 204) {
                const userResponse = await response.json()
                setUser(userResponse)
                return
            }

            throw `Error ${response.status}: user not found`

        } catch (error) {
            setError(error);
            setUser({})
        } finally {
            setPreloader(false)
        }

    }
    useEffect(() => {
        getUserMoreInfo()
    }, [])

    return (
        <>
            <button onClick={() => navigate(-1)}>go to back</button>
            {
                preloader
                    ?
                    <div>loading...</div>
                    :
                    error
                        ?
                        <h5>{error}</h5>
                        :
                        <>
                            <h5>name: {user?.name}</h5>
                            <p>username: {user?.username}</p>
                            <p>email: {user?.email}</p>
                            <p>website: {user?.website}</p>
                            <p>phone: {user?.phone}</p>
                        </>
            }
        </>
    )
}



