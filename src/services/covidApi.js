import http from 'axios';

export default class CovidApi{
  static async getCases(){
    let response = {status: true};
    await http.get(`https://covid-api.mmediagroup.fr/v1/cases`)
    .then(res => {
      response.data = res.data;
    })
    .catch(err => {
      response.status = false;
      response.data = err;
    });
    return response;
  }
}