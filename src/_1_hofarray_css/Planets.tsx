// Exportable variable
export const planets: { name: string, isGasPlanet: boolean }[] = [
  { name: "Mars", isGasPlanet: false },
  { name: "Earth", isGasPlanet: false },
  { name: "Jupyter", isGasPlanet: true },
  { name: "Venus", isGasPlanet: false },
  { name: "Neptune", isGasPlanet: true },
  { name: "Uranus", isGasPlanet: true }
];

// Planet component
interface PlanetDisplayArgs {
  name: string,
  isGasPlanet: boolean
};
export const PlanetDisplay = (props: PlanetDisplayArgs): JSX.Element => {
  return (
    // Dynamic CSS json inside TSX 👇
    <div>
      <h1 style={!props.isGasPlanet ? {color: "red"} : {color: "green"}}> {props.name} </h1>
    </div>
  )
};