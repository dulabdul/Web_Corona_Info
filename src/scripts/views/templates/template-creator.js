/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
const createIndonesiaItemTemplate = (indonesia) => `
<div class="container">
<div class="row">
  <div class="col-md">
    <h2 class="font-weight-bold text-left mt-3">Data Covid-19 Indonesia</h2>
  </div>
</div>
<div class="row justify-content-center">
  <div class="col-md-6">
    <div class="card mt-3 shadow">
      <div class="card-body">
      <p tabindex="0" class="text-left"><i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2 aktif">${indonesia.cases}<sup class="suptag">(<i class="fa fa-plus" aria-hidden="true"></i>${indonesia.todayCases})</sup></span></p>
      <span class="title_covid">Total Kasus</span>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card mt-3 shadow">
      <div class="card-body">
      <p tabindex="0" class="text-left"><i class="fa fa-heartbeat" aria-hidden="true"></i><span class="ml-2 mati">${indonesia.deaths}<sup class="suptag">(<i class="fa fa-plus" aria-hidden="true"></i>${indonesia.todayDeaths})</sup></span></p>
      <span class="title_covid">Total Kematian</span>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card mt-3 shadow">
      <div class="card-body">
      <p tabindex="0"><i class="fa fa-heart" aria-hidden="true"></i><span class="ml-2 sembuh">${indonesia.recovered}</span></p>
      <span class="title_covid">Total Kesembuhan </span>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card mt-3 shadow">
      <div class="card-body">
      <p tabindex="0"><i class="fa fa-medkit" aria-hidden="true"></i><span class="ml-2">${indonesia.totalTests}</span></p>
      <span class="title_covid">Total Testing </span>
      </div>
    </div>
  </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card mt-3 shadow">
        <div class="card-body">
        <p tabindex="0"> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2 aktif">${indonesia.active}</span></p>
        <span class="title_covid">Kasus Aktif</span>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
const createVaksinItemTemplate = (vaksin) => `
            <div class="container">
<h2 class="mt-4 font-weight-bold">Sasaran Vaksinasi Nasional</h2>
<div class="row justify-content-center">
  <div class="col-md-6">
    <div class="card mt-3 shadow">
      <div class="card-body">
      <p tabindex="0"> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${vaksin.totalsasaran}</span></p>
      <span class="title_covid">Total Sasaran Vaksinasi</span>
      </div>
    </div>
    </div> 
<div class="col-md-6">
<div class="card mt-3 shadow">
  <div class="card-body">
  <p tabindex="0"> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${vaksin.vaksinasi1}</span></p>
  <span class="title_covid">Vaksinasi Ke-1</span>
  </div>
</div>
</div> 
<div class="col-md-6">
<div class="card mt-3 shadow">
  <div class="card-body">
  <p tabindex="0"> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${vaksin.vaksinasi2}</span></p>
  <span class="title_covid">Vaksinasi Ke-2</span>
  </div>
</div>
</div> 
</div>
</div>
  `;
const createPropinsiItemTemplate = (prop) => `
      <div class="col-md-12">
        <div class="card mt-3 shadow">
          <div class="card-body prop">
            <h3 class="font-weight-bold" tabindex="0">${prop.provinsi}</h3>
            <h4>Kasus Positif Total: </h4>
            <p style="font-size: 26px" class="text-left aktif"> <i class="fa fa-plus-square" style="font-size:23px;" aria-hidden="true"></i><span class="ml-2">${prop.kasus}</span></p>
              <h5>Dalam Perawatan: </h5>
              <p style="font-size: 26px" class="text-left aktif"> <i class="fa fa-plus-square" style="font-size:23px;" aria-hidden="true"></i><span class="ml-2">${prop.dirawat}</span></p>
              <h5>Total Sembuh: </h5>
              <p style="font-size: 26px" class="text-left sembuh"> <i class="fa fa-heart" style="font-size:23px;" aria-hidden="true"></i><span class="ml-2">${prop.sembuh}</span></p>
                 <h5>Total Kematian: </h5>
              <p style="font-size: 26px" class="text-left mati"> <i class="fa fa-heartbeat" style="font-size:23px;" aria-hidden="true"></i><span class="ml-2">${prop.meninggal}</span></p>

          </div>
        </div>
      </div> 
  `;
const createHospitalItemTemplate = (hospital) => `
    <tr class="hospital">
      <th tabindex="0" scope="row"><i class="fa fa-hospital-o" aria-hidden="true"></i> <span class="ml-2" >${hospital.name}</span></th>
      <td tabindex="0"><i class="fa fa-map-marker" aria-hidden="true"></i><span class="ml-2">${hospital.address}, Prov.${hospital.province}</span></td>
      <td tabindex="0"><i class="fa fa-phone" aria-hidden="true"></i><span class="ml-2">${hospital.phone}</span></td>
    </tr>  `;
export {
  createIndonesiaItemTemplate, createVaksinItemTemplate, createPropinsiItemTemplate, createHospitalItemTemplate,
};
