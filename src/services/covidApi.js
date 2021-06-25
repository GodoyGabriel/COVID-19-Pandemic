import http from "axios";

const uriCovidApi = "https://covid-api.mmediagroup.fr";
export default class CovidApi {
  static async getCases() {
    let response = { status: true };
    await http
      .get(`${uriCovidApi}/v1/cases`)
      .then((res) => {
        response.data = res.data;
      })
      .catch((err) => {
        response.status = false;
        response.data = err;
      });
    return response;
  }

  static async getHistory({ country, status }) {
    let response = { status: true };
    await http
      .get(`${uriCovidApi}/v1/history?country=${country}&status=${status}`)
      .then((res) => {
        response.data = res.data.All;
      })
      .catch((err) => {
        response.status = false;
        response.data = err;
      });
    return response;
  }

  static async getVaccinesInfo(country) {
    let response = { status: true };
    await http
      .get(`${uriCovidApi}/v1/vaccines?country=${country}`)
      .then((res) => {
        response.data = res.data.All;
      })
      .catch((err) => {
        response.status = false;
        response.data = err;
      });
    return response;
  }
}
