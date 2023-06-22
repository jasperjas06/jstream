import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faBars,faUser, faTimes, faUnlock,faHome ,faLaptop,} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    const [click, setClick] = useState(false);
    let user = JSON?.parse(localStorage.getItem("Token")) || null
    let admin = user?.isAdmin;

    const logout = () => {
        localStorage.removeItem("Token");
        setClick(!click);
    }

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <span className="logo">
                        <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "1.4rem" }}>
                            {/* <span className="lo"> */}
                                {/* <img src="https://t4.ftcdn.net/jpg/01/83/14/31/240_F_183143188_qVOZj1mJklbv1idlH2LyHrV0BXCgnw7T.jpg" alt="img" style={{height:"50px"}} /> */}
                                {/* </span>tream */}
                                <i class="fa-regular fa-laptop"></i>
                                <span className="lo">Stream</span>
                        </Link>
                    </span>

                    <ul className={click ? "nav-menu active" : "nav-menu"} style={{ paddingLeft: 0 }}>
                        {admin &&
                            <li className="nav-item"  >
                                <Link
                                    to="/admin"
                                    className="nav-links"
                                >
                                    Admin <FontAwesomeIcon icon={faLaptop} />
                                </Link>
                            </li>}
                        {user ? <>

                            <li className="nav-item"  >
                                <Link
                                    to="/home"
                                    className="nav-links"
                                >
                                    Home <FontAwesomeIcon icon={faHome} />
                                </Link>
                            </li>

                            <li className="nav-item"  >
                                <Link
                                    to="/profile"
                                    className="nav-links"
                                >
                                    Profile <FontAwesomeIcon icon={faUser} />
                                </Link>
                            </li>

                            <li className="nav-item"   >
                                <Link
                                    to="/"
                                    style={{ color: "red" }}
                                    className="nav-links"
                                    onClick={logout}
                                >
                                    Logout <FontAwesomeIcon icon={faArrowRightFromBracket} color="red" />
                                </Link>
                            </li>
                            
                            </> : <>
                            
                            <li className="nav-item"  >
                                <Link
                                    to="/register"
                                    className="nav-links"
                                >
                                    Register <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                </Link>
                            </li>
                            <li className="nav-item"  >
                                <Link
                                    to="/login"
                                    className="nav-links"
                                >
                                    Login <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                </Link>
                            </li>
                        </>}
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar