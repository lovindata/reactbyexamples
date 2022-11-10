import "./App.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Axios from "axios";
import { AxiosResponse } from "axios";

function App(): JSX.Element {
  // Query clients
  const clientOkRefresh = new QueryClient({
    defaultOptions: { queries: { refetchInterval: 1000 } }, // 👈 Client configuration (`refetchInterval` in ms)
  });
  const clientKoRefresh = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } }, // By default if switch focus then refresh
  });

  // Render
  return (
    <div className="App">
      {/* Delimiting client usage like this 👇 */}
      <QueryClientProvider client={clientOkRefresh}>
        <CatData />
      </QueryClientProvider>

      {/* Second delimitation 👇 */}
      <QueryClientProvider client={clientKoRefresh}>
        <ExcuseData />
      </QueryClientProvider>
    </div>
  );
}

// Component cat data
interface ICatData {
  fact: string;
  length: number;
}
const CatData = (): JSX.Element => {
  // Using client with `useQuery` hook 👇
  const { data, isLoading, isError, refetch } = useQuery<string>(
    ["idCat"],
    // 👇 `async` specify it returns a promise
    async (): Promise<string> => {
      // `await` To make an async blocking call 👇
      const res: AxiosResponse<ICatData, void> = await Axios.get(
        "https://catfact.ninja/fact"
      );
      return res.data.fact;
    }
  );

  // Render
  return (
    <div>
      <h1>CatData</h1>
      {/* Display only if is not loading & errored */}
      <p>{!isLoading && !isError ? data : "Loading or errored..."}</p>

      {/* 👇 Manual refresher using `refetch` returned from the hook */}
      <button onClick={() => refetch()}>Refresh cat data!</button>
    </div>
  );
};

// Component excuse data
type IExcuseData = { id: number; excuse: string }[];
const ExcuseData = (): JSX.Element => {
  // Using client
  const {
    data: excuseData,
    isLoading,
    isError,
    refetch,
  } = useQuery<string>(["idExcuse"], async (): Promise<string> => {
    const res: AxiosResponse<IExcuseData, void> = await Axios.get(
      "https://excuser.herokuapp.com/v1/excuse/family"
    );
    return res.data[0].excuse;
  });

  // Render
  return (
    <div>
      <h1>ExcuseData</h1>
      <p>{!isLoading && !isError ? excuseData : "Loading or errored..."}</p>
      <button onClick={() => refetch()}>Refresh excuse data!</button>
    </div>
  );
};

export default App;
