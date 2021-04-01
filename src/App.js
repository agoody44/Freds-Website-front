import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

import ImageSlider from "./slider/ImageSlider";
import { SliderData } from "./slider/SliderData";


import Form from './contact/Form.js';
import Social from './contact/Social.js';



import HomePage from './pages/Homepage';

function App() {
  return (
    <div className="page-container">


      <Header />
      <br/>
      <hr />
      <br/>
      <HomePage />
      <ImageSlider slides={SliderData} />
      <br/>
      <Form />
      <hr className="footerHr"/>
      <Social />
      <Footer/>
      </div>
  );
}

export default App;
