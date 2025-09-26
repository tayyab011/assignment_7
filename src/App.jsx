
import { Suspense,  } from 'react';
import './App.css'
  import { ToastContainer } from "react-toastify";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Toggles from './components/Toggles';
import Loader from './components/Loader';

 const fetchIssues =async()=>{
  const result =await fetch("./data.json")
 
  return result.json()
} 


 const fetchPromice = fetchIssues(); 
 
function App() {


  return (
    <>
      <Navbar />

      <Suspense fallback={<Loader/>}>
        <Toggles
         fetchPromice={fetchPromice}
        />
      </Suspense>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App
