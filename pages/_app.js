import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import '../styles/globals.css';
import ProgressBar from "../components/ProgressBar";

export default function App({ Component, pageProps }) {
  return( <>
    <ProgressBar />
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
    
    )
    
}
