/* eslint-disable max-len */
import {
  createVaksinItemTemplate, createIndonesiaItemTemplate, createPropinsiItemTemplate, createHospitalItemTemplate,
} from '../templates/template-creator';
import dataCovidSource from '../../data/datacovid';

const Detail = {
  async render() {
    return `
    <div id="indonesia"></div>
     <div id="vaksin"></div>
     <div class="container">
        <h2 class="mt-4 font-weight-bold" id="titleProv" style="padding-top:65px;">Data Kasus Provinsi</h2>
     </div>
     <div id="provinsi" class="container provins_container">
    
     </div>
      <div class="container">
        <h2 class="mt-4 font-weight-bold" id="titleHospital" style="padding-top:65px;">Rumah Sakit Rujukan</h2>
     </div>

       <div>
          <div class="table-responsive container mt-3">
    <table class="table">
  <thead class="thead-dark text-center">
    <tr>
      <th scope="col">Nama Rumah Sakit</th>
      <th scope="col">Alamat</th>
      <th scope="col">No Telepon</th>
    </tr>
  </thead>
  <tbody id="hospital">
  </tbody>
</table>
  </div> 

     </div>
    `;
  },

  async afterRender() {
    const indonesia = await dataCovidSource.IndonesiaData();
    const vaksin = await dataCovidSource.VAKSIN();
    const propinsi = await dataCovidSource.PROPINSI();
    const sakit = await dataCovidSource.HOSPITAL();
    const indonesiaContainer = document.querySelector('#indonesia');
    indonesiaContainer.innerHTML = createIndonesiaItemTemplate(indonesia);
    const vaksinContainer = document.querySelector('#vaksin');
    vaksinContainer.innerHTML = createVaksinItemTemplate(vaksin);
    const propinsiContainer = document.querySelector('#provinsi');
    propinsi.forEach((prop) => {
      propinsiContainer.innerHTML += createPropinsiItemTemplate(prop);
    });
    const hospitalContainer = document.querySelector('#hospital');
    sakit.forEach((hospital) => {
      hospitalContainer.innerHTML += createHospitalItemTemplate(hospital);
    });
  },
};

export default Detail;
