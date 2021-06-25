import React, { useEffect, useState } from "react";
import CovidApiService from "../../services/covidApi";
import { Container, SubContainer } from "./style";
import DataGraphic from "../DataGraphic";
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

export default function CountryInfo(props) {
  const { data } = props;
  const [vaccinesInfo, setVaccinesInfo] = useState(null);
  const [historyCountry, setHistoryCountry] = useState(null);
  const [graphicSelected, setgraphicSelected] = useState("cases");
  const [labelsGraphic, setLabelsGraphic] = useState([
    "Contagiados",
    "Recuperados",
    "Muertos",
  ]);
  const [dataToGraphic, setDataToGraphic] = useState([]);

  useEffect(() => {
    if (data) {
      console.log(`data`, data);
      getVaccinesInfo();
      getHistoryCountry();
      setDataToGraphic([data.confirmed, data.recovered, data.deaths]);
    }
  }, [data]);

  const getVaccinesInfo = async () => {
    await CovidApiService.getVaccinesInfo(data.country).then((res) => {
      if (res.status) {
        setVaccinesInfo(res.data);
      }
    });
  };

  const getHistoryCountry = async () => {
    const body = {country: data.country, status: "deaths"}
    await CovidApiService.getHistory(body).then((res) => {
      if (res.status) {
        setHistoryCountry(res.data);
      }
    });
  };

  const changeGraphic = (selected) => {
    switch (selected) {
      case "cases":
        setLabelsGraphic(["Contagiados", "Recuperados", "Muertos"]);
        setDataToGraphic([data.confirmed, data.recovered, data.deaths]);
        break;
      case "vaccines":
        setLabelsGraphic([
          "Vacunas disponibles",
          "Personas vacunadas totalmente",
          "Personas vacunadas parcialmente",
          `Población vacunada: ${vaccinesInfo.life_expectancy}%`,
        ]);
        setDataToGraphic([
          vaccinesInfo.administered,
          vaccinesInfo.people_vaccinated,
          vaccinesInfo.people_partially_vaccinated,
          0
        ]);
        break;
      default:
        break;
    }
    setgraphicSelected(selected);
  };

  if (!data) {
    return null;
  }

  return (
    <Container>
      <SubContainer className="contentContainer">
        <SubContainer className="imageContainer">
          <img
            src={`https://www.countryflags.io/${data.abbreviation}/shiny/64.png`}
            alt={data.country}
          />
        </SubContainer>
        <SubContainer className="dataContainer">{data.country}</SubContainer>
        <SubContainer className="dataContainer">
          Población: {data.population}
        </SubContainer>
        <SubContainer className="dataContainer">
          Casos cada 100.000 habitantes: {Math.floor(data.confirmed / 100000)}
        </SubContainer>
        <SubContainer className="dataContainer">
        <a href={`https://www.google.com/maps/dir/?api=1&origin=${data.country}`} target="_blank">Ver en ubicación en Google Maps</a>
        </SubContainer>
      </SubContainer>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onClick={() => changeGraphic("cases")}
          checked={graphicSelected === "cases"}
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Casos
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onClick={() => changeGraphic("vaccines")}
          checked={graphicSelected === "vaccines"}
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Vacunas
        </label>
      </div>
      <SubContainer className="graphicContainer">
        {labelsGraphic.length > 0 && dataToGraphic.length > 0 && (
          <DataGraphic labels={labelsGraphic} data={dataToGraphic} />
        )}
      </SubContainer>
    </Container>
  );
}
