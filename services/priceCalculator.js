const priceCalculator = (baseDistance, fixPrice, kmPrice, totalDistance) => {
    console.log("\n")
    console.log("Base Distance : ", baseDistance);
    console.log("Fixed Price : ", fixPrice);
    console.log("Price Per Kilometer : ", kmPrice);
    console.log("Total Distance : ", totalDistance);

    const basePriceInCents = fixPrice * 100;
    const extraDistance = totalDistance - baseDistance;
    const extraPriceInCents = extraDistance > 0 ? extraDistance * kmPrice *100: 0;
    const totalPrice = (basePriceInCents + extraPriceInCents)/100;
    return totalPrice;
}

module.exports = priceCalculator;

