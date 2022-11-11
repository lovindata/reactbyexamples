import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App(): JSX.Element {
  // Render
  return (
    <div className="App">
      <RegistrationForm />
    </div>
  );
}

// Registration form 👇
const RegistrationForm = (): JSX.Element => {
  // Form schema ⚠️👇
  const schemaYop = yup.object().shape({
    username: yup.string().required(), // 👈 Required includes not empty string
    email: yup.string().email().required(),
    age: yup.number().integer().min(12).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(), // ⚠️ To reference an existing key in itself object
  });

  // Form ⚠️👇
  // `register` -> For receiving data from a `form`
  // `handleSubmit` -> Called function to execute `onSubmit`
  // `formState` -> Current `formState`
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schemaYop), // ⚠️ From Yop to React
  });

  // Render
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {/* ⚠️👇 Bind an input of form to the `register` from `useForm` hook */}
      <input type="text" placeholder="Username" {...register("username")} />
      {/* 👇 If error then message (`_.?` <- to check if `null`) */}
      <p>{formState.errors.username?.message}</p>

      <input type="text" placeholder="Email" {...register("email")} />
      <p>{formState.errors.email?.message}</p>

      <input type="number" placeholder="Age" {...register("age")} />
      <p>{formState.errors.age?.message}</p>

      <input type="password" placeholder="Password" {...register("password")} />
      <p>{formState.errors.password?.message}</p>

      <input
        type="password"
        placeholder="Confirm password"
        {...register("confirmPassword")}
      />
      <p>{formState.errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default App;
