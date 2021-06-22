import React, { useState, useEffect } from "react";
import { TableContainer, SubContainer, Button, Paragraph } from "./style";
import CovidApi from "../../services/covidApi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ModalCountry from '../Modal';

export default function Table() {
  const [countries, setCountries] = useState({});
  const [previous, setPrevious] = useState(0);
  const [countRows, setCountRows] = useState(10);
  const [next, setNext] = useState(countRows);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState(0);
  const [show, setShow] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
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
    setSelectedCountry(data)
    setShow(true);
  }

  const getCases = async () => {
    await CovidApi.getCases().then((res) => {
      if (res.status) {
        setCountries(res.data);
        const getCountPages = Math.floor(
          Object.keys(res.data).length / countRows
        );
        setCountPages(getCountPages);
      } else {
        alert("Internal error");
      }
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
        const countryData = value.All;
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
    if(value){
      return value;
    } else {
      return '-';
    }
  }

  return (
    <>
    <TableContainer class="demo">
      <thead>
        <tr>{getHeaders()}</tr>
      </thead>
      <tbody>
        {getDataForCountry()}
        <tr>
          <td colspan="6">
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
    <ModalCountry data={selectedCountry} handleClose={handleClose} show={show}/>
    </>
  );
}
