import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

const weatherdetails = ({ weatherReport }) => {
  let [
    lon,
    lat,
    weatherdiscription,
    temp,
    pressure,
    humidity,
    wind,
    country,
    city,
  ] = [
    weatherReport.coord.lon,
    weatherReport.coord.lat,
    weatherReport.weather[0].description,
    weatherReport.main.temp,
    weatherReport.main.pressure,
    weatherReport.main.humidity,
    weatherReport.wind.speed,
    weatherReport.sys.country,
    weatherReport.name,
  ];

  return (
    <div>
      <CardContent>
        <Box display="flex" flexDirection="row">
          <Box p={1}>
            <Typography variant="h2" color="textPrimary">
              {city},{country}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {lon}, {lat}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardContent>
        <Box display="flex" flexDirection="row-reverse">
          <Box p={0}>
            <Typography variant="h4" color="textPrimary">
              Temp: {temp}
              <span>&#176;</span>
              {"C"}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardContent>
        <Box display="flex" flexDirection="row-reverse">
          <Box p={0}>
            <Typography variant="h6" color="textSecondary">
              {weatherdiscription}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardContent>
        <Box display="flex" flexDirection="row">
          <Box p={1}>
            <Typography variant="h6" color="textPrimary">
              Humidity: {humidity} %
            </Typography>
          </Box>
          <Box p={1}>
            <Typography variant="h6" color="textPrimary">
              pressure: {pressure} pa
            </Typography>
          </Box>
          <Box p={1}>
            <Typography variant="h6" color="textPrimary">
              wind: {wind} km/h
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </div>
  );
};

export default weatherdetails;
