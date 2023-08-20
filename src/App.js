// import logo from './logo.svg';
import './App.css';
import Banner from './components/banner/Banner';
import Features from './components/features/Features';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar/>
      <Banner/>
      <Features/>
      
    </div>
  );
}

export default App;
