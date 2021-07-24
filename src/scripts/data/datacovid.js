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

  static async provData() {
    const response = await fetch(API_ENDPOINT.PROVINSI);
    const responseJson = await response.json();
    return responseJson;
  }
}
export default dataCovidSource;
