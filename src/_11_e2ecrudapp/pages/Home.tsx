// Firestore DB imports
import { getDocs, collection, doc } from "firebase/firestore";
import { dbDriver } from "../config/firebaseActual";

// React imports
import { useEffect, useState } from "react";

// Component
export const Home = (): JSX.Element => {
  // Schema
  interface PostDisp {
    title: string;
    description: string;
    author: string;
    createdAt: string;
  }

  // Hooks
  const [postsDisp, setPostsDisp] = useState<PostDisp[]>([]);

  // Handlers
  const getPostsHdle = async () => {
    const data = await getDocs(collection(dbDriver, "posts"));
    console.log(data);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // const formattedData: PostDisp[] = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // TODO just here trying to continue on (https://youtu.be/skstYc-K6ws?list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&t=661)
  };
  useEffect(() => {
    getPostsHdle();
  }, []);

  // Render
  return (
    <div>
      {postsDisp.map((postDisp: PostDisp) => (
        <div>
          <h1>{postDisp.title}</h1>
          <p>{postDisp.description}</p>
          <p>{postDisp.author}</p>
          <p>{postDisp.createdAt}</p>
        </div>
      ))}
    </div>
  );
};
