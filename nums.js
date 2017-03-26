// 100000 -> 100 000 // etc.
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

// round number to any precision
function roundIt(number, precision) {
    var factor = Math.pow(10, 0|precision);
	var tempNumber = number * factor;
	var roundedTempNumber = Math.round(tempNumber);
	return roundedTempNumber / factor;
}
