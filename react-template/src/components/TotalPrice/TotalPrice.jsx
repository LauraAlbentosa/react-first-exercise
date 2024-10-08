const TotalPrice = ({price}) =>
{
    let finalPrice = price;

    finalPrice += (21 * price) / 100;

    return <h2>El precio más el IVA es: {finalPrice}</h2>;
};

export default TotalPrice;