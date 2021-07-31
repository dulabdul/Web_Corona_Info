class headerBar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({
      mode: 'open',
    });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
          <style>
          * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
      }
      html{
          scroll-behavior: smooth;
      }
      body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
      }
      
      body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
      .app-bar {
    padding: 8px 16px;
    background-color: white;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    position:sticky;
    top: 0;
    z-index: 99;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
   
  .app-bar .app-bar__menu {
    display: flex;
    align-items: center;
  }
   
  .app-bar .app-bar__menu button {
    background-color: transparent;
    border: none;
    font-size: 18px;
    padding: 8px;
    cursor: pointer;
    min-width: 44px;
    min-height: 44px;
  }
   
  .app-bar .app-bar__brand {
    display: flex;
    align-items: center;
  }
   
  .app-bar .app-bar__brand h1 {
    color: #DA0037;
    text-transform: uppercase;
    font-size: 20px;
    user-select: none;
    font-weight:2000;
  }
   
  .app-bar .app-bar__navigation {
    position: absolute;
    top: 50px;
    left: -180px;
    width: 150px;
    transition: all 0.3s;
    padding: 8px;
    background-color: white;
    overflow: hidden;
    
  }
   
  .app-bar .app-bar__navigation.open {
    left: 0;
  }
   
  .app-bar .app-bar__navigation ul li a {
    display: inline-block;
    text-decoration: none;
    color: black;
    padding: 8px;
    margin-bottom: 5px;
    width: 100%;
    font-size: 18px;
    min-height: 44px;
    min-width: 44px;
    font-weight:450;
    
  }
  .app-bar .app-bar__navigation ul li a:hover {
    color: #c1121f;
    font-weight: 800;
    }
    .dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: #000;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
 color: #c1121f;
 font-weight: 800;
}

.dropdown:hover .dropdown-content {
  display: block;
}
    /*Responsive */
    @media screen and (max-width:650px){
      .app-bar .app-bar__navigation {
        height:400px;
        width:200px;
        left:-200px;
      }
    }
  @media screen and (min-width: 650px) {
    .app-bar {
        grid-template-columns: 1fr auto;
        padding: 8px 32px;
    }
   
    .app-bar .app-bar__brand h1 {
        font-size: 1.5em;
    }
   
    .app-bar .app-bar__menu {
        display: none;
    }
   
    .app-bar .app-bar__navigation {
        position: static;
        width: 100%;
    }
   
    .app-bar .app-bar__navigation ul li {
        display: inline-block;
    }
   
    .app-bar .app-bar__navigation ul li a {
        display: inline-block;
        width: 120px;
        text-align: center;
        margin: 0;
    }
  }
   
  @media screen and (min-width: 800px) {
    .app-bar .app-bar__brand h1 {
        font-size: 2em;
    }
  }
       </style>
      <header class="app-bar">
      <div class="app-bar__menu">
        <button id="hamburgerButton" aria-label="hamburger Button">☰</button>
      </div>
      <div class="app-bar__brand">
        <h1>Covid Web</h1>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>   
          <li><a tabindex="0" href="#/" class="active">Home</a></li>
          <li><a tabindex="0" href="https://www.linkedin.com/in/abdul-rahman-2737131a1/" target="_blank" rel="noreferrer">AboutUs</a></li>
          <div class="dropdown">
          <button class="dropbtn">Covid<span>&#9660;</span>
          </button>
          <div class="dropdown-content">
          <a tabindex="0" href="#indonesia">Indonesia</a>
          <a tabindex="0" href="#vaksin">Vaksinasi</a>
          <a tabindex="0" href="#titleProv">Provinsi</a>
          <a tabindex="0" href="#titleHospital">Rumah Sakit</a>
          </div>
          </div> 
          <li><a tabindex="0" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
            `;
  }
}

customElements.define('nav-bar', headerBar);
