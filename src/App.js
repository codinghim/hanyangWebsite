import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Menu from './components/Menu/Menu';
import Location from './components/Location/Location';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" id="App">
      <Navbar />
      <Carousel />
      <About />
      <Menu />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
