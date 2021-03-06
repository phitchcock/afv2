$(document).ready(function() {
  
  // capture input
	$("#trail-lookup").submit(function(e) {
		e.preventDefault();
    	$("#trails").empty(); 

      // get data
    	var location = $("#getCity").val(),
			url = "https://outdoor-data-api.herokuapp.com/api.json?api_key=946447205338f498e49d36d1adc07822&q[city_cont]="+ location +"&radius=15&callback=?";
      //outdoor-data-api.herokuapp.com/api.json?api_key=4016165acc967a9800153c77a3528d83&q[city_cont]='+location_value+'&radius=15&callback=?'


		$.getJSON(url, function(data) {

			console.log(data);

      // loop through data
			$.each(data.places, function(index, activity){

  				 trail =  "<div <div class='col-xs-24 col-sm-12'>" +
                    "<div class='panel panel-primary'>" +
                    "<div class='panel-heading'>" +
                    "<h3 class='panel-title'>" + activity.name + "</h3>" +
                    "</div>" +
                    "<div class='panel-body colortext'>" +
                    "<h4>City: " + activity.city + "</h4>" +
                    "<h4>Description:</h4>" +
                    "<p>" + activity.description + "</p>" +
                    "<h4>Directions</h4>" +
                    "<p>" + activity.directions + "</p>" +
                    "<p>" + activity.lat + "</p>" +
                    "<p>" + activity.lon + "</p>" +
                    "<button class='btn btn-primary'>Map Me!</button>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                    
  				$("#trails").append(trail);

  		}); // end each
		}); // end getJSON
	}); // end submit function
}); // end ready function