import React, { useState, useEffect } from "react";
import { TableContainer, SubContainer, Button, Paragraph } from "./style";
import CovidApiService from "../../services/covidApi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ModalComponent from "../Modal";
import CountryInfo from "../CountryInfo";
import Loading from "../Loading";

export default function Table() {
  const countRows = 10;
  const [countries, setCountries] = useState({});
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(countRows);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState(0);
  const [show, setShow] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const headers = [
    "Codigo",
    "Paìs",
    "Continente",
    "Casos",
    "Recuperados",
    "Muertos",
  ];

  useEffect(() => {
    getCases();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setSelectedCountry(data);
    setShow(true);
  };

  const getCases = async () => {
    await CovidApiService.getCases().then((res) => {
      if (res.status) {
        setCountries(res.data);
        const getCountPages = Math.floor(
          Object.keys(res.data).length / countRows
        );
        setCountPages(getCountPages);
      } else {
        alert("Internal error");
      }
      setLoading(false);
    });
  };

  const getHeaders = () => {
    return headers.map((header, i) => {
      return <th key={`header: ${i}`}>{header}</th>;
    });
  };

  const changePreviousPage = () => {
    setPrevious(previous - countRows);
    setNext(next - countRows);
    setPage(page - 1);
  };

  const changeNextPage = () => {
    setPrevious(previous + countRows);
    setNext(next + countRows);
    setPage(page + 1);
  };

  const getDataForCountry = () => {
    return Object.entries(countries)
      .slice(previous, next)
      .map(([key, value]) => {
        let countryData = value.All;
        countryData.country = key;
        return (
          <tr key={key} onClick={() => handleShow(countryData)}>
            <td>{getValue(countryData.abbreviation)}</td>
            <td>{getValue(key)}</td>
            <td>{getValue(countryData.continent)}</td>
            <td>{getValue(countryData.confirmed)}</td>
            <td>{getValue(countryData.recovered)}</td>
            <td>{getValue(countryData.deaths)}</td>
          </tr>
        );
      });
  };

  const getValue = (value) => {
    if (value) {
      return value;
    } else {
      return "-";
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TableContainer className="demo">
            <thead>
              <tr>{getHeaders()}</tr>
            </thead>
            <tbody>
              {getDataForCountry()}
              <tr>
                <td colSpan="6">
                  <SubContainer>
                    <Paragraph>
                      Pagina: {page}/{countPages}
                    </Paragraph>
                    {previous > 0 && (
                      <Button onClick={changePreviousPage}>
                        <IoIosArrowBack />
                      </Button>
                    )}
                    {page < countPages && (
                      <Button onClick={changeNextPage}>
                        <IoIosArrowForward />
                      </Button>
                    )}
                  </SubContainer>
                </td>
              </tr>
            </tbody>
          </TableContainer>
          <ModalComponent
            title="COVID 19 en:"
            handleClose={handleClose}
            show={show}
          >
            <CountryInfo data={selectedCountry} />
          </ModalComponent>
        </>
      )}
    </>
  );
}
