import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';  
import Test from './Test';

function App() {
  return (
    <div className="container">
      <section id="Homepage">
        <Navbar/>
      </section>
      <section id='Services'>Parallax</section>
      <section>Services</section>
      <section id='Portfolio'>Parallax</section>      
      <section>Portfolio1</section>      
      <section>Portfolio2</section>      
      <section>Portfolio3</section>      
      <section id="Contact">Contact</section>      
      {/* <Test/>
      <Test/> */}
    </div>
  );
}

export default App;
