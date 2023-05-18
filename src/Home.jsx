import React, { useState } from 'react'
import Frame1 from './components/Frame1'
import Frame2 from './components/Frame2'
import Frame3 from './components/Frame3'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
import ContactForm from './components/ContactForm'
import "./assets/css/responsive.css"

const Home = () => {
    let [show, setShow] = useState(true)

    let update = () => {
        setShow(false)
    }
    let display=()=>{
        setShow(true)
      }
    
    return (
        <>
            <Frame1 />
            {show ? <ContactForm prop={update} /> : null}

            <Frame2 prop={display}/>
            <Frame3 prop={display}/>
            <Footer />
            <Copyright />
        </>
    )
}

export default Home