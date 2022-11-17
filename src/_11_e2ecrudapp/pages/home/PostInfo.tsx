// Home imports
import { PostInfoType } from "./Home";

// Hooks imports
import { useEffect, useState } from "react";

// Firestore database imports
import { dbDriver } from "../../config/firebaseActual";
import { addDoc, collection, getDocs, query, where, doc, deleteDoc } from "firebase/firestore";

// User authenticated imports
import { auth } from "../../config/firebaseActual";
import { useAuthState } from "react-firebase-hooks/auth";

// Schemas
interface Like {
  postId: string;
  userId: string;
}

// Component
interface Args {
  postInfo: PostInfoType;
}
export const PostInfo = ({ postInfo }: Args): JSX.Element => {
  // Current user
  const [currentUser] = useAuthState(auth);

  // Like hooks initialization
  const [likes, setLikes] = useState<Like[]>([]);
  useEffect(() => {
    // Get data from DB
    const getLikesHdle = async () => {
      const data = await getDocs(collection(dbDriver, "likes"));
      const formattedData = data.docs.map((doc) => doc.data() as Like);
      setLikes(formattedData);
    };

    // Launch get
    getLikesHdle();
  }, []);

  // Likes info initialization
  const nbLikes = likes.length;
  const isAlreadyLiked = likes.find((x) => x.userId === currentUser?.uid) === undefined;

  // Handler for liking
  const hdleLike = async () => {
    try {
      // Launch DB add like
      const like = { postId: postInfo.postId, userId: currentUser?.uid } as Like;
      await addDoc(collection(dbDriver, "likes"), like);

      // Update page
      setLikes([...likes, like]);
    } catch (err) {
      alert(err);
    }
  };

  // Handler for unliking
  const hdleUnlike = async () => {
    try {
      // Retrieve Ids to delete
      const likeToDeleteQuery = query(
        collection(dbDriver, "likes"),
        where("postId", "==", postInfo.postId),
        where("userId", "==", currentUser?.uid)
      );
      const likeToDeleteId = (await getDocs(likeToDeleteQuery)).docs[0].id; // Suppose one element otherwise exception

      // Launch delete
      const likeToDeleteDoc = doc(dbDriver, "likes", likeToDeleteId);
      await deleteDoc(likeToDeleteDoc);

      // Update page
      const upToDateLike = likes.filter((x) => x.postId === postInfo.postId && x.userId === currentUser?.uid);
      setLikes(upToDateLike);
    } catch (err) {
      alert(err);
    }
  };

  // Render
  return (
    <div>
      <h1>{postInfo.title}</h1>
      <p>{postInfo.description}</p>
      <p>@ {postInfo.userName}</p>
      <p>At {postInfo.createdAt}</p>
      {isAlreadyLiked ? <button onClick={hdleLike}>👍</button> : <button onClick={hdleUnlike}>👎</button>}
      {nbLikes !== 0 && <p>Likes: {nbLikes}</p>}
    </div>
  );
};
