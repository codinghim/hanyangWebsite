import './App.css';
import {Navbar, Carousel, Menu, Location, About, Footer} from './components'

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
