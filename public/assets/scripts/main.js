let searchLat = "";
let searchLng = "";

let currentLat = "";
let currentLng = "";

const key = "G3w5wY8BZGgo9lwNEdX00o8Wvnb1xAf6";


$("#addressForm").on("submit", function(event) {
    event.preventDefault();
    $("#addresLocation").empty();
    $("#map").empty();
    const address = $("#addres").val().trim();
    const queryUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${key}&inFormat=kvp&outFormat=json&location=${address}&thumbMaps=false`

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(response => {
        const result = response.results[0].locations[0].latLng;

        searchLat = result.lat
        searchLng = result.lng
        $("#addresLocation").append(`
            <hr><p>The coordinates of ${address} are</p>
            <br><p>Latitude: ${result.lat}</p> 
            <br><p>Longitude: ${result.lng}</p>
        `);
        
        const queryUrl2 = `https://open.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${searchLat},${searchLng}&size=250,250@2x`;
        
        $.ajax({
            url: queryUrl2,
            method: "GET"
        }).then(response => {

            $("#map").append(`
                <img src="${queryUrl2}">
            `);
            getLocation();
          });
    });
});


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        $("#currentLocationDisplay").text("Geolocation is not supported by this browser.");
    };
};
function showPosition(position) {
    $("#currentLocationDisplay").empty();
    currentLat = position.coords.latitude;
    currentLng = position.coords.longitude;

    const distanceFromLat = Math.abs(currentLat - searchLat) 
    const distanceFromLng = Math.abs(currentLng - searchLng)
    console.log(distanceFromLat + " : " + distanceFromLng)
    if (distanceFromLat <= 0.001 && distanceFromLng <= 0.001) {
         alert("YOUR HERE")
    };

    $("#currentLocationDisplay").append(`
        <br><p>Latitude: ${currentLat} </p> 
        <br><p>Longitude: ${currentLng}</p>
    `);
};


