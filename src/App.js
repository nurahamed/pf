import './App.css';
import Banner from './components/banner/Banner';
import Contact from './components/contact/Contact';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Project';
import Resume from './components/resume/Resume';
// bg-bodyColor

function App() {
  return (
    <div className="w-full h-auto  bg-bodyColor text-lightText px-4">
      <Navbar/>
      <Banner/>
      <Features/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
