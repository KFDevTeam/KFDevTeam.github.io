import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router'
import { useHistory } from "react-router-dom";

import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

import firebase from 'firebase/app';
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);
export const AuthContext = React.createContext(null);


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {

  const history = useHistory();
  const handleRoute = () =>{ 
    history.push("/Join");
  }

  const [isLoggedIn, setLoggedIn] = useState(false);

  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
    Is logged in? {JSON.stringify(isLoggedIn)}

    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />

        
    </div>

    </AuthContext.Provider>






  )




  



  


}

export default App
