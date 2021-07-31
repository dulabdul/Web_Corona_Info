/* eslint-disable no-underscore-dangle */
class footerBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html */ `
      <footer id="contact">
    <div class="footer mt-4">
      <div class="row">
        <div class="col-md-4 footer_konten">
          <h2 class="text-white mt-3">About</h2>
          <p class="name_description">Website Informasi Coronavirus Cases Indonesia. Dan masih dalam tahap pengembangan</p>
        </div>
        <div class="col-md-4 footer_konten">
          <h2 class="text-white mt-3">Informasi</h2>
          <ul>
            <li><a tabindex="0" href="https://www.kompas.com/">Berita Terkini</a></li>
            <li><a tabindex="0" href="https://infeksiemerging.kemkes.go.id/">Tentang Covid</a></li>
            <li><a tabindex="0" href="https://covid19.go.id/peta-sebaran">Peta Sebaran</a></li>
            <li><a tabindex="0" href="https://covid19.go.id/">Website Resmi Pemerintah</a></li>
          </ul>
        </div>
        <div class="col-md-4 footer_konten">
          <h2 class="text-white mt-3">Contact</h2>
          <div class="mt-3 text-dark">
            <div class="icon">
              <a aria-label="Instragam" href="https://www.instagram.com/ar.dev21__/" class="active" tabindex="0" target="_blank" rel="noopener"><i class="fa fa-instagram" aria-hidden="true"></i></a>
              <a aria-label="Linkedin" href="https://www.linkedin.com/in/abdul-rahman-2737131a1/" tabindex="0" target="_blank" rel="noopener"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
              <a aria-label="Github" href="https://github.com/dulabdul" target="_blank" tabindex="0" rel="noopener"><i class="fa fa-github" aria-hidden="true"></i></a>
              <a aria-label="Email" href="mailto:dulabdol1331@gmail.com" target="_blank" tabindex="0" rel="noopener"><i class="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center text-white font-italic font-weight-lighter footer_name">
      <p>&copy Covid Web || Abdulrahman 2021</p>
    </div>
  </footer>
                    `;
  }
}
customElements.define('footer-bar', footerBar);
