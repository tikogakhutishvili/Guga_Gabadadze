import React from 'react';
import './styles/contacts.css'
import './styles/contacts-res.css'
const Contacts = () => {
    return(
      <div className='contacts'>
        <h1>Contacts</h1>
        <main>
           <ul className='contacts-list'>
            <li>
              <img src="./icons/facebook.png" alt="" />
              <a href="https://www.facebook.com/guga.gabada">Guga Gabadadze</a>
            </li>
            <li>
              <img src="./icons/insta.png" alt="" />
              <a href="https://www.instagram.com/gugagabadadze?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Guga Gabadadze</a>
            </li>
            <li>
              <img src="./icons/Gmail.png" alt="" />
              <a href="mailto:gabadadze.gugsona@gmail.com">gabadadze.gugsona@gmail.com</a>
            </li>
            <li>
              <img src="./icons/linkedin.png" alt="" />
              <a href="https://www.linkedin.com/in/guga-gabadadze-4b35452a3/">Guga Gabadadze</a>
            </li>
            <li>
              <img src="./icons/phone.png" alt="" />
              <a href="tel:+995514951195">514951195</a>
            </li>
            <li>
              <img src="./icons/location.png" alt="" />
              <h3>Georgia, Tbilisi</h3>
            </li>
          </ul> 
        </main>
      </div>

    )
}
export default Contacts;