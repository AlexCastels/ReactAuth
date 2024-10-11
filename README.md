<!-- PROJECT LOGO -->

# ReactAuth
<br />

<!-- GETTING STARTED -->
### Getting Started

<h4>Per ottenere una copia locale attiva e funzionante, segui questi semplici passaggi:</h4>

1. Dal Terminale fai il clone della repository:
   ```sh
   git clone https://github.com/AlexCastels/ReactAuth.git
   ```
2. Nella cartella principale installiamo tutte le dipendenze:
   ```sh
   npm install
   ```
3. Adesso bisognerà avviare il backend , spostiamoci nella cartella appropiata:
   ```sh
   cd server
   ```
4. Avviamo il server:
   ```sh
   node server.js
   ```
5. Aprire adesso un nuovo terminale, e sarà possibile visionare il progetto:
   ```sh
   npm run dev
   ```
   
## The Project

- <p> ReactAuth è una piccola applicazione creata per poter far pratica nella comunicazione tra frontend e backend.</p>
- <p> E' obbligatorio doversi iscrivere per poter navigare le varie pagine</p>
- <p> Il tutto è sottoposto sotto controllo dietro le quinte, attraverso JSON web token e bcrypt</p>

</br>

- <p> Sarà presente anche una sezione dedicata esclusivamente agli Admin, dove possono gestire tutti gli utenti , creandone di nuovi, o rimuovendoli</p>
- <p> Per accedere a questa sezione bisognerà loggare con l'account admin@admin.it con password admin</p>
- <p> Viene effettuato non solo l'hashing della password, ma anche un controllo nella doppia immissione di essa</p>

</br>

- <p> Le route del sito sono doppiamente protette tramite una verifica parallela tra backend e frontend</p>
- <p> Il controllo lato frontend è gestito tramite redux ed i vari controlli</p>
- <p> Il backend è gestito tramite Node.js con Express.js<p/>
- <p> Il database utilizzato è PostgreSQL monitorato tramite pgAdmin<p/>

</br>

<!-- BUILT WITH -->
## Tools and Technologies

### Programming Language
- JavaScript
- HTML
- CSS

### Frontend Development
- React

### Backend Development
- Node.js
- Express.js
- PostgreSQL
- JWT

### Version Control
- Git

### Code Editor
- Visual Studio Code

### Libraries and Frameworks
    @reduxjs/toolkit
    bcrypt
    cookie-parser
    cors
    dotenv
    express
    jsonwebtoken
    pg-promise
    react-dom
    react-redux
    react-router-dom
