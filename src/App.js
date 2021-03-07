import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

import ImageSlider from "./slider/ImageSlider";
import { SliderData } from "./slider/SliderData";

import Info from './contact/Info';
import Form from './contact/Form.js';



import HomePage from './pages/Homepage';

function App() {
  return (
    <div className="page-container">


      <Header />
      <HomePage />
      <ImageSlider slides={SliderData} />
      {/* <Info /> */}
      <br />
      <Form />
      <Footer/>
      </div>
  );
}

export default App;
