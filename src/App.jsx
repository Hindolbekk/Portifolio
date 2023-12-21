
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
