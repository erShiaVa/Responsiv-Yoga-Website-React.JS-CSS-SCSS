import React from 'react';
import { images } from "../../images";
import "./info.scss";

function Info() {
  return (

  <div className='info__first'>
    <h2 className='h2__heading'>our classes</h2>
      <p className='subheading'>
        Booking our yoga classes is a breeze! With just a few clicks, you can secure your spot in our transformative sessions
      </p>
    <div className='info'>
        <div className="container info__classes">
          <div className="info__class">
            <img src={images.hatha_yoga} alt="" />
          </div>
          <div className="info__content">
            <h3>Inside Flow Yoga</h3>
            <p className='description'>Advance Level | 1.5 hours</p>
            <p className='cut__text'>Inside Flow Yoga is a dynamic and creative practice that seamlessly blends traditional Vinyasa flow with expressive movements and rhythmic music. Let the beat guide your journey as you synchronize breath and movement, flowing through sequences that inspire both the body and soul. Unleash your inner creativity and find serenity in the fluidity of Inside Flow Yoga. Experience the transformative power of this soulful practice that harmonizes movement, breath, and music into a mesmerizing flow of energy and grace.</p>
            <input type="checkbox" className='icon__down' />
          </div>
        </div>

        <div className="container info__classes">
          <div className="info__class">
            <img src={images.class_yoga} alt="" />
          </div>
          <div className="info__content">
            <h3>Body Balance</h3>
            <p className='description'>All Levels | 1.5 hours</p>
            <p className='cut__text'>Body Balance combines elements of Yoga, Tai Chi, and Pilates to create a holistic experience. Focusing on breath, flexibility, and strength, this class improves balance and mobility. Nourish your soul with a calming meditation, creating a sense of inner harmony. Experience the fusion of movement and tranquility in Body Balance.</p>
            <input type="checkbox" className='icon__down' />
          </div>
        </div>

        <div className="container info__classes">
          <div className="info__class">
            <img src={images.yin_yoga} alt="" />
          </div>
          <div className="info__content">
            <h3>Yin Yoga</h3>
            <p className='description'>All Levels | 1.5 hours</p>
            <p className='cut__text'>Yin Yoga offers a meditative and deep practice that targets the connective tissues and joints. Embrace longer holds in gentle postures, allowing the body to release tension and restore balance. Through mindful breathing and relaxation, Yin Yoga nurtures the mind-body connection, leaving you feeling grounded and rejuvenated.</p>
            <input type="checkbox" className='icon__down' />
          </div>
        </div>
    </div>
  </div>
  )
}

export default Info