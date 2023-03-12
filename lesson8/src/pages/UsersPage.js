import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../store/usersSlice";
import User from "../components/User";




export default function () {
    const dispatch = useDispatch()
    const {users, error, loading} = useSelector(state => state.usersReducer)


    useEffect(() => {
        dispatch(getUsers())

    }, [])


    return (
        <>
            <h1>Users list</h1>

            {
                loading
                    ?
                        <p>loading...</p>
                    :
                    error
                        ?
                        <p>{error}</p>
                        :
                        users.map(user => <User user={user} key={user.id}/>)
            }
        </>
    )
}


