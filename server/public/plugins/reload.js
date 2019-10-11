var currentDate = new Date();
$(function() {
	$("#datepicker").dropdownDatepicker({
		allowFuture: false,
		minYear: 1900,
		daySuffixes: false,
		dayLabel: 'Day',
	    monthLabel: 'Month',
		yearLabel: 'Year'
	});
});