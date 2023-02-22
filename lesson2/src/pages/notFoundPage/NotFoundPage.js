import {Link} from "react-router-dom";



export default function NotFoundPage () {
    return (
        <>
            <h2>404: page not found</h2>
            <Link to="/users">go to home</Link>
        </>
    )
}