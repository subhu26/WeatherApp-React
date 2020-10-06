/* eslint-disable no-undef */
import React, { useState } from "react";
import "./App.css";
import WeatherDetails from "./weatherdetails";
import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

function App() {
  const api = {
    key: "f9658dcb4c2241d3e32d452f2ca7e12c", //keys.API_KEY,
    base: "https://api.openweathermap.org/data/2.5/", //keys.BASE_URL,
  };
  const [inputValue, setInputValue] = useState("");
  const [weather, setWeather] = useState({});

  const fetchApi = (e) => {
    fetch(`${api.base}weather?q=${inputValue}&units=metric&APPID=${api.key}`)
      .then((Response) => Response.json())
      .then((result) => {
        setInputValue("");
        console.log(result);
        setWeather(result);
        //console.log(weather);
      });
  };

  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
        <AppBar title="My App" className="AppBar">
          <Typography variant="h4" color="textPrimary">
            My Weather{" "}
          </Typography>
        </AppBar>
        <br />
        <br />
        <div>
          <FormControl>
            <InputLabel htmlFor="component-simple">City Name </InputLabel>
            <Input
              required
              id="component-simple"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </FormControl>
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={fetchApi}
            type="submit"
          >
            Get Weather
          </Button>
          {typeof weather.main != "undefined" ? (
            <div>
              <WeatherDetails weatherReport={weather} />
            </div>
          ) : (
            ""
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
