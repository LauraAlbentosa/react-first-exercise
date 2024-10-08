const FarhenheitToCelsius = ({farh}) =>
{
    const celsius = (farh - 32) / 1.8;

    return <h2>La temperatura en celsius es: {celsius}</h2>;
};

export default FarhenheitToCelsius;