
let arr = [];

/*const geoTz = require("geo-tz");

	//console.log("Utilisation de geo-tz");

const raw = require("./citys.json");
let data = JSON.parse(JSON.stringify(raw));
let j = "";
let arr = [];
	// Structure
	// "country":
	// "name": 
	// "lat":
	// "lng":
data.forEach(d => {
	let tz = geoTz(d.lat, d.lng);
	let city = {
		country: d.country,
		name: d.name,
		lat: parseFloat(d.lat),
		lng: parseFloat(d.lng),
		time_zone_name: tz
	}
	arr.push(city);
	if (tz.length > 1) {
		console.log(d.name + " -> " + tz);
	}
	//if (tz.length == 0) {
	//	console.log(d.name + " NO TIMEZONE");
	///j = d.name + " - " + d.country + " - " + tz + " \n" + j;
});
*/
//value / offset / arr(utc)
const raw = require("./timezones.json");
let data = JSON.parse(JSON.stringify(raw));
data.forEach(d => {
	let utc_tz = {
		text: d.value,
		offset: d.offset,
		utc: d.utch
	}
	arr.push(utc_tz);
	console.log(d);
});
let data_final = JSON.stringify(arr);
console.log(data_final);
