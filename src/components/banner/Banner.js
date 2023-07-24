import React from 'react';
import yogavideo from "../../videos/yoga-video.mp4";
import "./banner.scss";

function Banner() {
  return (
    <div className='banner'>
        <video className="banner__video" 
              src={yogavideo} 
              muted loop autoPlay>
        </video>
        <div className="banner__video-colorize"></div>

      <div className="banner__container">
        <h3 className="h3__heading--bg">Explore the Harmony of Body and Mind in Our Inspiring Yoga Classes</h3>
        <div className="banner__story">
          <p>Welcome to our Yoga School, where tranquility meets transformation. Immerse yourself in the ancient practice of yoga and experience the harmony of body, mind, and soul. Our inspiring yoga classes are designed to cater to practitioners of all levels, from beginners seeking a serene introduction to yoga to experienced yogis looking to deepen their practice.</p>
          <p>Led by our team of dedicated and certified instructors, each class is a journey of self-discovery and inner exploration. Through a blend of dynamic postures, breathwork, and meditation, you will find balance, strength, and serenity. Whether you wish to reenergize your spirit, enhance flexibility, or simply find peace amidst life's chaos, our classes are here to support you on your unique path.</p>
          <p>Join us in our serene sanctuary, nestled in the heart of nature, as we embark on this blissful voyage of self-awareness. Whether you seek a single class, a yoga retreat, or a transformative stay at our Bali retreat, we look forward to guiding you towards a more centered, vibrant, and mindful way of living.</p>
        </div>
        <div className="banner__book">
          <button className='btn__book'>book now</button>
        </div>
      </div>
    </div>
  )
}

export default Banner