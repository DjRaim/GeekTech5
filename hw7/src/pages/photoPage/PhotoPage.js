import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPhoto } from "../../store/photosSlice"



export default function PhotoPage() {

    const dispatch = useDispatch()

    const  { id } = useParams()

    const { photo, preloader} = useSelector( state => state.photosReducer)

    useEffect(() => {
        dispatch(getPhoto(id))
    }, [])

    return (
        <>
            {preloader
                ?
                <h2>loading...</h2>
                :
                <>
                    <h1>{photo.title}</h1>
                    <div >
                        <img style={{width: '500px', height: '500px'}} src={photo.url}/>
                    </div>
                </>
            }
        </>
    )
}