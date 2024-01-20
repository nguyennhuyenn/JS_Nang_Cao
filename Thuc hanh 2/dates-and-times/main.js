let d;

// Get today's date and time
d = new Date(); console.log(d);

// Set to a string
d = d.toString(); console.log(d);

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
// Date('year', 'month', 'dates', 'hours', 'minutes', 'seconds')
d = new Date(2021, 0, 10, 12, 30, 0); console.log(d);

// Pass in a string
d = new Date('2021-07-10T12:30:00'); console.log(d);
d = new Date('07/10/2021 12:30:00'); console.log(d);
d = new Date('2022-07-11'); console.log(d);
d = new Date('07-11-2023'); console.log(d);
 
// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestamp
// lấy thời gian hiện tại dưới dạng số miligiây kể từ thời điểm 1 tháng 1 năm 1970
d = Date.now(); console.log(d);

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000); console.log(d);

// Get the timestamp of a specific date
d = new Date(); console.log(d);
d = d.getTime(); console.log(d);
d = d.valueOf(); console.log(d);
 
// Create a date from a timestamp
d = new Date(843983119284304); console.log(d);

