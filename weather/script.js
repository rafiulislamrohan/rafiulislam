const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5205d766ebmsh500ca57e26f75e5p1f84c4jsn6a56100380d9",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather =  (city) => {

  cityName.innerHTML = city ;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= " + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloudpct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2h.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      winddegrees2.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;

    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});


// getWeather(prompt( " Enter Your City :-"));

//  for Shanghai

const ShanghaiGetWeather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai ",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      

      shanghaicloudpct.innerHTML = response.cloud_pct;
      shanghaifeels_like.innerHTML = response.feels_like;
      shanghaihumidity.innerHTML = response.humidity;
      shanghaimax_temp.innerHTML = response.max_temp;
      shanghaimin_temp.innerHTML = response.min_temp;
      shanghaisunrise.innerHTML = response.sunrise;
      shanghaisunset.innerHTML = response.sunset;
      shanghaitemp.innerHTML = response.temp;
      shanghaiwind_degrees.innerHTML = response.wind_degrees;
      shanghaiwind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

ShanghaiGetWeather("Shanghai");

//  for Boston

const BostonGetWeather = (city) => {
  
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston ",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      

      bostoncloudpct.innerHTML = response.cloud_pct;
      bostonfeels_like.innerHTML = response.feels_like;
      bostonhumidity.innerHTML = response.humidity;
      bostonmax_temp.innerHTML = response.max_temp;
      bostonmin_temp.innerHTML = response.min_temp;
      bostonsunrise.innerHTML = response.sunrise;
      bostonsunset.innerHTML = response.sunset;
      bostontemp.innerHTML = response.temp;
      bostonwind_degrees.innerHTML = response.wind_degrees;
      bostonwind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

BostonGetWeather("Boston");

//for lucknow

const lucknowGetWeather = (city) => {
 
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow ",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      

      lucknowcloudpct.innerHTML = response.cloud_pct;
      lucknowfeels_like.innerHTML = response.feels_like;
      lucknowhumidity.innerHTML = response.humidity;
      lucknowmax_temp.innerHTML = response.max_temp;
      lucknowmin_temp.innerHTML = response.min_temp;
      lucknowsunrise.innerHTML = response.sunrise;
      lucknowsunset.innerHTML = response.sunset;
      lucknowtemp.innerHTML = response.temp;
      lucknowwind_degrees.innerHTML = response.wind_degrees;
      lucknowwind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

lucknowGetWeather("lucknow");

//for Kolkata

const KolkataGetWeather = (city) => {
 
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata ",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      

      Kolkatacloudpct.innerHTML = response.cloud_pct;
      Kolkatafeels_like.innerHTML = response.feels_like;
      Kolkatahumidity.innerHTML = response.humidity;
      Kolkatamax_temp.innerHTML = response.max_temp;
      Kolkatamin_temp.innerHTML = response.min_temp;
      Kolkatasunrise.innerHTML = response.sunrise;
      Kolkatasunset.innerHTML = response.sunset;
      Kolkatatemp.innerHTML = response.temp;
      Kolkatawind_degrees.innerHTML = response.wind_degrees;
      Kolkatawind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

KolkataGetWeather("Kolkata");



//  for Dhaka

const DhakaGetWeather = (city) => {
  
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dhaka ",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

    

      Dhakacloudpct.innerHTML = response.cloud_pct;
      Dhakafeels_like.innerHTML = response.feels_like;
      Dhakahumidity.innerHTML = response.humidity;
      Dhakamax_temp.innerHTML = response.max_temp;
      Dhakamin_temp.innerHTML = response.min_temp;
      Dhakasunrise.innerHTML = response.sunrise;
      Dhakasunset.innerHTML = response.sunset;
      Dhakatemp.innerHTML = response.temp;
      Dhakawind_degrees.innerHTML = response.wind_degrees;
      Dhakawind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

DhakaGetWeather("Dhaka");



//  for Canada

const CanadaGetWeather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Canada ",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

     

      Canadacloudpct.innerHTML = response.cloud_pct;
      Canadafeels_like.innerHTML = response.feels_like;
      Canadahumidity.innerHTML = response.humidity;
      Canadamax_temp.innerHTML = response.max_temp;
      Canadamin_temp.innerHTML = response.min_temp;
      Canadasunrise.innerHTML = response.sunrise;
      Canadasunset.innerHTML = response.sunset;
      Canadatemp.innerHTML = response.temp;
      Canadawind_degrees.innerHTML = response.wind_degrees;
      Canadawind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

CanadaGetWeather("Canada");
