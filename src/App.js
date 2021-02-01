import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


import HomePage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer/>
    </div>
  );
}

export default App;
