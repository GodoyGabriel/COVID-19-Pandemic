import React, { useEffect, useState } from "react";
import CovidApiService from "../../services/covidApi";
import { Container, SubContainer, Title, Paragraph } from "./style";
import DataGraphic from "../DataGraphic";
import Loading from "../Loading";

export default function CountryInfo(props) {
  const { data } = props;
  const [vaccinesInfo, setVaccinesInfo] = useState(null);
  //const [historyCountry, setHistoryCountry] = useState(null);
  const [graphicSelected, setgraphicSelected] = useState("cases");
  const [labelsGraphic, setLabelsGraphic] = useState([
    "Contagiados",
    "Recuperados",
    "Muertos",
  ]);
  const [dataToGraphic, setDataToGraphic] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      getData();
    }
  }, [data]);

  const getData = async () => {
    await getVaccinesInfo();
    //await getHistoryCountry();
    await setDataToGraphic([data.confirmed, data.recovered, data.deaths]);
    setLoading(false);
  };

  const getVaccinesInfo = async () => {
    await CovidApiService.getVaccinesInfo(data.country).then((res) => {
      if (res.status) {
        setVaccinesInfo(res.data);
      }
    });
  };

  /*   const getHistoryCountry = async () => {
    const body = { country: data.country, status: "deaths" };
    await CovidApiService.getHistory(body).then((res) => {
      if (res.status) {
        setHistoryCountry(res.data);
      }
    });
  }; */

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
          0,
        ]);
        break;
      default:
        break;
    }
    setgraphicSelected(selected);
  };

  const addDefaultSrc = (ev) => {
    ev.target.src = "/assets/images/errorFlag.png";
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SubContainer className="contentContainer">
            <SubContainer className="imageContainer">
              <img
                src={`https://www.countryflags.io/${data.abbreviation}/shiny/64.png`}
                alt={data.country}
                onError={addDefaultSrc}
              />
            </SubContainer>
            <SubContainer className="dataContainer">
              <Title title={data.country}>{data.country}</Title>
              <Paragraph>
                Población:{" "}
                <strong>
                  {data.population || "Información no proporcionada"}
                </strong>
              </Paragraph>
              <Paragraph>
                Casos cada 100.000 habitantes:
                <strong>{(data.confirmed / 100000).toFixed(2)}%</strong>
              </Paragraph>
              <a
                href={`https://www.google.com/maps/dir/?api=1&origin=${data.country}`}
                target="_blank"
                rel="noreferrer"
              >
                Ver en ubicación en Google Maps
              </a>
            </SubContainer>
          </SubContainer>
          <SubContainer className="graphicContainer">
          <SubContainer className="buttonsContainer">
            <input
              type="button"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onClick={() => changeGraphic("cases")}
              className={graphicSelected === "cases" && "active"}
              value="Casos"
            />
            <input
              type="button"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onClick={() => changeGraphic("vaccines")}
              className={graphicSelected === "vaccines" && "active"}
              disabled={!vaccinesInfo}
              value="Vacunas"
            />
          </SubContainer>
          <SubContainer className="graphicData">
            {labelsGraphic.length > 0 && dataToGraphic.length > 0 && (
              <DataGraphic labels={labelsGraphic} data={dataToGraphic} />
            )}
          </SubContainer>
          </SubContainer>
        </>
      )}
    </Container>
  );
}
