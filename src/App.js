
import './App.css';
import Navbar from './components/nav';
import Icons from './components/icons';
import Hero from './components/hero';
import SectionOne from './components/section1';
import SectionTwo from './components/section2';
import SectionThree from './components/section3';
import SectionThreeThree from './components/section22';
import Sectionfour from './components/section4';
import SectionFive from './components/section5';
import SectionSix from './components/section6';
import SectionSeven from './components/section7';
import Footer from './components/footer';


function App() {
  return (
    <div>
         <Icons/>
         <Navbar/>
         <Hero/>
         <SectionOne/>
         <SectionThreeThree/>
         <SectionThree/>
         <Sectionfour/>
         <SectionFive/>
         <SectionSix/>
         <SectionSeven/>
         <Footer/>
    </div>
  );
}

export default App;
