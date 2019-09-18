let lat = ""
let lng = ""

$("#addressForm").on("submit", function(event) {
    event.preventDefault();
    $("#addresLocation").empty();
    $("#map").empty();

  
    const key = "G3w5wY8BZGgo9lwNEdX00o8Wvnb1xAf6";
    const address = $("#addres").val().trim();
    const queryUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${key}&inFormat=kvp&outFormat=json&location=${address}&thumbMaps=false`


    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(response => {
        const result = response.results[0].locations[0].latLng;
        console.log(result)

        lat = result.lat
        lng = result.lng
        $("#addresLocation").append(`
            <hr>
                <p>The coordinates of ${address} are</p>
            <br>
                <p>Latitude: ${result.lat}</p> 
            <br>
                <p>Longitude: ${result.lng}</p>
        `);
        
        const queryUrl2 = `https://open.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${lat},${lng}&size=250,250@2x`
        
        $.ajax({
            url: queryUrl2,
            method: "GET"
        }).then(response => {

            console.log("MAP " + response)
            console.log(queryUrl2)
            $("#map").append(`
                <img src="${queryUrl2}">
            `);
        })

        getLocation()
    })


})


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        $("#currentLocationDisplay").text("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    $("currentLocationDisplay").empty();


    $("#currentLocationDisplay").append(`
        <br>
        <p>Latitude: ${position.coords.latitude} </p> 
        <br>
        <p>Longitude: ${position.coords.longitude}</p>
    `);
}
