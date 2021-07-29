import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router'
import { useHistory } from "react-router-dom";
       nlknknjkn /jbnljB M<nk lnk;lnm;kljm 
i[p 0-]0=-p=n o poipoiopiopikpoikpoikpoujpo9upub kjn.b /kn nkb nb jhgb uhu/,;lm;kn   jlh 90uu90u9 u99u9opimoioikoikpoipoipipipioiiiiiiiiiiiiiiipoiopuhhhgtt77 bt78 t7tt7t78t9t79-8 989y98988 y8y8y89y98y89y89y8 89y 79 t7tt78t7tt8t 8tt t t6tr76 r7r7r76rt6t8 y78y 7y 89y978y 89y89y80[o y8
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

  const [isLoggedIn, setLoggedIn] = useState(false);

  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
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





  )




  



  


}

export default App
