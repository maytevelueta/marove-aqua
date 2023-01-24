import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/gallery' element={<Gallery />}></Route>
          <Route exact path='/contact'element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
