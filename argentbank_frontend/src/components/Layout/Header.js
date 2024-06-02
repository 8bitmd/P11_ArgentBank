import {Link, useLocation, useNavigate} from "react-router-dom";
import logo from "../../assets/argentBankLogo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {useSelector, useDispatch} from "react-redux";
import {logoutUser} from "../../features/authActions";

export default function Header() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/signin";

    const username = useSelector(state => state.auth.userName);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutUser(navigate, from));
    };

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <nav className="main-nav">
            <Link to={"/"}>
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div className={"r-header"}>
                <p>{isAuthenticated ? username : null}</p>
                <Link onClick={isAuthenticated ? handleLogout : null} className="main-nav-item" to="/signin">
                    <FontAwesomeIcon icon={faCircleUser}/>
                    {isAuthenticated ? "Sign out" : "Sign In"}
                </Link>
            </div>
        </nav>
    )
}