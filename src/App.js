
import './App.css';
import About from './components/About';
import Arrival from './components/Arrival';
import Categories from './components/Categories';
import DarkVariantExample from './components/DarkVariantExample';
import Deal from './components/Deal';
import NavScrollExample from './components/NavScrollExample';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shoepage from './components/pages/Shoepage';



function App() {
  return (
    <div>
      <NavScrollExample></NavScrollExample>
      <br></br>
      <DarkVariantExample></DarkVariantExample>
      <br>
      </br>
      <br></br>
      <Arrival></Arrival>
      <br>
      </br>
      <hr></hr>
      <br></br><br></br><br></br>
      <Deal></Deal>
       <About></About>
      <br></br>
      <Categories></Categories>
      <br></br>
      <Footer></Footer>
      <BrowserRouter>
            <Routes>
              <Route path='/shoepage' element={<Shoepage/>}/>
            </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
