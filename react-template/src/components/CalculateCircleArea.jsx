const CalculateCircleArea = ({radius}) => 
{
    const area = Math.PI * Math.pow(radius, 2);

    return <h2>El áre del círculo es: {area}</h2>;
};

export default CalculateCircleArea;