import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsersPage from "./pages/usersPage/UsersPage";
import UserMoreInfo from "./components/userMoreInfo/UserMoreInfo";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/users/:id" element={<UserMoreInfo/>}/>

            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
