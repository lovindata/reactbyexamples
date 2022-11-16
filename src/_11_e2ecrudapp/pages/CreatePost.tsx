// Form handling related imports
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Firestore related imports
import { dbDriver } from "../config/firebaseActual";
import { addDoc, collection } from "firebase/firestore";

// Google authentication imports
import { auth } from "../config/firebaseActual";
import { useAuthState } from "react-firebase-hooks/auth";

// Routing imports
import { useNavigate } from "react-router-dom";

// Component
export const CreatePost = (): JSX.Element => {
  // Schema logic
  interface PostType {
    title: string;
    description: string;
  }
  const postSch = yup.object().shape({
    title: yup.string().required("Please add a title to your post."),
    description: yup.string(),
  });

  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostType>({
    resolver: yupResolver(postSch),
  });
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // Handlers
  const hdlePost = async (postData: PostType) => {
    // Build the current timestamp UTC
    const createdAt: string = new Date().toISOString();

    // Send the data
    await addDoc(collection(dbDriver, "posts"), {
      ...postData,
      userName: user?.displayName,
      userId: user?.uid,
      createdAt: createdAt,
    });

    // Return to home page
    navigate("/");
  };

  // Render
  return (
    <div>
      <form onSubmit={handleSubmit(hdlePost)}>
        <input type="text" placeholder="Title" {...register("title")}></input>
        <p>{errors.title?.message}</p>
        <textarea placeholder="Description" {...register("description")}></textarea>
        <p>{errors.description?.message}</p>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};
