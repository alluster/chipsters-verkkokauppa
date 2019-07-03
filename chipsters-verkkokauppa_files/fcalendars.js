/**
 * The purpose is add cssClass to a calendar, if if date is in specialDays
 * @param specialDays json dict of dates
 * @param date date to verify if is in specialDays
 * @param cssClass class to be added
 * @returns {Array} refer to http://jqueryui.com/demos/datepicker/
 */
function highlightCalendar(specialDays, date) {
	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();
	
	if (specialDays[y] && specialDays[y][m] && specialDays[y][m][d]) {            
		var styleClass = specialDays[y][m][d];                
		return [ true, styleClass, '' ];
	}
	
	return [ false, '' ]; // no change
}

/**
 * Binds the event beforeShowDay to every calendar found
 */
function bindEventsHighlights() {
    jQuery(".hasDatepicker").datepicker("option", "beforeShowDay", function (date) {
        return highlightCalendar(specialDays, date);
    });
}


