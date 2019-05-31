module.exports = function main(inputs) {
    // write your code here...
    const calculateKmFee = (km) => {
        if (km <= 2) {
            return 6;
        } else if (2 < km && km <= 8) {
            console.log(km);
            return 6 + (km - 2) * 0.8;
        } else if (km > 8) {
            console.log(km);
            return 10.8 + (km - 8.0) * 1.2;
        }
    };

    const calculateParkFee = (parkTime) => {
        return parkTime * 0.25
    };

    let price = Math.round(calculateKmFee(inputs.distance) + calculateParkFee(inputs.parkTime));

    return price;
};
