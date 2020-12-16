<p align="center">
  <img src="https://res.cloudinary.com/dxs3wvxxw/image/upload/v1608075721/starwarsNata/starwars-logo.png" alt="Cabeçalho do Star Wars"/>
</p>

# Star Wars Travel

## Content

- [Project Overview](#project-overview)
  - [Stack](#stack)
  - [Star Wars API Documentation](#star-wars-api-documentation)
- [Setup](#setup)
  - [Cloning the Repo](#cloning-the-repo)
  - [Installing the Dependencies](#installing-the-dependencies)
- [Running the Application](#running-the-application)
- [Bundle Version](#bundle-version)
- [Tests](#tests)
- [Additional Information](#additional-information)
- [Conclusion](#conclusion)

## Project Overview

This is a code challenge provided by nata.house. The main goal of the application is to fetch data from the SWAPI Star Wars API, calculate some information with the data received and display the information to the user. The user will input a distance in megalights and, based on this distance, the application will calculate how many ressuply stops each starship in the star wars franchise will have to make in order to complete the travel.

### Stack

- HTML5

- CSS
  - [SCSS](https://sass-lang.com/)
- JavaScript
  - [React](https://reactjs.org/)
  - [Axios](https://github.com/axios/axios)
  - [Jest](https://jestjs.io/en/)
  - [React Testing Library](https://testing-library.com/)
  - [Cypress](https://www.cypress.io/)

### Star Wars API

The API documentation can be accessed here: [SWAPI](https://swapi.co/).

## Setup

To complete the following actions, you must have **git** and **node.js** installed in your computer, preferable in the last stable versions. You can download and install those applications in the links below:

- [Git](https://git-scm.com/downloads)
- [Node.js - Windows/Mac](https://nodejs.org/en/download/)
- [Node.js - Linux](https://nodejs.org/en/download/package-manager/)

### Cloning the repo

First, you have to clone the repo to your computer in order to change the code. However, before cloning the repo, it is important to **fork** it, in other words, create a copy of the repo to your github. To fork a repo, just scroll up in this page and click in the button with said function and wait until the proccess is done. After that, you can click in **clone or download** and copy the repo URL.

Now open the Git Bash. To perfom the cloning, you have to type the following lines and provide the URL that you copied in the last part:

```git
git clone <repo-url>
```

### Installing the Dependencies

In order to install the dependencies of the project, you must open the **Node.js Command Shell** (if you're using linux, you can just use the terminal), access the repo folder and type the following commands:

```node
npm install
```

## Running the Application

To run the application, use the following command:

```node
npm run start
```

This code is provided by create-react-app and will create a development platform (`http://localhost:3000`), in this platform, every time you make a change in your code it will automatically update the web app.

## Bundle Version

To create a bundle version of the application, run the following code:

```node
npm run build
```

The bundle version will be stored inside the folder `\build`. Remebemr to always `git ignore` this folder, it will be useful only when the app is ready for production and can be deployed to a host service.

## Tests

To run unit tests, you can use this command:

```node
npm test
```

It will run the tests created with jest and react-testing-library.\
The app has a simple objective and a few components to achieve its purpose, so, I didn't think it was neccessary to insert integration tests.\
However, some simple e2e tests were made using Cypress. They can be accessed (and implemented) following this command:

```node
npm run cypress:open
```

## Additional Information

The strucuture of the app is as follow:

- [src]<br>
- [components]<br>
  This are unit components that, most of the time, have one objective and will only perform one task.
- [containers]<br>
  This are container components that dictates where each unit component should be.
- [services]<br>
  Functions isolated to the main structure of the app, cleaning the App.js and separating the purpose of each file.
- [App.js]<br>
  Where most of the main functions and states of the app are stored.

## Conclusion

The web app was created to be a SPA, it has a mobile-friendly theme created using SASS and the React structure of the app displays the information to the user rounding down the calculation of the stops. While creating the system, I learned more about how to find and manipulate data from external APIs, some fun commands in SASS to create the theme, how to deal with different time measures inside the API, how to better organize and componetize the react application and how to better manage my time coding (mainly, the time spent planning and organizing the application was really important and made me save a lot of time). I hope you all like it :)
