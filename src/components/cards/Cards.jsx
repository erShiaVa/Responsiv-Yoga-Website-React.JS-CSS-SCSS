import React from 'react';
import './cards.scss';
import { CiFaceSmile, CiLocationOn, CiTimer } from 'react-icons/ci';

function Cards() {
    return (
      <div className="card__list">
        <div className="card">
          <CiLocationOn 
                className="card__icon"
                size={80} 
            />
          <p className='description'>Fred-Uhlmann str.20/B</p>
          <p className='description'>12459 Berlin-Zehlendorf</p>
        </div>
        <div className="card">
          <CiTimer 
                className="card__icon"
                size={80}  
            />
          <p className='description'>Di. - Fr. : 7:00 - 21:15</p>
          <p className='description'>Sa. - Mo. : 8:00 - 19:00</p>
        </div>
        <div className="card">
          <CiFaceSmile 
                className="card__icon" 
                size={80} 
            />
          <p className='description'>+49 172 310 4829</p>
          <p className='description'>yoga@info.com </p>
        </div>
      </div>
    );
  }

export default Cards