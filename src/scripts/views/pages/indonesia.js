/* eslint-disable max-len */
import {
  createVaksinItemTemplate, createIndonesiaItemTemplate, createBedItemTemplate,
} from '../templates/template-creator';
import dataCovidSource from '../../data/datacovid';

const Detail = {
  async render() {
    return `
    <div id="indonesia"></div>
     <div id="vaksin"></div>
     <div id="provinsi"></div>
     <div id="tempat_tidur"></div>
    `;
  },

  async afterRender() {
    const indonesia = await dataCovidSource.IndonesiaData();
    const vaksin = await dataCovidSource.VAKSIN();
    const bed = await dataCovidSource.bedData();
    const indonesiaContainer = document.querySelector('#indonesia');
    indonesiaContainer.innerHTML = createIndonesiaItemTemplate(indonesia);
    const vaksinContainer = document.querySelector('#vaksin');
    vaksinContainer.innerHTML = createVaksinItemTemplate(vaksin);
    const bedContainer = document.querySelector('#tempat_tidur');
    bedContainer.innerHTML = createBedItemTemplate(bed);
  },
};

export default Detail;
