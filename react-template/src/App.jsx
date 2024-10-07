import SayHello from "./components/SayHello";

const App = () =>  {
  return (
    <div>
      <SayHello />
      <h1>Calculadora de Area</h1>
      <calculateSquareArea side={3} />
    </div>
  );
}

export default App;