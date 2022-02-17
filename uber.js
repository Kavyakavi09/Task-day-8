

class UberFare{
	constructor(distance,pickupTime){
        this.distance = distance;
		this.pickupTime =pickupTime;
	}

	taxiFare(){
	var baseFare = 2.5;
	var costPerKM = 20.0;
	var nightSurcharge = 0.5; // 8pm to 6am, every night

	var cost = baseFare + costPerKM * this.distance;

	// add the nightSurcharge to the cost if it is after
	// 8pm or before 6am
	if (this.pickupTime >= 20 || this.pickupTime < 6) {
		cost += nightSurcharge;
	}

	return cost;
	}
}

let Uberfare = new UberFare(8,4);
console.log(Uberfare.taxiFare());
