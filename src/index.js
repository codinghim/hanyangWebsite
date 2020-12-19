import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// document.addEventListener('DOMContentLoaded',() => {
//   const main = document.getElementById("carousel-container")
//   const about = document.getElementById("about-section")
//   const menu = document.getElementById("menu-section")
//   const location = document.getElementById("location-section")
//   document.addEventListener('scroll', () => {
//     let mainPosition = Math.floor(main.getBoundingClientRect().y)
//     let aboutPosition = Math.floor(about.getBoundingClientRect().y)
//     let menuPosition = Math.floor(menu.getBoundingClientRect().y)
//     let locationPosition = Math.floor(location.getBoundingClientRect().y)
//     if (mainPosition === 50) {
//       console.log(mainPosition)
//       console.log('main in view')
//     }
//     else if (aboutPosition === 50) {
//       console.log('about in view')
//     }
//     else if (menuPosition === 50) {
//       console.log('menu in view')
//     }
//     else if (locationPosition === 50) {
//       console.log('location in view')
//     }
//   })
// })

