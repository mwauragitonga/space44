<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Space44 Code Assessment</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> A Web Application to visualize COVID-19 presence in the United States.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

With the COVID-19 pandemic, the United States has become a global hotspot for the spread of the virus. There is a great need to be able to visualize the spread of the virus in the United States and across the globe. This will help the masses understand the spread of the virus as well as the regions that are affected the most. This application is designed to visualize the spread of the virus in the United States. The application makes use of the [Covid Act Now API](https://apidocs.covidactnow.org/api). The application is designed to be used in any browser.
## 🧐 Technical Description <a name = "Technical Description"></a>

The task is Front-End inclined involving the use if React Js , a REST API, Material-UI, and a Google Map. The choice of React Js was made because it is a library that is easy to use and is very popular. 
## 🧐 Trade Offs <a name = "Trade Offs"></a>
The application requirements outlined in the test have been met in my implementation. However, as with any software, there are trade offs that need to be considered. The trade offs are as follows:
- The Covid Act Now API does not provide the coordinates of the USA States (lat,lng) in the response. This is a limitation of the API. As a result, I had to get that data elsewhere.
The coordinates data set might not be very accurate and some of the states might not be represented in the dataset
## 🧐 Future Improvements <a name = "Improvements"></a>
Some of the future improvements that I would like to make are:
- The application is not fully optimized for mobile devices
- One the user searches/filters for a specific state, I'd like to be able to zoom in on that state
- The UI could be improved in several ways
    - including pie charts & bar graphs in the visualization
    - improving the overall look & feel of the application
## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
- Node.js
- NPM/Yarn
- React Knowledge
- REST APIs
- General HTML/CSS Knowledge
- Git
- NPM Packages
    - Material UI
    - Google-Map-React
    
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
1. Install Node.js
2. Install NPM/Yarn
3. Clone the repository from GitHub
4. Open terminal and navigate to the project directory
5. Run "yarn install" to install all the packages
6. Run "yarn start"
7. Open the browser and navigate to http://localhost:3000
8. Enjoy!
```



## 🎈 Usage <a name="usage"></a>

The Application is to be used to view & understand the spread of COVID-19 within the United States.

## 🚀 Deployment <a name = "deployment"></a>

- To create a production ready version of the application, run "yarn build"
- To deploy the application to a live system, run "yarn deploy"

## ⛏️ Built Using <a name = "built_using"></a>

- [ReactJs](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Google Maps API](https://developers.google.com/maps/) - Maps Javascript API
- [Google Map React ](https://github.com/google-map-react/google-map-react/) - a component written over a small set of the Google Maps API
- [Material UI ](https://v4.mui.com/) - UI library for React

## ✍️ Authors <a name = "authors"></a>
This was written by Kelvin Mwaura
Find below my various digital profiles
- [Github](https://github.com/mwauragitonga)
- [Website ](https://www.mwauragitonga.com)
- [LinkedIn ](https://www.linkedin.com/in/mwaura-kelvin-gitonga-3a3b07171/)


## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to the following people & organizations for their contributions:
    - [Google Maps API](https://developers.google.com/maps/)
    - [Google Map React ](https://github.com/google-map-react/google-map-react/)
    - https://covidactnow.org/
    - https://gist.github.com/jpriebe/d62a45e29f24e843c974


