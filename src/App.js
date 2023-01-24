import Navbar from './Navbar';
import Home from './Home';
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
        </Routes>
      </div>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
