import { Link } from "react-router-dom"

function PhotoLink({photoInfo}) {
    return (
        <>
            <Link to={`/photo/${photoInfo.id}`}>{photoInfo.title}</Link>
            <p>---------------------------------------------------------</p>
        </>
    )
}

export default PhotoLink
