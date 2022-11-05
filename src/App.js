import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Navbar } from './Components';
import ScrollToTop from "react-scroll-to-top";
import Layout from './Layout/Layout'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

function App() {
  function getLibrary(provider) {
    return new Web3Provider(provider);
  }
  
  return (
    <div className="App">
      <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Navbar />
        <Layout />
        <Footer />
        </Web3ReactProvider>
        <ScrollToTop smooth style={{background : '#2CBBDB' , borderRadius : '40px' , padding : "6px",}}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
