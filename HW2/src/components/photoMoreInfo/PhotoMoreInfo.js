import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PhotoMoreInfo() {
    const {id}=useParams()
    const [photo,setPhoto]=useState({})
    const [loader,setLoader]=useState(false)
    const [error,setError]=useState('')
    const getPhotoMoreInfo=async()=>{
        try {
            setLoader(true)
            const response=await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            if (response.status>=200 && response.status<=204) {

                const photoResponse=await response.json()
                setPhoto(photoResponse)

            }else{
                throw `error: ${response.status}`
            }
        } catch (error) {
            setError(error)
            setPhoto({})

        }finally{
            setLoader(false)
        }

    }
    useEffect(()=>{
        getPhotoMoreInfo()
    },[])
    return (
        <>
            {
                loader
                    ?
                    <h3>loading..</h3>
                    :
                    error
                        ?
                        <h3>{error}</h3>
                        :
                        <img src={photo.url} style={{width:'200px'}}/>
            }
        </>
    )
}

export default PhotoMoreInfo