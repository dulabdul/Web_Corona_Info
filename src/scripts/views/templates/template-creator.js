/* eslint-disable import/prefer-default-export */
const createIndonesiaItemTemplate = (indonesia) => `
<div class="container">
<div class="row">
  <div class="col-md">
    <h2 class="font-weiht bold text-left mt-3">Data Covid-19 Indonesia</h2>
  </div>
</div>
<div class="row justify-content-center">
  <div class="col-md-4">
    <div class="card mt-3 shadow">
      <div class="card-body">
          <h5>Total Kasus</h5>
          <p> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${indonesia.cases}</span></p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mt-3 shadow">
      <div class="card-body">
          <h5>Total Kematian</h5>
          <p><i class="fa fa-heartbeat" aria-hidden="true"></i><span class="ml-2">${indonesia.deaths}</span></p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mt-3 shadow">
      <div class="card-body">
          <h5>Total Kesembuhan </h5>
          <p><i class="fa fa-heart" aria-hidden="true"></i><span class="ml-2">${indonesia.recovered}</span></p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mt-3 shadow">
      <div class="card-body">
          <h5>Total Testing </h5>
          <p><i class="fa fa-medkit" aria-hidden="true"></i><span class="ml-2">${indonesia.totalTests}</span></p>
      </div>
    </div>
  </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card mt-3 shadow">
        <div class="card-body">
            <h5>Kasus Positif Hari Ini </h5>
            <p><i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${indonesia.todayCases}</span></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mt-3 shadow">
        <div class="card-body">
            <h5>Kematian Hari Ini</h5>
            <p><i class="fa fa-heartbeat" aria-hidden="true"></i><span class="ml-2">${indonesia.todayDeaths}</span></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
    <div class="card mt-3 shadow">
      <div class="card-body">
          <h5>Kasus Per 1 Juta</h5>
          <p> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${indonesia.casesPerOneMillion}</span></p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
  <div class="card mt-3 shadow">
    <div class="card-body">
        <h5>Kematian Per 1 Juta</h5>
        <p> <i class="fa fa-heartbeat" aria-hidden="true"></i><span class="ml-2">${indonesia.deathsPerOneMillion}</span></p>
    </div>
  </div>
</div>
<div class="col-md-4">
<div class="card mt-3 shadow">
  <div class="card-body">
      <h5>Testing Per 1 Juta</h5>
      <p> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${indonesia.testsPerOneMillion}</span></p>
  </div>
</div>
</div>

    <div class="col-md-4">
      <div class="card mt-3 shadow">
        <div class="card-body">
            <h5>Kasus Aktif</h5>
            <p> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${indonesia.active}</span></p>
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
          <h5>Total Sasaran Vaksinasi</h5>
          <p> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${vaksin.totalsasaran}</span></p>
      </div>
    </div>
    </div> 
    <div class="col-md-6">
    <div class="card mt-3 shadow">
      <div class="card-body">
          <h5>Total Sasaran Vaksinasi Lansia</h5>
          <p> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${vaksin.sasaranvaksinlansia}</span></p>
      </div>
    </div>
    </div> 
    <div class="col-md-6">
    <div class="card mt-3 shadow">
      <div class="card-body">
          <h5>Total Sasaran Vaksinasi Petugas Publik</h5>
          <p> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${vaksin.sasaranvaksinpetugaspublik}</span></p>
      </div>
    </div>
    </div> 
</div>
<div class="row justify-content-center">
<div class="col-md-6">
<div class="card mt-3 shadow">
  <div class="card-body">
      <h5>Vaksinasi Ke-1</h5>
      <p> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${vaksin.vaksinasi1}</span></p>
  </div>
</div>
</div> 
<div class="col-md-6">
<div class="card mt-3 shadow">
  <div class="card-body">
      <h5>Vaksinasi Ke-2</h5>
      <p> <i class="fa fa-plus-square" aria-hidden="true"></i><span class="ml-2">${vaksin.vaksinasi2}</span></p>
  </div>
</div>
</div> 
</div>
</div>
  `;
const createBedItemTemplate = (bed) => `
<div class="container">
<h2 class="mt-4 font-weight-bold">Daftar Ketersediaan Tempat Tidur Di Rumah Sakit</h2>
<div class="row justify-content-center">
  <div class="col-md-12">
  <div class="card mt-3 shadow">
  <div class="card-body">
      <h5>Nama Rumah Sakit</h5>
      <p>${bed.data.name}</p>
      <h5>Alamat</h5>
      <p>${bed.data.address}</p>
      <h5>No Telepon</h5>
      <p>${bed.data.phone}</p>
      ${bed.data.bedDetail.map((detail) => `
      <p><span class="">${detail.stats.title} : </span><span class="ml-2">${detail.stats.bed_available}</span></p>
      `).join('')}
  </div>
</div>
  </div>
</div>
</div>
  `;
export {
  createIndonesiaItemTemplate, createVaksinItemTemplate, createBedItemTemplate,
};
