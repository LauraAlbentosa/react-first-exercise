import React from 'react';
import SayHello from "./components/SayHello/SayHello";
import CalculateSquareArea from "./components/CalculateSquareArea/CalculateSquareArea";
import CalculateTriangleArea from "./components/CalculateTriangleArea/CalculateTriangleArea";
import CalculateCircleArea from './components/CalculateCircleArea/CalculateCircleArea';
import CelsiusToFahrenheit from './components/CelsiusToFahrenheit/CelsiusToFahrenheit';
import FarhenheitToCelsius from './components/FahrenheitToCelsius/FahrenheitToCelsius';
import TotalPrice from './components/TotalPrice/TotalPrice';
import WriteMessage from './components/WriteMessage/WriteMessage';


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