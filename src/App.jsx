import './App.scss';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container">
      <section>
        <Navbar/>
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>      
      <section>Portfolio1</section>      
      <section>Portfolio2</section>      
      <section>Portfolio3</section>      
      <section>Contact</section>      
    </div>
  );
}

export default App;
