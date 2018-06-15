$(document).ready(function(){
	var lati;
	var long;
	if (navigator.geolocation) {
	  	navigator.geolocation.getCurrentPosition(function(position) {
	    	//$("p").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
	    	lati = position.coords.latitude;
	    	long = position.coords.longitude;
	    	console.log(lati, long);

	    	$.ajax({
				url: "https://fcc-weather-api.glitch.me/api/current?lat=" + lati + "&lon=" + long,
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					console.log(data);
					//Background image set
					//bgImage(data.weather[0].main)
					show(data);
					//var weatherWidget = show(data);
					//$("#show").html(weatherWidget);
				}
		
			})
	  	});
	}	
});

function show(data){
	return 	$("#icon").attr("src", data.weather[0].icon) +
			$("#temperature").text(data.main.temp)+
			$("#address").text(data.name)+
			$("#sky").text(data.weather[0].main)+
			$("wind").text(data.wind.speed);
		 	/*"<h3><strong>Description</strong>: "+data.weather[0].description+"</h3>"; */
}

function bgImage(weather){
	if (weather === "Clouds") {
		$("body").css("background-image", "url(https://wallpaperscraft.com/image/height_mountains_slopes_pasture_cloudy_sky_storm_clouds_sheep_bad_weather_green_53263_1920x1200.jpg)");
	}
}