import { createVaksinItemTemplate, createIndonesiaItemTemplate, createProvItemTemplate } from '../templates/template-creator';
import dataCovidSource from '../../data/datacovid';

const Detail = {
  async render() {
    return `
    <div id="indonesia"></div>
     <div id="vaksin"></div>
     <div id="provinsi"></div>
    `;
  },

  async afterRender() {
    const indonesia = await dataCovidSource.IndonesiaData();
    const vaksin = await dataCovidSource.VAKSIN();
    const provinsi = await dataCovidSource.provData();
    const indonesiaContainer = document.querySelector('#indonesia');
    indonesiaContainer.innerHTML = createIndonesiaItemTemplate(indonesia);
    const vaksinContainer = document.querySelector('#vaksin');
    vaksinContainer.innerHTML = createVaksinItemTemplate(vaksin);
    const provContainer = document.querySelector('#provinsi');
    provContainer.innerHTML = createProvItemTemplate(provinsi);
  },
};

export default Detail;
