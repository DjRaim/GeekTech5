import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getPhotos } from "../../store/photosSlice"


export default function PhotosPage() {

    const dispatch = useDispatch()

    const { photos, preloader } = useSelector( state => state.photosReducer)

    useEffect(() => {
        dispatch(getPhotos())
    }, [])


    return (
        <>
            <h1>List of Photos</h1>
            { preloader
                ?
                <h2>loading...</h2>
                :
                photos.slice(0, 10).map( photo =>
                    <li key={photo.id}>
                        <Link to={`photo/${photo.id}`}>
                            {photo.title}
                        </Link>
                    </li>)
            }
        </>
    )
}