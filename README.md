# Phone Catalog (Frontend)
A simple Phone catalog made with React, Node.js and Express.js technologies. 
Try it out [here]( https://pacific-sea-88253.herokuapp.com/).
## Table of contents 
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
## General info
The Phone Catalog project consists of two parts: REACT APP, [REST API](https://github.com/irinanic88/phone-catalog-backend). 

This repo contains only the frontend part of the application.

The React App contains:
*  main page, that displays a list of phones with images, each item can be selected
*  page displaying phone details when this phone is selected
*  a loader while the REST API is ongoing and the app is waiting for phones data.

Navigation is implemented with React routing. The frontend app has an internal store, where the server requests are implemented inside of it. Components get needed information via this store without fetching any data by itself. List of products is loaded only on first render and requests of product details are made only if there was not same request before. 

Detailed information and source code of the REST API you can find in [this repository](https://github.com/irinanic88/phone-catalog-backend).
## Technologies
Project is created with:
* React version 17.0.2
* Redux version 7.2.6
* React Routing V6
* SASS 1.49.9
* Enzyme 3.11.0
## Setup
First of all, you need to setup the [backend part of the application](https://github.com/irinanic88/phone-catalog-backend). You can run it locally or
 use the already deployed version.
 
 Then, make sure you have specified the backend API URL inside the `src/utils/variables.js` file, `HOST` variable. To use the already deployed version of the backend: 
 
 ```
const HOST = 'https://secret-meadow-52167.herokuapp.com';
```
 
To run the project, install it locally using npm:
```
$ npm install
$ npm start
```
To run tests:
```
$ npm test
```
