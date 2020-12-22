import './App.css';
import {Navbar, Carousel, Menu, Location, About, Footer, Popup} from './components'
import {useEffect} from 'react'

function App() {
  // useEffect(() => {
  //   const openPopup = () => {
  //     document.getElementById("popup").classList = "popup-background"
  //     document.getElementById("App").classList = "App body-popup-open"
  //   }
  //   //remove the line below to disable popup on homepage
  //   openPopup()
  // },[])
  return (
    <div className="App" id="App">
      <div className="background"></div>
      <Navbar />
      <Carousel />
      <About />
      <div className="section-divider"></div>
      <Menu />
      <Location />
      <Footer />
      {/* <Popup /> */}
    </div>
  );
}

export default App;
