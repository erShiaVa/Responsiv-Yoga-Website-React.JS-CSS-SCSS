import React from 'react';
import "./retreat.scss";
import { images } from "../../images";

function Retreat() {
  return (
    <section className="retreat">
        <div className="retreat__container">
          <img className='retreat__img' src={images.yoga_retreat} alt="#" />  
        <div className="retreat__text">
          <h3 className="retreat__heading">Embark on a Soulful Journey at our Bali Yoga Retreat</h3>
          <p className="retreat__paragraph one">Discover Serenity, Rejuvenation, and Inner Balance amidst Bali's Natural Beauty</p>
          <p className='retreat__paragraph'>
            Escape the hustle and immerse yourself in a transformative Yoga Retreat nestled in the heart of Bali's tranquil landscapes. 
            Our idyllic sanctuary offers a sanctuary for self-discovery and rejuvenation. Wake up to the gentle sound of nature, surrounded 
            by lush greenery and breathtaking vistas.
          </p>
          <p className='retreat__paragraph'>
            At our Bali Yoga Retreat, our experienced instructors will guide you through daily yoga and meditation sessions, 
            designed to deepen your practice and foster a profound connection with mind, body, and spirit. Whether you're a seasoned 
            yogi or a beginner, our classes cater to all levels.
            Indulge in wholesome, organic meals prepared with love, nourishing your body from within. 
          </p>
          <p className='retreat__paragraph'>
            Allow the stresses of everyday life to melt away as you indulge in holistic therapies, traditional Balinese massages, 
            and revitalizing spa treatments.
          </p>  
          <p className='retreat__paragraph'>  
            Beyond the mat, explore the beauty of Bali, from pristine beaches to ancient temples, engaging in cultural experiences 
            that enrich your soul. Connect with like-minded individuals, forming lifelong friendships, and savor each moment of this
            unforgettable journey.
            Come, be a part of our Bali Yoga Retreat and return home with a renewed sense of purpose, invigorated spirit, and cherished 
            memories that will last a lifetime.
          </p>
        </div>
      </div>  

    </section>
  )
}

export default Retreat