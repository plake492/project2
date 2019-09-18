var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: " G3w5wY8BZGgo9lwNEdX00o8Wvnb1xAf6"
};

var geocoder = NodeGeocoder(options);

// Format the address using process.argv
var address = process.argv.slice(2).join(" ");

// Log the address we built
console.log("Searching for " + address);

// Then use the geocoder object to search the address
geocoder.geocode(address, function(err, data) {

  // Then console log the result and stringify it.
  // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(data, null, 2));
});
