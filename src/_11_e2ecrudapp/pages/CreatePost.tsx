import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

  // Logic hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostType>({
    resolver: yupResolver(postSch),
  });
  const hdlePost = (postData: PostType) => {
    console.log(postData);
    // ⚠️ TODO continue here for database persistency (https://youtu.be/qzea8B4uwbg?list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&t=1557)
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
