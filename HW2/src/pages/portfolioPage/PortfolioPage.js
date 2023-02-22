import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

function PortfolioPage(props) {
    const navigate = useNavigate();

    const [photos, setPhotos] = useState([])
    const [update, setUpdate] = useState(false)
    const [images, setImages] = useState ({})

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => setPhotos(photos))
    }, [update])

    const getImagesId = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response => response.json())
            .then(images => setImages(images))
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>go to back</button>
            <h1>Portfolio Page</h1>
            <button onClick={() => setUpdate(!update)}>update</button>

            <div style={{display: 'flex'}}>
                <div>
                    {photos.slice(0, 10).map(images=> <div>
                        <img src={images.url} alt="" style={{width: '200px'}}/>
                        <p>{images.title}</p>
                        <button onClick={() => getImagesId(images.id)}>Узнать url фото</button>
                        <p>------------------------------</p>
                    </div>)}
                </div>

                <h2>
                    url фото: {images.url}
                </h2>


            </div>

        </div>
    );
}

export default PortfolioPage;