
$(document).ready(function(){
	$('button').click(function(){
		const city= $('#nameid').val();
		$.getJSON(
			"http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=4855bec11e1a785d5ac5e6438d2b280f",
			function(data){
				console.log(data); 
				var icon = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
				var temp = "Temp :-  "+Math.floor(data.main.temp)+"&deg;";
				var weather ="Condition :- "+data.weather[0].main;
				$('.icon').attr('src',icon);
				$('.weather').append(weather);
				$('.temp').append(temp);
				icon=0;
				temp=0;
				weather=0;
			}
		);
	});
});