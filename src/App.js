import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

import ImageSlider from "./slider/ImageSlider";
import { SliderData } from "./slider/SliderData";


import Form from './contact/Form.js';



import HomePage from './pages/Homepage';

function App() {
  return (
    <div className="page-container">


      <Header />
      <hr />
      <br/>
      <HomePage />
      <ImageSlider slides={SliderData} />
      <Form />
      <Footer/>
      </div>
  );
}

export default App;
