// Authentication imports
import { auth, provider } from "../config/firebaseActual";
import { signInWithPopup } from "firebase/auth";

// Routing imports
import { useNavigate } from "react-router-dom";

// Component
export const Login = (): JSX.Element => {
  // Hooks
  const navigate = useNavigate();

  // Display popup for authentication & Go back to "/"
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    navigate("/");
  };

  // Render
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};
