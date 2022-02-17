

var taxiFare = function (milesTraveled, pickupTime) {
	var baseFare = 2.5;
	var costPerKM = 20.0;
	var nightSurcharge = 0.5; // 8pm to 6am, every night

	var cost = baseFare + costPerKM * milesTraveled;

	// add the nightSurcharge to the cost if it is after
	// 8pm or before 6am
	if (pickupTime >= 20 || pickupTime < 6) {
		cost += nightSurcharge;
	}

	return cost;
};
// calculates taxi fare based upon miles traveled
// and the hour of the day in military time (0-23).
let tripCost = taxiFare(7, 4);
console.log(tripCost);
