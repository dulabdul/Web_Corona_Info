/* eslint-disable no-underscore-dangle */
class databaseBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html */ `
    <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <section class="input_section">
            <h2 class="mt-3">Formulir Vaksinasi</h2>
            <form id="inputData">
                <div class="form-group">
                    <label for="inputUser">Nama</label>
                    <input type="text" class="form-control" id="inputUser" aria-describedby="inputUser">
                </div>
                <select name="vaksin" id="inputVaksin">
                  <option value="Moderna">Moderna</option>
                  <option value="Sinopharm">Sinopharm</option>
                  <option value="astrazeneca">Astrazeneca</option>
                  <option value="Sinovac">Sinovac</option>
                </select>
                <button type="submit" class="btn-submit btn btn-danger">Kirim
                    </button>
            </form>
        </section>
      </div>       
    </div>
    <section>
        <h2>Data Kamu</h2>
          <div class="data" id="Nama-peserta">

          </div>
    </section>
    <section>
        <h2 class="mt-2">Selesai Di Vaksinasi</h2>
        <div class="data" id="Jenis-vaksin">
        </div>
    </section>
</div>
                    `;
  }
}
customElements.define('database-bar', databaseBar);
