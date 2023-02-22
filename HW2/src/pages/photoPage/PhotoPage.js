import { useEffect, useState } from "react"
import PhotoLink from "../../components/photoLink/PhotoLink"

function PhotoPage(){
    const [photos,setPhotos]=useState([])
    const [loader,setLoader]=useState(false)
    const [error,setError]=useState('')
    const getPhotos=async()=>{
        try {
            setLoader(true)
            const response=await fetch('https://jsonplaceholder.typicode.com/photos')
            if(response.status>=200 & response.status<=204){

                const photosResponse=await response.json()
                setPhotos(photosResponse)
            }else{
                throw `error: ${response.status}`
            }

        } catch (error) {
            setError(error)
            setPhotos([])
        }finally{
            setLoader(false)
        }
    }
    useEffect(()=>{
        getPhotos()
    },[])
    return (
        <>
            <ul>
                {
                    loader
                        ?
                        <h3>loading...</h3>
                        :
                        error
                            ?
                            <h3>{error}</h3>
                            :
                            photos?.map(photos=><PhotoLink key={photos.id} photoInfo={photos}/>)
                }
            </ul>
        </>
    )
}

export default PhotoPage