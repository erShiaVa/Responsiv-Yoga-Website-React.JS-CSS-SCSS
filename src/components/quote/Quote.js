import React from 'react';
import "./quote.scss";
import { images } from "../../images";

function Quote() {
  return (
    <div className='quote__container'>
        <div className="quote__row text">
            <p className='quote__text'>
            "The purpose of life is to be happy. That is what all human beings, whether they realize it or not, 
            seek deep within their hearts. From birth to death, we pursue this goal."
            <span>Dalai Lama</span>
            </p>
        </div>
        <div className="quote__row">
           <img src={images.quote_img} alt="#" />
        </div>
    </div>
  )
}

export default Quote