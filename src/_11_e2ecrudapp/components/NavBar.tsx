// Routing imports
import { Link, useNavigate } from "react-router-dom";

// Authentication imports
import { auth } from "../config/firebaseActual";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

// Component
export const NavBar = (): JSX.Element => {
  // Hooks
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // Handler for logout button
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  // Render navigation bar according if connected or not
  return (
    <div>
      {/* Default navigation bar */}
      <Link to="/">Home</Link>
      {!user ? (
        <>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          <Link to="/createpost">Create Post</Link>
        </>
      )}

      {/* Connected navigation bar (with user information) */}
      <div>
        {user && (
          <>
            <p> {user?.displayName} </p>
            <img src={user?.photoURL || ""} alt="" width="100" height="100" />
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};
