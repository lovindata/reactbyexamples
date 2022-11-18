// Home import
import { PostInfo } from "./PostInfo";

// Firestore DB imports
import { getDocs, collection } from "firebase/firestore";
import { dbDriver } from "../../config/firebaseActual";

// React imports
import { useEffect, useState } from "react";

// Schema
export interface PostInfoType {
  title: string;
  description: string;
  userName: string;
  createdAt: string;
  postId: string;
}

// Component
export const Home = (): JSX.Element => {
  // Hooks
  const [postInfos, setPostInfos] = useState<PostInfoType[]>([]);
  useEffect(() => {
    // Get posts collection data from DB
    const getPostsHdle = async () => {
      const data = await getDocs(collection(dbDriver, "posts"));
      const formattedData: PostInfoType[] = data.docs.map((doc) => {
        return { ...doc.data(), postId: doc.id } as PostInfoType;
      });
      setPostInfos(formattedData);
    };

    // Launch get
    getPostsHdle();
  }, []); // `useEffect` only one time one first mount

  // Render
  return (
    <div>
      {postInfos.map((postInfo: PostInfoType, key) => (
        <div key={key}>
          <PostInfo postInfo={postInfo} />
        </div>
      ))}
    </div>
  );
};
