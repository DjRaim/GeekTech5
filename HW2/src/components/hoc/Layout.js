import {Outlet} from "react-router-dom";
import NavBar from "../navBar/NavBar";



function Layout ({children}) {
    return (

        <>
            <NavBar/>


            <Outlet/>
            <footer>
                this is footer
            </footer>
        </>
    )
}

export default Layout;