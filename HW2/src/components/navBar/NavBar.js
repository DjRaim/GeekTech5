import { Link,NavLink } from "react-router-dom"
export default function NavBar(){
    return(
        <ul style={{display:'flex', listStyleType:'none'}}>
            <li style={{marginRight:'15px'}}>
                <NavLink
                    to="/"
                    state={"hello"}
                    className={({isActive})=>isActive && 'active'}
                >MainPage</NavLink>
            </li>
            <li>
                <NavLink to="/about">AboutPage</NavLink>
            </li>
            <li style={{marginLeft:'15px'}}>
                <NavLink to="/portfolio">Portfolio Page</NavLink>
            </li>
            <li style={{marginLeft:'15px'}}>
                <NavLink to="/newpage">New Page</NavLink>
            </li>
            <li style={{marginLeft:'15px'}}>
                <NavLink to='/users'>Users Page</NavLink>
            </li>
            <li style={{marginLeft:'15px'}}>
                <NavLink to='/photo'>Photo Page</NavLink>
            </li>
        </ul>
    )
}
