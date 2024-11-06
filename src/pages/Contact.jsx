import React from 'react'
import { ContactForm, ContactCards } from '../components/rev'
import Navbar from '../components/Navbar'


const Contact = () => {
  return (

    <div>
    <Navbar/>

      <ContactCards />
      <ContactForm />
      <div className="overflow-hidden max-w-full w-full h-[500px]">
      <div id="google-maps-canvas" className="h-full w-full max-w-full">
        <iframe
          title="Google Maps"
          className="h-full w-full border-0"
          src="https://www.google.com/maps/embed/v1/place?q=Statue+Of+Liberty&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>
  )
}

export default Contact
