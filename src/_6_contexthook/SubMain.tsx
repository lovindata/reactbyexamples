import { useContext } from "react";
import { AppContext, IAppContext } from "./App";

export const SubMain = (): JSX.Element => {
  // Unwrap the username in `AppContext` 👇
  const { username } = useContext(AppContext) as IAppContext;

  // Render
  return <h1> Hey "{username}"! </h1>;
};
