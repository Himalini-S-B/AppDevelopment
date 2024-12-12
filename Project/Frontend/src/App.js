import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { About } from './component/About';
import { Contact } from './component/Contact';
import Weather from './component/Weather';
import { Machinery } from './component/Machinery';
import Manures from './component/Manures';
import Pesticides from './component/Pesticides';
import Tools from './component/Tools';
import Transportation  from './component/Transportation';
import { GetinTouch } from './component/GetinTouch';
import MarketPrice from './component/MarketPrice';
import { useTranslation } from 'react-i18next';
import ImageRecognition from './component/ImageRecognition';
import { Company } from './component/Company';
import { Resource } from './component/Resource';
import ChatBox from './component/Chat';
import ScrollToTop from './component/Scrolltotop';
import PrivacyPolicy from './component/PrivacyPolicy';
import { TermsCondition } from './component/TermsCondition';


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <Router>
      <Link to="/"></Link>
      <Link to="/about"></Link>
      <Link to="/contact"></Link>
      <Link to="/getintouch"></Link>
      <Link to="/weather"></Link>
      <Link to="/machinery and technology"></Link>
      <Link to="/tools"></Link>
      <Link to="/manures"></Link>
      <Link to="/pesticides"></Link>
      <Link to="/marketprice"></Link>
      <Link to="/transport"></Link>
      <Link to="/recognition"></Link>
      <Link to="/company"></Link>
      <Link to="/resource"></Link>
      <Link to="/chat"></Link>
      <Link to="/scroll"></Link>
      <Link to="/privacy"></Link>
      <Link to="/terms"></Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/getintouch" element={<GetinTouch/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/machinery and technology" element={<Machinery/>}/>
        <Route path="/tools" element={<Tools/>}/>
        <Route path="/manures" element={<Manures/>}/>
        <Route path="/pesticides" element={<Pesticides/>}/>
        <Route path="/marketprice" element={<MarketPrice/>}/>
        <Route path="/transport" element={<Transportation/>}/>
        <Route path="/recognition" element={<ImageRecognition/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/resource" element={<Resource/>}/>
        <Route path="/chat" element={<ChatBox/>}/>
        <Route path="/scroll" element={<ScrollToTop/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/terms" element={<TermsCondition/>}/>
     </Routes> 
    </Router>
    </div>
  );
}

export default App;
