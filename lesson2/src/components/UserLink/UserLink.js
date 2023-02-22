import {Link} from "react-router-dom";


export function UserLink ({userInfo}) {
    return (
        <>
            <h5>name: {userInfo.name}</h5>
            <Link to={`/users/${userInfo.id}`}>more info</Link>
            <p>--------------------------------</p>
        </>
    )

}