/* eslint-disable no-underscore-dangle */
class carouselBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html */ `
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
        <picture>
        <source class="d-block w-100 lazyload" media="(max-width: 600px)" srcset="./images/covid-small.jpg">
        <img class="d-block w-100 lazyload"
        src='./images/covid-large.jpg' 
        alt="covid_image"></img>

        </picture>
        </div>
        <div class="carousel-item">
          <picture>
        <source class="d-block w-100 lazyload" media="(max-width: 600px)" srcset="./images/covid1-small.jpg">
        <img class="d-block w-100 lazyload"
        src='./images/covid1-large.jpg' 
        alt="Stay_Safe"></img>

        </picture>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
                    `;
  }
}
customElements.define('carousel-bar', carouselBar);
