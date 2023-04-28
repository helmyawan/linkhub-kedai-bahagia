import './Style/main.css';
import './Style/SButton.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faEnvelope, faKey);

/// ...

function App() {
  return (
    <body>
      <head>
      <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dimsum Bahagia Links!</title>

    {/* CSS */}
    <link rel="stylesheet" href="./Style/main.css" />
    <link rel="stylesheet" href="./Style/SButton.css" />

    {/* Font Awesome */}
    <script
      src="https://kit.fontawesome.com/3ffd4c8596.js"
      crossorigin="anonymous"
    ></script>

     {/* Google Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
      rel="stylesheet"/>
      </head>

    <div class="main">
     {/* Avatar */}
      <div class="header">
        <div class="avatar">
          <img src="https://halo.kedaibahagia.id/logo/logo.png" alt="Logo" />
        </div>
        <div class="username">
          <h3>Dimsum Bahagia</h3>
        </div>
      </div>

    <div class="main-content">

        {/* Menu */}
        <div class="long-button">
          <a
            href="#"
            target="_blank"
            class="long-btn">
            Menu
          </a>
        </div>
        
        <div class="long-button">
          <a
            href="#"
            target="_blank"
            class="long-btn">
            Gofood
          </a>
        </div>
        <div class="long-button">
          <a
            href="#"
            target="_blank"
            class="long-btn">
            Google Maps
          </a>
        </div>
       {/*  Website  */}
        
        <div class="long-button">
          <a
            href="#"
            target="_blank"
            class="long-btn">
            Official Website
          </a>
        </div> 
        <div class="long-button">
          <a
            href="#"
            target="_blank"
            class="long-btn">
            Whatsapp
          </a>
        </div>
    </div>
  </div>
    {/* Footer */}
    <div class="footer">
      <p>Copyright © 2023 <strong>Dimsum Bahagia</strong></p>
    </div>
  </body>
  );
}
export default App;
