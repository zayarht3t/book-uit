import React,{useState} from 'react'
import './home.css'
import Navbar from '../components/navbar/Navbar'
import Main from '../components/navbar/main/Main'
import Footer from '../components/navbar/footer/Footer'
import Alert from '../components/navbar/alert/Alert'


const Home = () => {
  const [popup,setPopup] = useState(true);
  return (
    <div className="App w-full  bg-sky-300">
      <Navbar/>
      {
        popup &&
        <Alert setPopup={setPopup}/>
      }
      <Main/>
      <Footer/>
      
    </div>
  )
}

export default Home