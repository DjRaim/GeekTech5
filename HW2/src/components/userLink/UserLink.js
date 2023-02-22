import { Link } from "react-router-dom";

export default function UserLink({userInfo}){

    return(
        <>
            <h5>Name: {userInfo.name}</h5>
            <Link to={`/users/${userInfo.id}`}>more info</Link>
            <p>----------------------------</p>
        </>
    )
}