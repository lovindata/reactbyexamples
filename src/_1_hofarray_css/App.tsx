import './App.css';
import { planets } from './Planets'; // 👈 Grapping variable from exported
import { PlanetDisplay } from './Planets'; // 👈 Grapping component from exported

function App(): JSX.Element {
  // 👇 Combining `HOF` (the `_.map` here) with imported component
  return (
    <div className="App">
      {planets.map((planet: { name: string, isGasPlanet: boolean }, _) => <PlanetDisplay name={planet.name} isGasPlanet={planet.isGasPlanet} />)}
    </div>
  );
};

export default App;
