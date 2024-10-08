const CelsiusToFahrenheit = ({celsius}) =>
{
    const farh = celsius * 1.8 + 32;

    return <h2>La temperatura en Farhenheit es: {farh}</h2>;
};

export default CelsiusToFahrenheit;