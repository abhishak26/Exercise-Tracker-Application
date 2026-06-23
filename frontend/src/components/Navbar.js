import { Link } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { user, dispatch } = useAuthContext();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

  return (
    <header>
        <div className="container">
                        <Link to={user ? "/" : "/login"}>
            <h1>Workout Buddy</h1>
            </Link>
                        {user && (
                            <div className="nav-actions">
                                <span className="nav-user">{user.email}</span>
                                <button type="button" className="nav-logout" onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        )}
        </div>
    </header>
    )
}

export default Navbar;