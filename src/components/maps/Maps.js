import React from 'react';
import "./maps.scss";

function Maps() {
  return (
    <iframe className='maps'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9711.954295609325!2d13.454736183974049!3d52.515545852957885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e60177a68f7%3A0xe4fe06fa1e72bba7!2sSamariterstra%C3%9Fe%204%2C%2010247%20Berlin!5e0!3m2!1sde!2sde!4v1689886015657!5m2!1sde!2sde" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title='google maps'>
    </iframe>
  )
}
export default Maps