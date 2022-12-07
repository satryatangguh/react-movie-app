# Vidport (React Movie Database App)

Vidport is mini project from Dibimbing and movie database website. This project create by using [ReactJS](https://reactjs.org/), [Bootstrap](https://getbootstrap.com/), and [TMDBAPI](https://www.themoviedb.org/).

## Features of this App

- Login Page
- Home Page
- TV Show Page
- Movie Page
- Movie and TV Show Card View
- Detail of Movie and TV Show
- Search Movie and TV Show

## Libraries of this App
In this project, there are several libraries used which consist of:

### Axios
- Type `npm install axios` on your terminal to installing axios.
- Once the package installed, you can import the library using: 
```js
import axios from 'axios';
```

### Formik and Yup
- Type `npm install formik yup` on your terminal.
- Once the package installed, you can import the library using: 
```js
import { useFormik } from 'formik';
import * as Yup from 'yup';
```

### React-bootstrap
- Type `npm install react-bootstrap` on your terminal.
- Once the package installed, you can import the library using:
```js
import { Modal, ... } from 'react-bootstrap';
```

### Get Bootstrap
- Import library using CDN in the `index.html` file in the repository:
```html
<head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
        crossorigin="anonymous"
    />
</head>
<body>
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous">
    </script>
</body>
```

### React Router
- Type `npm install react-router-dom` on your terminal.
- Once the package installed, you can import library in the `index.js` file:
```js
import ReactDOM from "react-dom/client";
```

### Dotenv
- Type `npm install dotenv` on your terminal.
- Once the package installed, you can create `webpack.config.js` file. Then you can open the file an type:
```js
const Dotenv = require('dotenv-webpack');
module.exports = {
    plugins: [
        new Dotenv()
    ]
}
```

## Getting Started

- In the directiory, type `npm install` on your terminal to adding node module.
- You can type `npm install` to run the app.
- The app will be running on [http://localhost:3000](http://localhost:3000).
