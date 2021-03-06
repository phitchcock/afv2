$(document).ready(function() {
  
  // capture input
	
		
    	$("#map").empty();

      document.addEventListener('deviceready', initializeMap, false);  

      // get data
    	var url = "https://outdoor-data-api.herokuapp.com/api.json?api_key=946447205338f498e49d36d1adc07822&lat=" + lat + "&lon=" + lng + "&radius=15&callback=?";
      //outdoor-data-api.herokuapp.com/api.json?api_key=4016165acc967a9800153c77a3528d83&q[city_cont]='+location_value+'&radius=15&callback=?'


		$.getJSON(url, function(data) {

			console.log(data);

      // loop through data
			$.each(data.places, function(index, activity){

  				 trail =  "<div <div class='col-xs-24 col-sm-12'>" +
                    "<div class='thumbnail'>" +
                    
                    "<div class='caption'>" +
                    "<h4>" + activity.name + "</h4>" +
                    "<h4>" + activity.city + "</h4>" +
                    "<h4>Description:</h4>" +
                    "<p>" + activity.description + "</p>" +
                    "<h4>Directions</h4>" +
                    "<p>" + activity.directions + "</p>" +
                    "<p>" + activity.lat + "</p>" +
                    "<p>" + activity.lon + "</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                    
  				$("#trails").append(trail);

  		}); // end each
		}); // end getJSON
	
}); // end ready function