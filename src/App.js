import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Menu from './components/Menu/Menu';
import Location from './components/Location/Location';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const openPopup = () => {
      document.getElementById("popup").classList = "popup-background"
      document.getElementById("App").classList = "App body-popup-open"
    }
    //remove the line below to disable popup on homepage
    openPopup()
  },[])

  return (
    <div className="App" id="App">
      <Navbar />
      <Carousel />
      <About />
      <Menu />
      <Location />
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
