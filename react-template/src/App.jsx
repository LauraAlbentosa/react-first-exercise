import React from 'react';
import SayHello from "./components/SayHello";
import CalculateSquareArea from "./components/CalculateSquareArea";
import CalculateTriangleArea from "./components/CalculateTriangleArea";
import CalculateCircleArea from './components/CalculateCircleArea';
import CelsiusToFahrenheit from './components/CelsiusToFahrenheit';
import FarhenheitToCelsius from './components/FahrenheitToCelsius';
import TotalPrice from './components/TotalPrice';
import WriteMessage from './components/WriteMessage';


const App = () =>  {
  return (
    <div>
      <SayHello name={"Ana"} />
      <CalculateSquareArea side={3} />
      <CalculateTriangleArea base={2} height={3} />
      <CalculateCircleArea radius={2} />
      <CelsiusToFahrenheit celsius={30} />
      <FarhenheitToCelsius farh={86} />
      <TotalPrice price={10} />
      <WriteMessage name={"Ana"} material={"madera"} size={"pequeña"} note={"Muchas gracias"} />
    </div>
  );
}

export default App;