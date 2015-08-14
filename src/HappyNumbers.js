function HappyNumberChecker() {
	this.seen = [];
}

HappyNumberChecker.prototype.seen = []

HappyNumberChecker.prototype.isHappy = function(input) {
	if (typeof input !== "number" || input < 1) {  //detect integer
		return false
	}

	if (input === 1) {
		return true;
	}

	if (this.seen.indexOf(input) !== -1) {
		return false;
	}

	this.seen.push(input);

	var sumOfSquares = 0;
	while (input > 0) {
	    var digit = input % 10;
	    sumOfSquares += digit * digit;
	    input = (input / 10) | 0;
	}

	return this.isHappy(sumOfSquares);
};
