import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseActual";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const NavBar = (): JSX.Element => {
  // Logic
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  // Render
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

      {/* Connected user information */}
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
