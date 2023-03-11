import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhotosPage from './pages/photosPage/PhotosPage';
import PhotoPage from './pages/photoPage/PhotoPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PhotosPage/>}/>
                <Route path='/photo/:id' element={<PhotoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;