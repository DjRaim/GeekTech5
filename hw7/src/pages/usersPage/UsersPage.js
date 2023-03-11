import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../store/photosSlice";
import {User} from "../../components/User";
import {useEffect} from "react";


export default function UsersPage() {
    const dispatch = useDispatch();

    const {users} = useSelector(state => state.usersReducer)
    const getUserFn = () => {
        dispatch(getUsers)
    }

    useEffect(() => {
        getUserFn()
    }, [])


    return (
        <>
            {users.map(user => <User key={user.id} user={user}/>)}
        </>
    )
}