/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';

class dataCovidSource {
  static async IndonesiaData() {
    const response = await fetch(API_ENDPOINT.INDONESIA);
    const responseJson = await response.json();
    return responseJson;
  }

  static async VAKSIN() {
    const response = await fetch(API_ENDPOINT.VAKSIN);
    const responseJson = await response.json();
    return responseJson;
  }

  static async PROPINSI() {
    const response = await fetch(API_ENDPOINT.PROVINSI);
    return response.json();
  }

  static async HOSPITAL() {
    const response = await fetch('rumahsakit.json');
    return response.json();
  }
}
export default dataCovidSource;
